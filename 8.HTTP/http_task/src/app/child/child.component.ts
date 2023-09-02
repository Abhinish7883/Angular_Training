import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface productDetail {
  name?: string;
  weight?: number;
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  productDetailContainer: productDetail[] = [];
  name = '';
  weight = '';
  testProduct = false;
  index = -1;
  constructor(private http: HttpClient) {}

  save() {
    // json server
    // get
    this.http.get('http://localhost:3000/posts').subscribe((data) => {
      console.log(data);
    });
    // post
    let body = this.productDetailContainer;
    this.http.post('http://localhost:3000/posts', body).subscribe((data) => {
      console.log(data);
    });

    //jsonplaceholder
    this.http
      .post('https://jsonplaceholder.typicode.com/users', body)
      .subscribe((data) => {
        console.log(data);
      });
  }

  addProduct(name: string, weight: string) {
    let regex_name = /^[a-zA-Z]+$/;
    let regex_weight = /^[1-9]+$/;

    if (!(regex_name.test(name) && regex_weight.test(weight))) {
      this.testProduct = true;
    } else {
      let product: productDetail = {
        name: name,
        weight: +weight,
      };
      if (this.index >= 0) {
        this.productDetailContainer.splice(this.index, 1, product);
        this.index = -1;
        this.editToDb(this.productDetailContainer);
      } else {
        this.productDetailContainer.push(product);
      }

      this.testProduct = false;
    }
  }

  removeProduct(productNumber: number) {
    this.productDetailContainer.splice(productNumber, 1);
  }
  editProduct(labelName: string, labelWeight: string, index: number) {
    this.name = labelName;
    this.weight = labelWeight;
    this.index = index;
  }

  editToDb(payload: productDetail[]) {
    this.http.put<any>('https://jsonplaceholder.typicode.com/posts/1', payload)
        .subscribe(data => {console.log(data);
        });
  }
}
