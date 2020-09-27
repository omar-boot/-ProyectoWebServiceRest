import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from './producto';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  titulo:string = "Lista de Productos";
  tituloProductoItem:string = "Items";
  tituloModal:string = "";

  listaItems: Producto[];
  productoItem:Producto = new Producto();

  idItemProducto:number;

  constructor(private productoService: ProductoService, private router: Router) { }

  ngOnInit(): void {
    this.productoService.getAllItems().subscribe(
        e => this.listaItems = e
    );
  }

  configModalCrear() {
    this.productoItem = new Producto();
    this.tituloModal = "Agregar Item";
  }

  configModalEditar(item: Producto) {
    this.productoItem = item; 
    this.tituloModal = "Modificar Item";
  }

  eliminarItem(idItem: number){
    this.productoService.deleteItem(idItem).subscribe(
      e => this.router.navigate(['/items']).then(() => {
        this.ngOnInit();
      })
    );
  }

  buscarItem(){
      if(this.idItemProducto) {
        this.productoService.getItem(this.idItemProducto).subscribe(e => {
          this.productoItem = e;
          this.router.navigate(['/items']).then(() => {
            this.listaItems = [];
            this.listaItems.push(this.productoItem);
          })
        });
    } else {
      this.router.navigate(['/items']).then(() => {
        this.ngOnInit();
      })
    }
  }
}
