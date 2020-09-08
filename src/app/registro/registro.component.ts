import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  cliente:any;
  nombre:string;
  Dui:number;
  CodigoP;
  DescripcionP:string;
  Precio:number;
  visitas:number;
  precioT:number;
  registro=[];
  descuento:number;
  opcionSeleccionado:string;
  nombreP:string;


  constructor() { }

  ngOnInit(): void {
    this.nombre='';
    this.DescripcionP = '';
    this.nombreP='';
    this.Precio = 0;
    this.descuento = 0;
    this.Dui=0;
    this.visitas=0;
    this.CodigoP=[
      "Gaseosa",
      "Detergente",
      "Carne picada",
      "Leche Entera",
      "Lampara de Noche"
    ];
    this.opcionSeleccionado="Selecciona";
  }
  
  capturar(){
    switch(this.opcionSeleccionado){
      case 'Gaseosa':
        this.nombreP="Gaseosa";
        this.DescripcionP = "Bebida carbonatada";
        this.Precio = 0.50;
      break;
      case 'Detergente':
        this.nombreP="Detergente";
        this.DescripcionP = "Accion quita manchas";
        this.Precio = 0.60;
      break;
      case 'Carne picada':
        this.nombreP="Carne Picada";
        this.DescripcionP = "Carne triturada";
        this.Precio = 1.20;
      break;
      case 'Leche Entera':
        this.nombreP="Leche Entera";
        this.DescripcionP = "Leche con muchos nutrientes";
        this.Precio = 1.35;
      break;
      case 'Lampara de Noche':
        this.nombreP="Lampara de Noche";
        this.DescripcionP = "Para iluminar la noche";
        this.Precio = 6.50;
      break;
    }
  }
  ingresar(){
    if(this.visitas>=2 && this.visitas<4) {
      this.descuento = 0.05;
    } else if(this.visitas>=4){
      this.descuento = 0.10;
    }
    this.precioT = this.Precio - (this.Precio * this.descuento);
    this.cliente = {"nombre":this.nombre, "Dui":this.Dui, "nombreP":this.nombreP, "DescripcionP":this.DescripcionP, "precioT":this.precioT};
    this.registro.push(this.cliente);
    this.visitas++;
  }
}
