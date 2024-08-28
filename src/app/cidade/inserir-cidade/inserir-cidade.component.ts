import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Cidade } from '../../shared/models/cidade.model';
import { CidadeService } from '../services/cidade.service';

@Component({
  selector: 'app-inserir-cidade',
  templateUrl: './inserir-cidade.component.html',
  styleUrl: './inserir-cidade.component.css'
})
export class InserirCidadeComponent {
  
  @ViewChild('formCidade') formCidade! : NgForm;
  cidade : Cidade = new Cidade();
  
  constructor(private service : CidadeService,
              private router : Router){
  }

  inserir() : void{
    if (this.formCidade.form.valid){
      this.service.inserir(this.cidade);
      this.router.navigate(["/cidades/listar"]);
    }
  }

}
