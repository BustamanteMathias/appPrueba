import { Component, OnInit } from '@angular/core';
import { Usuario } from "../usuario";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:string;
  public pass:string;
  public estadoError:string = '';

  private usuario:Usuario;

  constructor(private router:Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  Ingresar(){
    let adminUser:string = 'admin@admin';
    let adminPass:string = 'admin';
    this.usuario.nombre = this.user;
    this.usuario.clave = this.pass;

    if(adminUser === this.usuario.nombre && adminPass === this.usuario.clave){
      this.estadoError = '';
      this.usuario.nombre = '';
      this.usuario.clave = '';

      this.router.navigate(['clase00']);
    }else{
      this.estadoError = "CLAVE O USUARIO INCORRECTO";
    }
  }

}
