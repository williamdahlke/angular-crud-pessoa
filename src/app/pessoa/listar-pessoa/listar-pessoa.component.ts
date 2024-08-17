import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from '../../shared/models/pessoa.model';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrl: './listar-pessoa.component.css'
})
export class ListarPessoaComponent implements OnInit{
  
  constructor(private pessoaService : PessoaService){}

  ngOnInit(): void {
    this.pessoas = this.listarPessoas();
  }

  title : string = "Pessoas";
  pessoas : Pessoa[] = [];

  listarPessoas() : Pessoa[]{
    return this.pessoaService.listarTodos();
  }

  remover($event: any, pessoa: Pessoa) : void{
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a pessoa ${pessoa.nome}?`)){
      this.pessoaService.remover(pessoa.id!);
      this.pessoas = this.listarPessoas();
    }
  }
}
