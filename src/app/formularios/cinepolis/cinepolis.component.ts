import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent implements OnInit {

  formularioCompra!: FormGroup;
  totalpagar!: number;
  precio: number = 12;
  mostrarInfo: boolean = false;
  nombreComprador: string = '';
  numBoletos: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.formularioCompra = new FormGroup({
      nombreComprador: new FormControl('', Validators.required),
      numCompradores: new FormControl('', [Validators.required, Validators.min(1)]),
      cineco: new FormControl('', Validators.required),
      numBoletos: new FormControl('', [Validators.required, Validators.min(1), this.limiteBoletos.bind(this)])
    });
  }

  calculoCosto(): void {
    const numCompradores = this.formularioCompra.get('numCompradores')?.value;
    const cineco = this.formularioCompra.get('cineco')?.value;
    const numBoletos = this.formularioCompra.get('numBoletos')?.value;

    const costoBase = numBoletos * this.precio;

    if (cineco === 'si') {
      this.totalpagar = numBoletos >= 6 ? (costoBase * 0.85)*(0.90) : numBoletos >= 3 ? (costoBase * 0.90)*(0.90) : costoBase * 0.90;
    } else {
      this.totalpagar = numBoletos >= 6 ? costoBase * 0.85 : numBoletos >= 3 ? costoBase * 0.90 : costoBase;
    }
  }

  limiteBoletos(control: FormControl): { [key: string]: boolean } | null {
    const numCompradores = this.formularioCompra?.get('numCompradores')?.value;
    
    if (numCompradores) {
      const numBoletos = control.value;
      const maxBoletosPermitidos = numCompradores * 7;

      if (numBoletos > maxBoletosPermitidos) {
        return { 'limiteExcedido': true };
      }
    }
    return null;
  }

  onSubmit(): void {
    if (this.formularioCompra.valid) {
      this.calculoCosto();
      this.nombreComprador = this.formularioCompra.get('nombreComprador')?.value;
      this.numBoletos = this.formularioCompra.get('numBoletos')?.value;
      this.mostrarInfo = true;
      if (this.formularioCompra.valid) {
        this.mostrarInfo = true;
      }
    }
  }
}
