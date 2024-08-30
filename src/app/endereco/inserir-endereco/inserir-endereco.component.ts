import { Component, ViewChild } from '@angular/core';
import { EnderecoService } from '../services/endereco.service';
import { Router } from '@angular/router';
import { Endereco } from '../../shared';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inserir-endereco',
  templateUrl: './inserir-endereco.component.html',
  styleUrl: './inserir-endereco.component.css'
})
export class InserirEnderecoComponent {
  
  @ViewChild('formEndereco') formEndereco! : NgForm;
  endereco : Endereco = new Endereco();
  
  constructor(private service : EnderecoService,
              private router : Router){
  }

  inserir() : void{
    if (this.formEndereco.form.valid){
      this.service.inserir(this.endereco);
      this.router.navigate(["/enderecos/listar"]);
    }
  }

}
