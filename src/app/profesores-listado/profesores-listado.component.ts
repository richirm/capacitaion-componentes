import { Component, OnInit, OnDestroy, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profesores-listado',
  templateUrl: './profesores-listado.component.html',
  styleUrls: ['./profesores-listado.component.scss']
})
export class ProfesoresListadoComponent implements OnInit, OnDestroy, OnChanges {

  @Input() maximoProfesores: number = 5;
  @Output() enviarPago: EventEmitter<number> = new EventEmitter();

  constructor() {
    console.log('constructor');
  }
  
  ngOnChanges(changes: any) {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
