import { Component, OnInit, ViewChild } from '@angular/core';
/*Importaciones*/
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog'; /*Ventana emergente*/
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ProyectoArea';

  displayedColumns: string[] = ['nombreProducto', 'categoriaProducto', 'fechaProducto', 'estadoProducto', 'precioProducto', 'descripccionProducto', 'accion'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /* Constructor que utiliza el cuadro de diálogo agregar producto */
  constructor(private dialog : MatDialog, private api : ApiService){

  }
  ngOnInit(): void {
    this.getTodosProductos();
  }
  /*Cuadro de dialogo agregar producto*/
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
        this.getTodosProductos();
      }
    })
  }

  /*Tabla que muestra los productos*/
  getTodosProductos(){
    this.api.getProducto()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(err)=>{
        alert("¡Ah ocurrido un Error! No se pueden obtener los registros.")
      }
    })
  }

  /*Editar producto*/
  editProducto(row : any){
    this.dialog.open(DialogComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getTodosProductos();
      }
    })
  }

  /*Eliminar producto*/
  deleteProducto(id : number){
    this.api.deleteProducto(id)
    .subscribe({
      next:(res)=>{
        alert("El producto se ha eliminado correctamente.")
        this.getTodosProductos();
      },
      error:()=>{
        alert("¡Ah ocurrido un Error! No se pueden eliminar el producto.")
      }
    })
  }
  /* Filtrar información*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
