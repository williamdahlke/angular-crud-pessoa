import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaAltaPipe } from '../shared/pipes/caixa-alta.pipe';
import { NumericoDirective, MinimoValidatorDirective } from '../shared/directives';

@NgModule({
  declarations: [
    CaixaAltaPipe,
    NumericoDirective,
    MinimoValidatorDirective    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CaixaAltaPipe,
    NumericoDirective,
    MinimoValidatorDirective    
  ]
})
export class SharedModule { }
