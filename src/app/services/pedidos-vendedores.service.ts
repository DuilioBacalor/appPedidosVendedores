import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AnyARecord } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class PedidoVendedoresService {
    resultadoPeticion: any;
    operacion: string = "GET";
    tipo: string = "todos";
  
    idPedido: string = "12";
    cliente: string = "22";
    vendedor: string = "32";
    estado: string = "2";
    observa: string = "2";
    primerPost: string = "2";
    idRenglon: string = "6";
    cantidad: string = "99";
    articulo: string = "99";


    
  
    // private apiUrl:string='https://restcountries.com/v2';
    private apiUrl:string='https://alexandrasoft.com.ar/AppPedidosDeVendedores/descargarNuevosPedidos.php?';
  
      constructor(private http: HttpClient) {
  
        
       }
       

    //    getProductos(): Observable<any>{
    //     return this.http.get(this.url+'productos');
    // }

     get(){
    return this.http.get(`/GestionDePedidos.php?operacion=${this.operacion}&tipo=${this.tipo}&idPedido=${this.idPedido}&cliente=${this.cliente}&vendedor=${this.vendedor}&estado=${this.estado}&observa=${this.observa}&idRenglon=${this.idRenglon}&cantidad=${this.cantidad}&articulo=${this.articulo}`)
                                         
              ;}
       
  
          // get(){
          //     return this.http.get(`/GestionDePedidos.php?operacion=${this.operacion}&tipo=${this.tipo}&idPedido=${this.idPedido}&cliente=${this.cliente}&vendedor=${this.vendedor}&estado=${this.estado}&observa=${this.observa}&idRenglon=${this.idRenglon}&cantidad=${this.cantidad}&articulo=${this.articulo}`)
          //     .subscribe(data  => {this.resultadoPeticion =data;
              
          //     });}
    


  
  
  
    ////ngOnInit() { this.get(); }
  
    //    buscarCapital(termino:string):Observable<country[]>{
    //     const url= `${this.apiUrl}/capital/${termino}`;
    //     return this.http.get<country[]>(url);
    //       }
    //       getPaisPorAlpha(id:string):Observable<country>{
    //         const url= `${this.apiUrl}/alpha/${id}`;
    //         return this.http.get<country>(url);
    //           }
    // }
  
  
    // get4(): void {
    //   //  const vari:any=document.getElementById('cbox1')!;
    //   // if(vari!.checked){
    //   //   console.log("tipoipiioeurwquropieuioqruweruqwpo")
    //   // }
    //   this.http.get(`/GestionDePedidos.php?operacion=${this.operacion}&tipo=${this.tipo}&idPedido=${this.idPedido}&cliente=${this.cliente}&vendedor=${this.vendedor}&estado=${this.estado}&observa=${this.observa}&idRenglon=${this.idRenglon}&cantidad=${this.cantidad}&articulo=${this.articulo}`)
    //     .subscribe((data) => {this.resultadoPeticion = data; console.log(data)
    //     });
    //   }
  
  
      //    http://localhost/AppPedidosDeVendedores/GestionDePedidos.php?operacion=
      //  UPDATERE&tipo=22&idPedido=12&cliente=22&vendedor=32&estado=2&observa=primerPost&
      //  idRenglon=6 &cantidad=99&articulo=99  
  
  
      // get() {         
      //   this.http.get(`/GestionDePedidos.php?operacion=${this.operacion}&tipo=${this.tipo}`)
      //   .subscribe( (data: any) => {this.resultadoPeticion = data; console.log(data)
      //      } );
  
  
      // https://alexandrasoft.com.ar/AppPedidosDeVendedores/GestionDePedidos.php?
  
      //  get() {
      // this.http.get('/descargarNuevosPedidos.php?')
      // .subscribe( (data: any) => {this.resultadoPeticion = data; console.log(data)
      //    } );
  
      // .subscribe((resp)=>{
      // console.log(resp);} )
      //S;
  
      // Ç
  
  
    
    // get1() {
    //   this.http.get('https://jsonplaceholder.typicode.com/posts?')
    //     .subscribe(data => { this.resultadoPeticion = data; });
    // }
  
  
  }