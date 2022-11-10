import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GestionPedidosComponent } from './components/gestion-pedidos/gestion-pedidos.component';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { IngresoAppComponent } from './components/ingreso-app/ingreso-app.component';
import { PedidoVendedoresService } from './services/pedidos-vendedores.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    GestionPedidosComponent,
    MenuPrincipalComponent,
    IngresoAppComponent,
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PedidoVendedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
