import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { FormGroup, FormControl } from '@angular/forms';
import { ClienteService } from 'src/service/cliente.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  titulo = 'Fomulario';
  public cliente: Cliente;
  public clienteForm: FormGroup;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteForm = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      email: new FormControl(''),
    });
    this.cliente = new Cliente();
  }

  onSubmit(){
    this.cliente.nombre = this.clienteForm.value.nombre;
    this.cliente.apellido=this.clienteForm.value.apellido;
    this.cliente.email= this.clienteForm.value.email;
    console.log(this.cliente);
    this.clienteService.createCliente(this.cliente).subscribe(
      response=> {
        console.log(response);
      },
      error=>{
        console.log(error as any);
      }
    );
  }

}
