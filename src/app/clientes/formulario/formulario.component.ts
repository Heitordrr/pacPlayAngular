import { Component, OnInit } from '@angular/core';
import { Cliente } from '../shared/cliente';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  formCliente!: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit()   {
    this.createForm(new Cliente());
  }

  createForm(cliente: Cliente) {
    this.formCliente = this.formBuilder.group({
      nome: [cliente.nome],
      tipo: [cliente.tipo],
      genero: [cliente.genero],
      observacao: [cliente.observacao],
      inativo: [cliente.inativo]
    })
  }


  onSubmit() {
    console.log(this.formCliente.value);

  }

}
