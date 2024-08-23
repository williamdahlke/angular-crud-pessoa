import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPessoaComponent } from './pessoa/listar-pessoa/listar-pessoa.component';
import { InserirPessoaComponent } from './pessoa/inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';
import { EditarEnderecoComponent } from './endereco/editar-endereco/editar-endereco.component';
import { InserirEnderecoComponent } from './endereco/inserir-endereco/inserir-endereco.component';
import { ListarEnderecoComponent } from './endereco/listar-endereco/listar-endereco.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'pessoas/listar',
    pathMatch: 'full' },
  { path: 'pessoas',
    redirectTo: 'pessoas/listar'},
  { path: 'pessoas/listar',
    component: ListarPessoaComponent},
  { path: 'pessoas/novo',
    component: InserirPessoaComponent},
  { path: 'pessoas/editar/:id',
    component: EditarPessoaComponent},
  { path: 'endereco/listar',
    component: ListarEnderecoComponent},
  { path: 'endereco/novo',
    component: InserirEnderecoComponent},
  { path: 'endereco/editar/:id',
    component: EditarEnderecoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
