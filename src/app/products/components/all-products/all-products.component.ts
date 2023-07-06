import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ProductsService } from '../../services/products.service';




@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})


export class AllProductsComponent implements OnInit {


 
  products: any[] = []
  categories:any[]=[]
  loading:boolean=false
  constructor(private service: ProductsService) {

  }
  ngOnInit(): void {
   
   this.getproducts()
   this.getCategories()

  }

  getproducts() {
    this.loading=true
    this.service.getAllProducts().subscribe((res: any) => {
      this.products=res
      this.loading=false
      console.log(res)
   

    },error=>{
      this.loading=false
      alert(error)
    })
  }
  getCategories(){
    this.loading=true
    this.service.getAllCategories().subscribe((res: any) => {
      this.categories=res
       console.log(res)
       this.loading=false

    },error=>{
      this.loading=false

      alert(error)
    })
  }
  filterCategory(event:any){
let value=event.target.value
 console.log(value)

 this.getproudactscat(value)

  }
  getproudactscat(keyword:string){
    this.loading=true
    this.service.getproductsbycategory(keyword).subscribe((res:any)=>{
    this.loading=false
      this.products=res

      
    })
    
          }

}
