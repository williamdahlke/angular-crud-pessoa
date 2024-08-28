import { Injectable } from '@angular/core';
import { Endereco } from '../../shared/models/endereco.model';

const LS_CHAVE = "enderecos";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor() { }

  listarTodos() : Endereco[]{
    const enderecos = localStorage[LS_CHAVE];
    return enderecos ? JSON.parse(enderecos) : [];
  }

  inserir(endereco : Endereco){
    const enderecos = this.listarTodos();
    endereco.id = new Date().getTime();
    enderecos.push(endereco);
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }

  buscarPorId(id : number){
    const enderecos = this.listarTodos();
    return enderecos.find(endereco => endereco.id == id);
  }

  alterar(endereco : Endereco){
    const enderecos = this.listarTodos();

    enderecos.forEach( (obj, index, objs) => {
      if (endereco.id === obj.id){
        objs[index] = endereco;
      }
    })
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);      
  }  

  remover(id : number){
    let enderecos = this.listarTodos();
    enderecos = enderecos.filter(x=> x.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }
}
