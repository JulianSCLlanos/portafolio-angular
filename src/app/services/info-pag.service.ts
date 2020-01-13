import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pag.interfaces';
import { InfoEquipo } from '../interfaces/info-team.interfaces';
//import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPagService {

  info: InfoPagina = {};
  cargada = false;

  equipo: InfoEquipo = {};
    
  constructor( private http: HttpClient) {
    //console.log('Servicio de infoPag listo.');

    this.cargarInfo();

    this.cargarEquipo();

  }

  private cargarInfo() {

    this.http.get('assets/data/data-pag.json')
      .subscribe( (resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;
        console.log(resp);
        
      });

  }

  private cargarEquipo() {

    this.http.get('assets/data/data-team.json')
      .subscribe( (resp: InfoEquipo ) => {

        this.cargada = true;
        this.equipo = resp;
        console.log(resp);

      });

  }
}
