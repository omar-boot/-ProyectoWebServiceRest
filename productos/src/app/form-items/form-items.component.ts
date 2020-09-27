import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../items/producto';
import { ProductoService } from '../items/producto.service';

@Component({
  selector: 'app-form-items',
  templateUrl: './form-items.component.html',
  styleUrls: ['./form-items.component.css']
})
export class FormItemsComponent implements OnInit {

  @Input() productoItemHijo :Producto = new Producto();
  
  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
  }

  crearActualizarItem() {
    if(this.productoItemHijo != null && this.productoItemHijo.idItem != null) {
      this.productoService.updateItem(this.productoItemHijo).subscribe(
        e => this.router.navigate(['/items']).then(() => {
          window.location.reload();
        })
      );
    } else {
      this.productoItemHijo.idItem = null;
      this.productoService.createItem(this.productoItemHijo).subscribe(
        e => this.router.navigate(['/items']).then(() => {
          window.location.reload();
        })
      );
    }
  }
}
