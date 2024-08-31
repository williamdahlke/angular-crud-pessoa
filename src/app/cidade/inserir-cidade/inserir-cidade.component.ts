import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Cidade, Estado } from '../../shared';
import { CidadeService } from '../services/cidade.service';
import { EstadoService } from '../../estado/services/estado.service';

@Component({
  selector: 'app-inserir-cidade',
  templateUrl: './inserir-cidade.component.html',
  styleUrl: './inserir-cidade.component.css'
})
export class InserirCidadeComponent implements OnInit {
  
  @ViewChild('formCidade') formCidade! : NgForm;
  cidade : Cidade = new Cidade();
  estados : Estado[] = [];
  
  constructor(private service : CidadeService,
              private router : Router,
              private estadoService : EstadoService){
  }
  ngOnInit(): void {
    this.estados = this.estadoService.listarTodos();
  }

  inserir() : void{
    if (this.formCidade.form.valid){
      this.service.inserir(this.cidade);
      this.router.navigate(["/cidades/listar"]);
    }
  }

}
