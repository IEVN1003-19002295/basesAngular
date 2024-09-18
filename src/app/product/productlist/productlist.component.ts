import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
title="Saludo de variable";

imageWidth:number=130;
imageMargi:number=2;
muestraImg:boolean=false;
listFilter:string='';

showImage():void{

  this.muestraImg=!this.muestraImg;

}

productos:any[]=[{

  "ProductoID":1,
  "Modelo":"Sentra",
  "Descripcion":"4 puertas, familiar",
  "Year":"febrero 3 2023",
  "Precio":20000,
  "Marca":"NISSAN",
  "Color":"Morado",
  "ImagenURL":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4aiJVrVRVmW7ELV0QN5NI0nbazyUKQF89g&s"

},
{

  "ProductoID":2,
  "Modelo":"A4",
  "Descripcion":"2 puertas",
  "Year":"febrero 3 2023",
  "Precio":30000,
  "Marca":"Audi",
  "Color":"Blanco",
  "ImagenURL":"https://pluramotors.com.mx/site/wp-content/uploads/2023/09/Audi_A4_2022_Seminuevos_01.webp"

},
{

  "ProductoID":3,
  "Modelo":"Rio",
  "Descripcion":"4 puertas, familiar",
  "Year":"agosto 3 2022",
  "Precio":60000,
  "Marca":"KIA",
  "Color":"Azul",
  "ImagenURL":"https://www.eleconomista.com.mx/__export/1673897477376/sites/eleconomista/img/2023/01/16/kia_rio.jpeg_554688468.jpeg"

}]
}
