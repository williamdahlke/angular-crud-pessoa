import { Directive, Input, OnInit } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[minimo]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MinimoValidatorDirective,
    multi: true
  }]
})
export class MinimoValidatorDirective implements Validator, OnInit {

  @Input("valorMinimo") valorMinimo : string = "0";
  constructor() { }

  ngOnInit(): void {
    
  }

  validate(control: FormControl): ValidationErrors | null {
    let v : number = +control.value;
    let min: number = +this.valorMinimo;

    if (isNaN(min)){
      min = 0;
    }

    if (isNaN(v)){
      return {'minimo': true, 'requiredValue': min};      
    }
    else if (v < min){
      return {'minimo': true, 'requiredValue': min};
    }
    return null;   
  }

}
