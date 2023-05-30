import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './componenetes/dash/dash.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './componenetes/footer/footer.component';
import { LoginComponent } from './componenetes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
