import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pag.interfaces';
//import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPagService {

  info: InfoPagina = {};
  cargada = false;
    
  constructor( private http: HttpClient) {

    //console.log('Servicio de infoPag listo.');

    this.http.get('assets/data/data-pag.json')
      .subscribe( (resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;
        console.log(resp);
        
      });

  }
}
