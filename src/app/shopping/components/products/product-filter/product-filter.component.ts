import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from 'src/app/shared/service/category.service';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  @Input('category') category;
  categories$;

  constructor( private categoryservice: CategoryService ) {
    this.categories$ = this.categoryservice.getAll();

  }

  ngOnInit() {
  }

}
