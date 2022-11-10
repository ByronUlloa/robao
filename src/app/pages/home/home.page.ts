import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { Category } from '../../interfaces/comidas';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  categorias:Category[]=[];
  nombre:String='';


  constructor(private storage:Storage,private router:Router, private srvfood:FoodService) {}

  cerrarSesion(){
    this.cerrar();
    this.router.navigate(['/login']);

  }

  ngOnInit(){
      this.vernombre();

      this.srvfood.getCategorias().subscribe(datos=>
        {
           this.categorias.push(...datos.categories);
           console.log(this.categorias);
        })
      
  }



  async cerrar()
  {
    await this.storage.set('sesion',null);


  }

  async vernombre()
  {
    this.nombre=await this.storage.get('sesion');
  }
}
