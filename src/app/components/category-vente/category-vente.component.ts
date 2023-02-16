import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-vente',
  templateUrl: './category-vente.component.html',
  styleUrls: ['./category-vente.component.css']
})
export class CategoryVenteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  nav(category){
    localStorage.setItem("category",category)
    this.router.navigate(['Signup']);
  }

}
