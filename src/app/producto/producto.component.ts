import { Component} from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']


})
export class ProductoComponent {


  buscarEnGoogle(id: string) {

      window.open(`https://www.google.com/search?q=${id}`);

  }

}


