import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../services/endereco.service';
import { Router } from '@angular/router';
import { Endereco } from '../../shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEnderecoComponent } from '../modal-endereco/modal-endereco.component';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrl: './listar-endereco.component.css'
})
export class ListarEnderecoComponent implements OnInit{
  constructor(private service : EnderecoService,
              private router : Router,
              private modalService : NgbModal){}

  ngOnInit(): void {
    this.enderecos = this.listarEnderecos();
  }

  enderecos : Endereco[] = [];

  listarEnderecos() : Endereco[]{
    return this.service.listarTodos();
  }

  remover($event : any, endereco : Endereco) {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o endereço ${endereco.rua} da cidade ${endereco.cidade} e estado ${endereco.estado}?`)){
      this.service.remover(endereco.id!);
      this.enderecos = this.listarEnderecos();
    }
  }

  abrirModalEndereco(endereco : Endereco){
    const modalRef = this.modalService.open(ModalEnderecoComponent);
    modalRef.componentInstance.endereco = endereco;
  }
  
}
