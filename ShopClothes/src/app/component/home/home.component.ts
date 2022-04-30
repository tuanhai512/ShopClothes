import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/service/category.service';
import { Categories } from '../../model/category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public empList: Categories[] = [];
  constructor(private cateService: CategoriesService) {}

  ngOnInit(): void {
    this.getAllCategory();
  }

  getAllCategory() {
    this.cateService.getAllCategory().subscribe(
      (res) => {
        this.empList = res;
        console.log(res);
      },
      (err) => {
        console.log('error while fetching data');
      }
    );
  }
}
