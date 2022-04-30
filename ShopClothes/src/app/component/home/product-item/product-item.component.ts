import { Component, Input, OnInit } from '@angular/core';
import { Categories } from 'src/app/model/category';
import { CategoriesService } from 'src/app/service/category.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() empObj: Categories = new Categories();
  @Input() index: any;
  constructor( private empService: CategoriesService) { }

  ngOnInit(): void {
  }

}
