import { Component, OnInit } from '@angular/core';
import { EstadoService } from '../services/estado.service';
import { Estado } from '../../shared';

@Component({
  selector: 'app-estado-cidade',
  templateUrl: './listar-estado.component.html',
  styleUrl: './listar-estado.component.css'
})
export class ListarEstadoComponent implements OnInit{
  
  constructor(private service : EstadoService
  ){}

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
}
