import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Pessoa } from '../../shared';
import { PessoaService } from '../services/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrl: './editar-pessoa.component.css'
})
export class EditarPessoaComponent implements OnInit{
  constructor(private pessoaService : PessoaService,
              private route: ActivatedRoute,
              private router : Router){}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.pessoaService.buscarPorId(id).subscribe({
      next: (pessoa) => {
        if (pessoa == null){
          this.mensagem = `Erro buscando pessoa ${id}`;
          this.mensagem_detalhes = `Pessoa não encontrada ${id}`;
          this.botaoDesabilitado = true;
        } else {
          this.pessoa = pessoa;
          this.botaoDesabilitado = false;
        }
      },
      error: (err) => {
        this.mensagem = `Erro buscando pessoa ${id}`;
        this.mensagem_detalhes = `[${err.status}] ${err.message}`;
        this.botaoDesabilitado = true;
      }
    });
  }

  @ViewChild('formPessoa') formPessoa! : NgForm;
  pessoa : Pessoa = new Pessoa();
  mensagem : string = "";
  mensagem_detalhes : string = "";
  botaoDesabilitado = false;

  atualizar(){
    if (this.formPessoa.form.valid){
      this.pessoaService.alterar(this.pessoa).subscribe({
        next: (pessoa) => {
          this.router.navigate(['/pessoas']);
        },
        error: (err) => {
          this.mensagem = `Erro alterando a pessoa ${this.pessoa.nome}`;
          this.mensagem_detalhes = `[${err.status}] ${err.message}`
        }
      });      
    }
  }
}
