import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EnderecoService } from './services/endereco.service';
import { SharedModule } from '../shared';
import { ModalEnderecoComponent } from './modal-endereco/modal-endereco.component';

@NgModule({
  declarations: [  
    ListarEnderecoComponent, 
    InserirEnderecoComponent, 
    EditarEnderecoComponent, ModalEnderecoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    SharedModule    
  ],
  providers: [
    EnderecoService
  ]
})
export class EnderecoModule { }
