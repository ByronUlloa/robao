import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario:Usuario={
    username:'',
    password:''
  };

  constructor(private storage:Storage,private router:Router) { }


  ngOnInit() {
  }

  onSubmit()
  {
    console.log(this.usuario);
    this.guardar();
    
  }


  async guardar()
  {
    let existe=await this.storage.get(this.usuario.username);

    if(existe==null)
    {
      await this.storage.set(this.usuario.username,this.usuario);
      console.log("Usuario creado");
      this.router.navigate(['/login']);
    }
    else{
      console.log("Usuario ya existe")
    }
  }

}
