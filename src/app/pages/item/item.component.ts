import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripción.interfaces';
import { Producto } from '../../interfaces/productos.interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;

  constructor( private route: ActivatedRoute,
               public producService: ProductosService ) { }

  ngOnInit() {

    this.route.params
    .subscribe( (parametros: ProductoDescripcion) => {

      //console.log(parametros['id']);
      this.producService.getProducto(parametros['id'])
        .subscribe( producto => {
          this.producto = producto;
          console.log(producto);
        });
    });

  }
}
