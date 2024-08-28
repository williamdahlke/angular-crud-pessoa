import { Injectable } from '@angular/core';
import { Cidade } from '../../cidade.model';

const LS_CHAVE = "cidades";

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor() { }

  listarTodos() : Cidade[]{
    const cidades = localStorage[LS_CHAVE];
    return cidades ? JSON.parse(cidades) : [];
  }

  buscarPorId(id : number){
    const cidades = this.listarTodos();
    return cidades.find(cidade => cidade.id == id);
  }

  remover(id : number){
    let cidades = this.listarTodos();
    cidades = cidades.filter(x=> x.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  alterar(cidade : Cidade){
    let cidades = this.listarTodos();

    cidades.forEach( (obj, index, objs) => {
      if (cidade.id === obj.id){
        objs[index] = cidade;
      }
    })
    localStorage[LS_CHAVE] = JSON.stringify(cidades);      
  }

  inserir(cidade : Cidade){
    const cidades = this.listarTodos();
    cidade.id = new Date().getTime();
    cidades.push(cidade);
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }
}
