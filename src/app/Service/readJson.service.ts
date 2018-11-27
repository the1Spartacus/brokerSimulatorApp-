import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BrokerAccount } from '../model/BrokerAccount';

@Injectable()
export class ReadJsonService {
  brockeraccount: BrokerAccount;
  brokerName: string;

  constructor(private http: HttpClient) { }

   getJson(fileName: string) {
      return this.http.get<BrokerAccount>('../../assets/data/' + fileName);
    }

    updateJson(requestId: string, token: string) {
      this.brockeraccount.RequestId = requestId;
      this.brockeraccount.RequestToken = token;
      localStorage.setItem('requestID', requestId);
    localStorage.setItem ('data', JSON.stringify(this.brockeraccount));
    }

    getBrockerName() {
      return this.brockeraccount.BrokerName;
    }

  }
