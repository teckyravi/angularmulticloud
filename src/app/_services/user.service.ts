import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { Message } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
    have =false
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept'
        })
      };

      
    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/api/users`);
    }

    AzurePing() {
        return this.http.get<Message>(`${environment.azureApiUrl}/azure`, this.httpOptions);
    }
  
    GCPPing() {
        return this.http.get<Message>(`${environment.gcpApiUrl}/gcp`);
    }
  
    StockPing() {
        return this.http.get<Message>(`${environment.stockApiUrl}/stock`);
    }
}