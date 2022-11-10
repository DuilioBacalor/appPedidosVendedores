import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PedidoVendedoresService } from 'src/app/services/pedidos-vendedores.service';


@Component({
  selector: 'app-gestion-pedidos',
  templateUrl: './gestion-pedidos.component.html',
  styleUrls: ['./gestion-pedidos.component.css']
})
export class GestionPedidosComponent  {
  
  resultadoPeticiones:any;
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

  convertida:any;
  constructor( private servicio:PedidoVendedoresService,private http: HttpClient ) { }

  get(){ this.servicio.get().subscribe((data)  => {this.resultadoPeticiones = data; 
  console.log(this.resultadoPeticiones)})};
  
  // get(){
  //   return this.http.get(`/GestionDePedidos.php?operacion=${this.operacion}&tipo=${this.tipo}&idPedido=${this.idPedido}&cliente=${this.cliente}&vendedor=${this.vendedor}&estado=${this.estado}&observa=${this.observa}&idRenglon=${this.idRenglon}&cantidad=${this.cantidad}&articulo=${this.articulo}`)
  //   .subscribe((data)  => {this.resultadoPeticiones = data; 
  //   });}




  // get() {
  //   const vari:any=document.getElementById('cbox1')!;
  //  if(vari!.checked){
  //    console.log("tipoipiioeurwquropieuioqruweruqwpo")
  //  }
  //  this.http.get(`/GestionDePedidos.php?operacion=${this.operacion}&tipo=${this.tipo}&idPedido=${this.idPedido}&cliente=${this.cliente}&vendedor=${this.vendedor}&estado=${this.estado}&observa=${this.observa}&idRenglon=${this.idRenglon}&cantidad=${this.cantidad}&articulo=${this.articulo}`)
  //    .subscribe((data: any) => {this.resultadoPeticion = data; console.log(data)
  //    });



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


 }
//  get1() {
//    this.http.get('https://jsonplaceholder.typicode.com/posts?')
//      .subscribe(data => { this.resultadoPeticion = data; });
//  }










