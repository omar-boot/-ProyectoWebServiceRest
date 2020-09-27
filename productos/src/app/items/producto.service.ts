import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from './producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private wsUrl:string = "http://localhost:8080/api/producto";

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getAllItems():Observable<Producto[]> {
    return this.http.get<Producto[]>(this.wsUrl + "/all");
  }

  getItem(idItem: number):Observable<Producto> {
    return this.http.get<Producto>(this.wsUrl + "/find/" + idItem);
  }

  //Class Producto idItem = null
  createItem(item: Producto):Observable<Producto> {
    return this.http.post<Producto>(this.wsUrl + "/save", item);
  }

 //Class Producto idItem = Algun valor
  updateItem(item: Producto):Observable<Producto> {
    return this.http.post<Producto>(this.wsUrl + "/save", item);
  }

  deleteItem(idItem: number):Observable<Producto> {
    return this.http.get<Producto>(this.wsUrl + "/delete/" + idItem);
  }
}
