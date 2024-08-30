import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EstadoService } from '../services/estado.service';
import { Estado } from '../../shared';

@Component({
  selector: 'app-editar-estado',
  templateUrl: './editar-estado.component.html',
  styleUrl: './editar-estado.component.css'
})
export class EditarEstadoComponent implements OnInit {
  constructor(private service : EstadoService,
              private route : ActivatedRoute,
              private router : Router ){}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.service.buscarPorId(id);
    if (res !== undefined){
      this.estado = res;
    } 
    else{
      throw new Error("Estado não encontrado: id = " + id);
    }
  }

  @ViewChild('formEstado') formEstado! : NgForm;
  estado : Estado = new Estado();

  atualizar(){
    if (this.formEstado.form.valid){
      this.service.alterar(this.estado);
      this.router.navigate(['/estados/listar']);
    }
  }
}
