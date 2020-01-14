import { Component } from '@angular/core';
import { InfoPagService } from './services/info-pag.service'; 
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public infoPaginaService: InfoPagService, public productosService: ProductosService ){
    
  }
}
