import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEstadoComponent } from './listar-estado/listar-estado.component';

import { EditarEstadoComponent } from './editar-estado/editar-estado.component';
import { EstadoService } from './services/estado.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirEstadoComponent } from './inserir-estado/inserir-estado.component';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    ListarEstadoComponent,
    InserirEstadoComponent,
    EditarEstadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule    
  ],
  providers: [
    EstadoService
  ]
})
export class EstadoModule { }
