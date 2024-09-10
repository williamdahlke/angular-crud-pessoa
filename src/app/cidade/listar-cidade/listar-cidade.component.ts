import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../services/cidade.service';
import { Cidade } from '../../shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCidadeComponent } from '../modal-cidade/modal-cidade.component';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrl: './listar-cidade.component.css'
})
export class ListarCidadeComponent implements OnInit{
  
  constructor(private service : CidadeService,
              private modalService : NgbModal){}

  ngOnInit(): void {
    this.cidades = this.listarCidades();
  }

  title : string = "Cidades";
  cidades : Cidade[] = [];

  listarCidades() : Cidade[]{
    return this.service.listarTodos();
  }

  remover($event: any, cidade: Cidade) : void{
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a cidade ${cidade.nome}?`)){
      this.service.remover(cidade.id!);
      this.cidades = this.listarCidades();
    }
  }

  abrirModalCidade(cidade : Cidade){
    const modalRef = this.modalService.open(ModalCidadeComponent);
    modalRef.componentInstance.cidade = cidade;
  }
}
