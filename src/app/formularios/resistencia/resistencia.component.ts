import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent implements OnInit {

  valoresResistencia!: FormGroup;
  resTotal!: number;
  resMaxima!: number;
  resMinima!: number;
  mostrarInfo: boolean = false;

  coloresHex: string[] = ["#000000", "#8B4513", "#FF0000", "#FFA500", "#FFFF00", "#008000", "#0000FF", "#EE82EE", "#808080", "#FFFFFF"];
  toleranciasHex: { [key: string]: string } = { "oro": "#FFD700", "plata": "#C0C0C0" };

  colorBanda1!: string;
  colorBanda2!: string;
  colorBanda3!: string;
  colorTolerancia!: string;

  constructor() {}

  ngOnInit(): void {
    this.valoresResistencia = new FormGroup({
      resDecimal: new FormControl('', Validators.required),
      resUnitaria: new FormControl('', Validators.required),
      resMultiplicador: new FormControl('', Validators.required),
      tipoTolerancia: new FormControl('', Validators.required)
    });
  }

  obtenerColorHex(valor: number): string {
    return this.coloresHex[valor] || '#FFFFFF';
  }

  obtenerColorToleranciaHex(valor: string): string {
    return this.toleranciasHex[valor] || '#FFFFFF';
  }

  calculoResistencia(): void {
    const resDecimal = this.valoresResistencia.get('resDecimal')?.value;
    const resUnitaria = this.valoresResistencia.get('resUnitaria')?.value;
    const resMultiplicador = this.valoresResistencia.get('resMultiplicador')?.value;
    const tipoTolerancia = this.valoresResistencia.get('tipoTolerancia')?.value;
  
    this.colorBanda1 = this.obtenerColorHex(resDecimal);
    this.colorBanda2 = this.obtenerColorHex(resUnitaria);
    this.colorBanda3 = this.obtenerColorHex(resMultiplicador);
    this.colorTolerancia = this.obtenerColorToleranciaHex(tipoTolerancia);
  
    const valorResistencia = (resDecimal * 1 + resUnitaria) * Math.pow(10, resMultiplicador);
  
    this.resTotal = valorResistencia;
  
    if (tipoTolerancia === 'oro') {
      this.resMaxima = this.resTotal + (this.resTotal * 0.05);
      this.resMinima = this.resTotal - (this.resTotal * 0.05);
    } else {
      this.resMaxima = this.resTotal + (this.resTotal * 0.1);
      this.resMinima = this.resTotal - (this.resTotal * 0.1);
    }
  }
  

  onSubmit(): void {
    this.calculoResistencia();
    this.mostrarInfo = true;
  }
}
