import { Injectable } from '@angular/core';
import { BrokerAccount } from '../model/BrokerAccount';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageResponse } from '../model/MessageResponse';

@Injectable()
export class BrokerAccountService {
  constructor(private http: HttpClient) { }



  getBrokerAccount() {
    return undefined;
  }
      sendBrokerAccountData(brokerAccount: BrokerAccount) {

      const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
            'Authorization': brokerAccount.RequestToken
          })
        };

        console.log(JSON.stringify(brokerAccount));
      return this.http.post('https://dev-platform.investsure.info/dev/account/platform/' + brokerAccount.BrokerName,
      brokerAccount, httpOptions);
    }

}
