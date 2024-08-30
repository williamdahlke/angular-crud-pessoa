import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CidadeService } from '../services/cidade.service';
import { Cidade } from '../../shared';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrl: './editar-cidade.component.css'
})
export class EditarCidadeComponent implements OnInit {
  constructor(private service : CidadeService,
              private route : ActivatedRoute,
              private router : Router ){}

  ngOnInit(): void {
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
