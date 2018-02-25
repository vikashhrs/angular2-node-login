import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserXhr } from '@angular/http';
import { CustomBrowserXhr } from './customBrowserXHR'


import { AppComponent } from './app.component';
import { AppRoutingModule, RoutingComponents } from './routes/app.routing.module';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    AuthenticationService,
    { provide: BrowserXhr, useClass: CustomBrowserXhr }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
