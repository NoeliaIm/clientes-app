import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) {

  }

  ngOnInit() {
    this.getClientes();
  }
  getClientes() {
    this.clienteService.getClientes().subscribe(
      response => {
        this.clientes = response;
        console.log(response);
      },
      error => {
        console.log(error as any);
      }
    );
  }

}
