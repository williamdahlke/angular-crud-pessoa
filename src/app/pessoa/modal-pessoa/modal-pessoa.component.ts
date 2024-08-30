import { Component, Input } from '@angular/core';
import { Pessoa } from '../../shared';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-pessoa',
  templateUrl: './modal-pessoa.component.html',
  styleUrl: './modal-pessoa.component.css'
})
export class ModalPessoaComponent {
  @Input() pessoa! : Pessoa;

  constructor(public activeModal : NgbActiveModal){}
}
