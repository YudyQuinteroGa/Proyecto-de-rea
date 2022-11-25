import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  /*Guardar los datos del producto*/
  postProducto(data : any){
    return this.http.post<any>("http://localhost:3000/ListaProductos/", data);
  }

  /*Obtener los datos del producto*/
  getProducto(){
    return this.http.get<any>("http://localhost:3000/ListaProductos/");
  }

  /*Editar datos del producto*/
  putProducto(data : any, id : number){
    return this.http.put<any>("http://localhost:3000/ListaProductos/"+id, data);
  }

  /*Eliminar un producto*/
  deleteProducto(id : number){
    return this.http.delete<any>("http://localhost:3000/ListaProductos/"+id);
  }

}
