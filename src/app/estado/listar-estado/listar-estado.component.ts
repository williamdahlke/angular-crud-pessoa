import { Component, OnInit } from '@angular/core';
import { EstadoService } from '../services/estado.service';
import { Estado } from '../../shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEstadoComponent } from '../modal-estado/modal-estado.component';

@Component({
  selector: 'app-estado-cidade',
  templateUrl: './listar-estado.component.html',
  styleUrl: './listar-estado.component.css'
})
export class ListarEstadoComponent implements OnInit{
  
  constructor(private service : EstadoService,
              private modalService : NgbModal){}

  ngOnInit(): void {
    this.estados = this.listarEstados();
  }

  title : string = "Estados";
  estados : Estado[] = [];

  listarEstados() : Estado[]{
    return this.service.listarTodos();
  }

  remover($event: any, estado: Estado) : void{
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o estado ${estado.nome}?`)){
      this.service.remover(estado.id!);
      this.estados = this.listarEstados();
    }
  }

  abrirModalEstado(estado : Estado){
    const modalRef = this.modalService.open(ModalEstadoComponent);
    modalRef.componentInstance.estado = estado;
  }
}
