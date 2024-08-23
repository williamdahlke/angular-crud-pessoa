import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../services/endereco.service';
import { Router } from '@angular/router';
import { Endereco } from '../../shared/models/endereco.model';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrl: './listar-endereco.component.css'
})
export class ListarEnderecoComponent implements OnInit{
  constructor(private service : EnderecoService,
              private router : Router){}

  ngOnInit(): void {
    this.enderecos = this.listarTodos();
  }

  enderecos : Endereco[] = [];

  listarTodos() : Endereco[]{
    return this.service.listarTodos();
  }
  
}
