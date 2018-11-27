import { Component } from '@angular/core';
import { AuthService } from './Service/auth.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BrokerAccountService } from './Service/BrockerAccount.service';
import { ReadJsonService } from './Service/readJson.service';
import { BrokerAccount } from './model/BrokerAccount';
import { isNullOrUndefined } from 'util';
import { MessageResponse } from './model/MessageResponse';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'brokerApp';
  filename: string;
   username = 'ShareNet';
   password = '$har3N8t123456789';
   AppClientId = '2t5beig7jt599veuh7l9bedtes';
   requestID: string;
   token: string;
   accountData: BrokerAccount;

  constructor(private auth: AuthService,
              private router: Router,
              private readJsonService: ReadJsonService,
              private accountService: BrokerAccountService,
              private spinnerService: Ng4LoadingSpinnerService) {

      // this.readJsonService.getJson();
   }


   async Authenticate() {
      if (isNullOrUndefined(this.filename)) {
          console.log('file name is ', this.filename);
          return;
      } else {


   console.log('filename ', this.filename);
   this.spinnerService.show();
    this.auth.login(this.username , this.password, this.AppClientId)
    .subscribe( data => {
      console.log('post request is successful', data);
      localStorage.setItem('access_token', data.Data.Token);
      this.token = data.Data.Token;
      this.requestID = this.auth.generateGuid();

      this.readJsonService.getJson(this.filename)
        .subscribe(brokerAccount => {

          brokerAccount.RequestId = this.requestID;
          brokerAccount.RequestToken = this.token;
          console.log(brokerAccount);

          this.accountService.sendBrokerAccountData(brokerAccount)
          .subscribe(response => {
            const svcResponse: MessageResponse = response as MessageResponse;
            console.log('service response ', response);

            if (svcResponse.Code === 0) {
              this.spinnerService.hide();
              window.location.href = 'http://localhost:4200/account/RequestId/' + this.requestID + '/' + brokerAccount.BrokerName;
            }
          },
          error => {
            console.log('service response error ', error);
          });
        }, dataerror => {console.log('Data Error', dataerror); });
      }, error => {
        console.log('Authentication Error', error);
      });

    }

    // this.token = await this.auth.getToken();


    // this.readJsonService.updateJson(this.requestID, this.token);
    // brokerAccount.RequestId = this.requestID;
    // brokerAccount.RequestToken = this.token;

    // const dataSent: boolean = this.accountService.sendBrokerAccountData(brokerAccount);

    // if (dataSent) {
    //   window.location.href = 'http://localhost:4200/account/RequestId/' + this.requestID + '/' + brokerAccount.BrokerName;
    // }
   }

logout() {
  this.auth.logout();
}
}
