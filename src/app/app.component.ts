import { Component } from '@angular/core';
import { InfoPagService } from './services/info-pag.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( public infoPaginaService: InfoPagService ){

    
  }
}
