import { Injectable } from '@angular/core';
import { Estado } from '../../shared/models/estado.model';

const LS_CHAVE = "estados";

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor() { }

  listarTodos() : Estado[]{
    const estados = localStorage[LS_CHAVE];

    return estados ? JSON.parse(estados) : [];
  }

  inserir(estado : Estado){
    const estados = this.listarTodos();
    estado.id = new Date().getTime();
    estados.push(estado);
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  buscarPorId(id : number){
    const estados = this.listarTodos();
    return estados.find(estado => estado.id == id);
  }

  alterar(estado : Estado){
    const estados = this.listarTodos();

    estados.forEach( (obj, index, objs) => {
      if (estado.id === obj.id){
        objs[index] = estado;
      }
    })
    
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  remover(id : number){
    let estados = this.listarTodos();
    estados = estados.filter(estado => estado.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

}
