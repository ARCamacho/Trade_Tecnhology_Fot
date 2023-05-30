import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Country } from '../../../app/interfaces/Country';
import { League } from '../../../app/interfaces/League';
import axios from 'axios';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  responseData: any;
  selectedOption: string;
  tableData: any[] = [];
  endpointData: any[] = []; 
  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalPages: number = 0;

  constructor() {
    this.selectedOption = '';
  }

  ngOnInit() {
    this.makeHttpRequest();
  }

  async makeHttpRequest() {
    let endpoint = '';
  
    switch (this.selectedOption) {
      case 'timezone':
        endpoint = `${environment.apiFootbal.url}/timezone`;
        break;
      case 'countries':
        endpoint = `${environment.apiFootbal.url}/countries`;
        break;
      case 'leagues':
        endpoint = `${environment.apiFootbal.url}/leagues`;
        break;
      case 'teams':
        endpoint = `${environment.apiFootbal.url}/teams`;
        break;
      default:
        // Caso nenhuma opção seja selecionada, não fazer a solicitação HTTP
        return;
    }
  
    const options = {
      method: 'GET',
      url: endpoint,
      headers: {
        'X-RapidAPI-Key': environment.apiFootbal.tokenKey,
        'X-RapidAPI-Host': environment.apiFootbal.tokenHost
      }
    };
  
    try {
      const response = await axios.request(options);
      this.responseData = response.data;
      console.log(response.data);
  
      switch (this.selectedOption) {
        case 'countries':
          this.tableData = this.responseData.response as Country[];
          break;
        case 'leagues':
          this.tableData = this.responseData.response as League[];
          break;
       
        default:
          this.tableData = [];
          break;
      }
  
      this.endpointData = this.tableData;
      this.updatePagination();
    } catch (error) {
      console.error(error);
    }
  }
  

  onOptionSelected(option: string) {
    this.selectedOption = option;
    this.makeHttpRequest();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.endpointData.length / this.itemsPerPage);
    this.currentPage = 1;
  }

  get paginatedData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.endpointData.slice(startIndex, endIndex);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}

