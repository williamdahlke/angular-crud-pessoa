import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services/pessoa.service';
import { Pessoa } from '../../shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPessoaComponent } from '../modal-pessoa/modal-pessoa.component';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrl: './listar-pessoa.component.css'
})
export class ListarPessoaComponent implements OnInit{
  
  constructor(private pessoaService : PessoaService,
              private modalService : NgbModal
  ){}

  ngOnInit(): void {
    this.pessoas = this.listarPessoas();
  }

  title : string = "Pessoas";
  pessoas : Pessoa[] = [];
  mensagem : string = "";
  mensagem_detalhes : string = "";

  listarPessoas() : Pessoa[]{
    this.pessoaService.listarTodos().subscribe({
      next: (data : Pessoa[] | null) => {
        if (data == null){
          this.pessoas = [];
        }
        else{
          this.pessoas = data;
        }
      }, 
      error: (err) => {
        this.mensagem = "Erro buscando lista de usuários";
        this.mensagem_detalhes = `[${err.status}] ${err.message}`
      }
    });
    return this.pessoas;
  }

  remover($event : any, pessoa : Pessoa) : void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o usuário ${pessoa.nome}?`)){
      this.pessoaService.remover(pessoa.id!).subscribe({
        complete: () => {this.listarPessoas();},
        error: (err) => {
          this.mensagem = `Erro removendo pessoa ${pessoa.id} - ${pessoa.nome}`;
          this.mensagem_detalhes = `[${err.status}] ${err.message}`;
        }
      });
    }
  }

  abrirModalPessoa(pessoa : Pessoa){
    const modalRef = this.modalService.open(ModalPessoaComponent);
    modalRef.componentInstance.pessoa = pessoa;
  }
}
