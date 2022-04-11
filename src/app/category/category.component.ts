import { CategoryService } from './category.service';
import { Component, OnInit } from '@angular/core';
import { ICategory } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers : [CategoryService]
})
export class CategoryComponent implements OnInit {

  categories: any = [] ;
  // = [
  //   {
  //     id:1,
  //     name:"cat1",
  //     image:"https://images.pexels.com/photos/1124960/pexels-photo-1124960.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  //   },
  //   {
  //     id:1,
  //     name:"cat1",
  //     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNP9igTKHQEtMfNO4mBZRNF8d8CFs42-HJ7Q&usqp=CAU"
  //   }
  // ];
  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next : data=>{
        console.log(data);
        this.categories = data.data.categories;
      }
    });
  }

  onAddCategory(nameInput: HTMLInputElement) {
    // this.categories.push({ id: this.categories.length + 1, name: nameInput.value , image:"wwwww"})
  }


}
