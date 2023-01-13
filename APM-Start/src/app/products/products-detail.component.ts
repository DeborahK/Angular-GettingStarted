import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from './product';
import {Router} from '@angular/router'

@Component({
  // selector: 'pm-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {
  pageTitle :string ='Products details'
  constructor(private route :ActivatedRoute , private router :Router ) { }
  product:IProduct| undefined;

  ngOnInit(): void {
    const id =Number(this.route.snapshot.paramMap.get('id'));
this.pageTitle +=': '+id
  }
  onBack():void{
    this.router.navigate(['/products'])
  }

}
