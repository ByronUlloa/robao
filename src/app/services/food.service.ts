import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Categories } from '../interfaces/comidas';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpclient:HttpClient) { }

  getCategorias()
  {
    return this.httpclient.get<Categories>('https://www.themealdb.com/api/json/v1/1/categories.php');
  }
}
