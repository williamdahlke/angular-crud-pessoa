import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from '../../shared/models/pessoa.model';
import { PessoaService } from '../services/pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
  styleUrl: './inserir-pessoa.component.css'
})
export class InserirPessoaComponent {
  constructor(private pessoaService : PessoaService,
              private router: Router){}

  @ViewChild('formPessoa') formPessoa! : NgForm;
  pessoa : Pessoa = new Pessoa();

  inserir() : void{
    if (this.formPessoa.form.valid){
      this.pessoaService.inserir(this.pessoa);
      this.router.navigate(["/pessoas"]);
    }
  }
}
