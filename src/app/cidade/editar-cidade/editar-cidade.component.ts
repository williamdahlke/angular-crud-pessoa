import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CidadeService } from '../services/cidade.service';
import { Cidade, Estado } from '../../shared';
import { EstadoService } from '../../estado/services/estado.service';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrl: './editar-cidade.component.css'
})
export class EditarCidadeComponent implements OnInit {

  estados : Estado[] = [];
  constructor(private service : CidadeService,
              private route : ActivatedRoute,
              private router : Router,
              private estadoService : EstadoService){}

  ngOnInit(): void {
    this.estados = this.estadoService.listarTodos();
    let id = +this.route.snapshot.params['id'];
    const res = this.service.buscarPorId(id);
    if (res !== undefined){
      this.cidade = res;
    } 
    else{
      throw new Error("Cidade não encontrada: id = " + id);
    }
  }

  @ViewChild('formCidade') formCidade! : NgForm;
  cidade : Cidade = new Cidade();

  atualizar(){
    if (this.formCidade.form.valid){
      this.service.alterar(this.cidade);
      this.router.navigate(['/cidades/listar']);
    }
  }
}
