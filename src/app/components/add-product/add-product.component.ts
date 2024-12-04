import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms'
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent  implements OnInit{


  constructor(private fb: FormBuilder,
  private productService : ProductService){}

  productFrom = this.fb.group({
    productName:['',Validators.required],
    description:['',Validators.required],
    category:['',Validators.required],
    phone:['',[Validators.required, Validators.maxLength(12)]],
    status:['',Validators.required],
    unitPrice:['',[Validators.required, Validators.min(20), Validators.pattern(/^-?\d*\.?\d+$/)]],
    quentity:['',[Validators.required, Validators.min(2), Validators.pattern(/^-?\d*\.?\d+$/)]],
  });
  get f(){
    return this.productFrom.controls;
  }
  onSubmit(){
    const values = this.productFrom.value as Product;
    values.createdDate= new Date().toDateString();
    this.productService;
    
  }
  ngOnInit():void{
    // alert("ngOninit Called");
    // console.log("triggered ngOnInit");
  }

  

  // ngDoCheck(){
  //   console.log("triggered ngDoCheck");
  // }

  // ngAfterContentInit(){
  //   console.log("triggered ngAfterContentInit");
  // }

  // ngAfterContentChecked(){
  //   console.log("triggered ngAfterContentChecked");
  // }

  // ngAfterViewChecked(){
  //   console.log("triggered ngAfterViewChecked");
  // }

  // ngOnDestroy(){
  //   alert('ngOnDestroy Called');
  //   console.log("triggered ngOnDestroy");
  // }
}
