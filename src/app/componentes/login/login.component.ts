import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
import { ErrorComponent } from '../error/error.component';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BienvenidoComponent, ErrorComponent, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  

  usuario: Usuario = new Usuario("","");
  bandera : boolean = false;
  banderaDos : boolean = false;
  mensajeRecibido : string = "";

  constructor(private router: Router) {

  }

  goTo(path: string) {
    this.router.navigate([path]);
  }

  login()
  {
    if(this.usuario?.username == "a" && this.usuario?.password == "a")
    {
      this.mensajeRecibido = "entre al if";
      this.bandera = true;
      this.banderaDos = true;
      this.goTo("bienvenido");
    }
    else
    {
      this.mensajeRecibido = "entre al else";
      this.bandera = false;
      this.banderaDos = true;
      this.goTo("error");
    }
  }

  
}
