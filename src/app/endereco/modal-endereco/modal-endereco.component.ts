import { Component, Input } from '@angular/core';
import { Endereco } from '../../shared';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-endereco',
  templateUrl: './modal-endereco.component.html',
  styleUrl: './modal-endereco.component.css'
})
export class ModalEnderecoComponent {
  @Input() endereco! : Endereco;

  constructor(public activeModal : NgbActiveModal){}
}
