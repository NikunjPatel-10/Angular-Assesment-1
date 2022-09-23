import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public url: string;
  // public geturl: any;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:3000/"
  }

  getData(): Observable<any> {
    const geturl = this.url + "employee"
    return this.http.get(geturl);
  }

  postData(data: any): Observable<any> {
    const geturl = this.url + "employee";
    return this.http.post(geturl, data)
  }

  UpdateData(data: any, id: number) {
    const geturl = this.url + "employee/" + id;
    return this.http.put(geturl , data)
  }

  DeleteData(id: number) {
    const geturl = this.url + "employee/" + id
    return this.http.delete(geturl)
  }
}
