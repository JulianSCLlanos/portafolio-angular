import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/productos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productosFiltro: Producto[] = [];

  constructor( private http: HttpClient ) {

    this.cargarProductos();

  }

  private cargarProductos() {

    return new Promise( (resolve, reject) => {
      
      this.http.get('https://angular-html-40e4e.firebaseio.com/productos_idx.json')
        .subscribe( (resp: Producto[]) => {
          //console.log(resp);
          this.productos = resp;
          this.cargando = false;
          resolve();
        });
      
    });

  }  

  getProducto(id: String){
    
    return this.http.get(`https://angular-html-40e4e.firebaseio.com/productos/${ id }.json`);
    
  }

  buscarProducto( termino: string ) {

    if( this.productos.length === 0 ){
      //cargar productos 
      this.cargarProductos().then( () => {
        //depués del cargardo
        //aplicar filtro
        this.filtrarProductos( termino );
      });

    }else{
      //aplicar filtro
    }

  }

  private filtrarProductos( termino: string ){
    /* this.productosFiltro = this.productos.filter( producto => {
      return true;
    });
    console.log(this.productosFiltro);*/

    console.log(this.productos);
  }
  

}
