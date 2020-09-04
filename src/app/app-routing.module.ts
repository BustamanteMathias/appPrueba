import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from "./bienvenido/bienvenido.component";
import { ErrorComponent } from "./error/error.component";
import { LoginComponent } from "./login/login.component";
import { Clase01Component } from "./clase01/clase01.component";
import { AppComponent } from "./app.component";
import { Clase00Component } from "./clase00/clase00.component";

const routes: Routes = [
  {path:'', component:BienvenidoComponent},
  {path:'login', component:LoginComponent},
  {path:'clase01', component:Clase01Component},
  {path:'inicio', component:AppComponent},
  {path:'clase00', component:Clase00Component},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
