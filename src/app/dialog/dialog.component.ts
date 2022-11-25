import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createInjectableType } from '@angular/compiler';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit{

  ListaEstadoProducto = ["Nuevo", "Usado", "Renovado"]; /*Valores radiobutton estado producto*/
  ListaCategoriaProducto = ["Abarrotes", "Textil", "Electronica"]; /*Valores radiobutton categoría producto*/
  formularioProducto !: FormGroup; /*Formulario agregar nuevo producto*/
  btnAccion : string = "Guardar";

  constructor(private formBuilder : FormBuilder, 
    private api : ApiService, 
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogComponent>) {}

  /*Datos del formulario nuevo producto*/
  ngOnInit(): void {
    this.formularioProducto = this.formBuilder.group({
      nombreProducto : ['',Validators.required],
      categoriaProducto : ['',Validators.required],
      estadoProducto : ['',Validators.required],
      precioProducto : ['',Validators.required],
      descripccionProducto : ['',Validators.required],
      fechaProducto: ['',Validators.required]
    });

    /*Mostrar datos a editar del producto*/
    if(this.editData){
      this.btnAccion = "Actualizar";
      this.formularioProducto.controls['nombreProducto'].setValue(this.editData.nombreProducto);
      this.formularioProducto.controls['categoriaProducto'].setValue(this.editData.categoriaProducto);
      this.formularioProducto.controls['fechaProducto'].setValue(this.editData.fechaProducto);
      this.formularioProducto.controls['estadoProducto'].setValue(this.editData.estadoProducto);
      this.formularioProducto.controls['precioProducto'].setValue(this.editData.precioProducto);
      this.formularioProducto.controls['descripccionProducto'].setValue(this.editData.descripccionProducto);
    }

  }

  /*Guardar datos del formulario agregar nuevo producto*/
  agregarProducto(){
    if(!this.editData){
        if(this.formularioProducto.valid){
          this.api.postProducto(this.formularioProducto.value)
          .subscribe({
            next:(res)=>{
              alert("Producto agregado correctamente.");
              this.formularioProducto.reset(); /*Restablecer los valoreas del formulario */
              this.dialogRef.close('save'); /*Cerrar el formulario */
            },
            error:()=>{
              alert("¡Ah ocurrido un error! No se a agregado el producto ocrrectamente.")
            }
          })
            
          }
      }else{
        this.updateProducto();
      }
    }

    /*Editar datos del producto*/
    updateProducto(){
      this.api.putProducto(this.formularioProducto.value,this.editData.id)
      .subscribe({
        next:(res)=>{
          alert("El producto ha sido actualizado correctaente.");
          this.dialogRef.close('update');
        },
        error:()=>{
          alert("¡Error! Lo sentimos, el producto no se actualizó correctamente.")
        }
      })
    }

  }


