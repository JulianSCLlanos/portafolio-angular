import { Component, OnInit } from '@angular/core';
import { InfoPagService } from '../../services/info-pag.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public infoPaginaService: InfoPagService,
               private router: Router ) { }

  ngOnInit() {
  }

  buscarProducto( termino: string ) {

    if( termino.length <= 0 ){
      return;
    }

    this.router.navigate(['/search/', termino]);
    //console.log(termino);

  }

}
