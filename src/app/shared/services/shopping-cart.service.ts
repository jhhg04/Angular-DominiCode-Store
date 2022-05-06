import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from 'src/app/pages/products/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  products:Product[] = []

  private cartSubject = new Subject<Product[]>()
  private totalSubject = new Subject<number>()
  private qualitySubject = new Subject<number>()
}
