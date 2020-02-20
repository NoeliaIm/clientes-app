import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientesComponent } from 'src/app/clientes/clientes.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from 'src/app/clientes/cliente';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  public url: string;

  constructor(public http: HttpClient) {
    this.url = global.url;
  }

  getClientes(): Observable<any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    return this.http.get(this.url + '/api/clientes', {headers});
  }
}
