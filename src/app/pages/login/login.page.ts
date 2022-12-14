import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario={
    username:'',
    password:''
  };

  constructor(private storage:Storage, private router:Router) { }

  ngOnInit() {
  }

  onSubmit()
  {
    console.log("Login");
    this.validarusuario();
  }

  async validarusuario()
  {
    let usr= await this.storage.get(this.usuario.username);
    if(usr!=null)
    {
      console.log(usr);
      this.storage.set('sesion',this.usuario.username);
      this.router.navigate(['/home']);
    }
    else{
      console.log("Usuario na que vers!!!");
    }
  }

}
