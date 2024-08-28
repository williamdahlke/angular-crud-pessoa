import { Component, OnInit, ViewChild } from '@angular/core';
import { EnderecoService } from '../services/endereco.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Endereco } from '../../shared/models/endereco.model';

@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrl: './editar-endereco.component.css'
})
export class EditarEnderecoComponent implements OnInit {
  constructor(private service : EnderecoService,
              private route : ActivatedRoute,
              private router : Router ){}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.service.buscarPorId(id);
    if (res !== undefined){
      this.endereco = res;
    } 
    else{
      throw new Error("Endereço não encontrado: id = " + id);
    }
  }

  @ViewChild('formEndereco') formEndereco! : NgForm;
  endereco : Endereco = new Endereco();

  atualizar(){
    if (this.formEndereco.form.valid){
      this.service.alterar(this.endereco);
      this.router.navigate(['/enderecos/listar']);
    }
  }
}
