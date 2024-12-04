import { Component } from '@angular/core';
import { faPencil, faEye } from '@fortawesome/free-solid-svg-icons';
import { Product } from './model/product.model';
import { ProductService } from './service/product.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'todo-app';
  faPencil = faPencil;
  faEye = faEye;

  public secondProductItemName = "Wheat Flour";

  // public getQuantityofFlour() {
  //   return 255;
  // }

  // public coundown() {
  //   var i = 0;
  //   i++;
  //   return i;
  // }

  // in this activity we need to highlight low storage dhal 
  public dhalStorage = 40; //Assume this is the valuwe we get from database 
  public isLowInventory = false;
  isLoading: boolean;




  public getDhalStorage() {
    if (this.dhalStorage < 50) {
      this.isLowInventory = true;
    }
    return this.dhalStorage;
  }
// 1. issellama wenne index eka i walata assign karanawa 
// 2. click karaddi selectProduct function eka call wenaw
// 3. e call unaama function eka athule tiyena variable eka assgn wenawa 
// 4. html layout eken check karanawa rowIndex eka == kiyala samananm ara class eka enable wenaw
public rowIndex : number = -1;

  public selectProduct(selectedRow_index:number){ //i variable(index of row)
    if(selectedRow_index!=this.rowIndex){
      this.rowIndex=selectedRow_index;
        //row index eka override wenawa ape row index ekata (-1 tiyana eka ape index val ekata)
    }
  }

  constructor(private productService :ProductService) {}
    



  ngOnInit() : void{
    this.getProduct();
  }


  public products :Product[] = [];
  showContent: boolean=false;

  public showAddProducts(){
    this.showContent=true;
  }

  public hideAddProducts(){
    this.showContent=false;
  }
  getProduct(){
    this.productService.getProducts().subscribe((res)=>{
      this.products = res.data;
      this.isLoading=false;
    });
  }

  // OpenEditProductView(){
  //   this.showEditProduct = true;
  // }
}


