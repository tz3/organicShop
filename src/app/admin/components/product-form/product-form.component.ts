import { ProductService } from '../../../shared/service/product.service';
import { CategoryService } from '../../../shared/service/category.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};
  id;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {

    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.get(this.id).valueChanges().pipe(take(1))
      .subscribe(p => this.product = p);
    }
   }

   save(product) {
     if (this.id) {
     this.productService.update(this.id, product);
     } else {
    this.productService.create(product);
    this.router.navigate(['admin/products']); }
   }
   delete() {
    if (!confirm('Are you sure you want to delte this product ?')) { return; }

    this.productService.delete(this.id);
    this.router.navigate(['admin/products']);
   }

  ngOnInit() {
  }

}
