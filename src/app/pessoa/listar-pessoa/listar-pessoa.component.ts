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
    return [
      new Pessoa(1, "Razer", 22),
      new Pessoa(1, "Brunna", 55),
      new Pessoa(1, "Guilherme", 33),
      new Pessoa(1, "Juan", 88)
    ];
    //return this.pessoaService.listarTodos();
  }
}
