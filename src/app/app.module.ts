import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { HttpModule } from '@angular/http';
import { AuthService } from './Service/auth.service';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

import { BrokerAccountService } from './Service/BrockerAccount.service';
import { AppRoutingModule } from './app-routing.module';
import { ReadJsonService } from './Service/readJson.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    HttpModule,
    AppRoutingModule,
    MatSelectModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [AuthService, BrokerAccountService, ReadJsonService],
  bootstrap: [AppComponent]
})

export class AppModule { }
