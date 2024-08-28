import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Estado } from '../../shared/models/estado.model';
import { EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-inserir-estado',
  templateUrl: './inserir-estado.component.html',
  styleUrl: './inserir-estado.component.css'
})
export class InserirEstadoComponent {
  
  @ViewChild('formEstado') formEstado! : NgForm;
  estado : Estado = new Estado();
  
  constructor(private service : EstadoService,
              private router : Router){
  }

  inserir() : void{
    if (this.formEstado.form.valid){
      this.service.inserir(this.estado);
      this.router.navigate(["/estados/listar"]);
    }
  }

}
