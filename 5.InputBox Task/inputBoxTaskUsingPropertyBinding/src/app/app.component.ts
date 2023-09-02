import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
[x: string]: any;
  title = 'inputBoxTaskUsingPropertyBinding';

  numberArray = [1,2,3,4];


  objectArray = [
    {id:'123'},
    {id:'123'},
    {id:1},
    {id:3},
    {id:5}
  ]
  objectArraylength = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(this.objectArray.length)

    }, 2000);
  })
   
  storeApiResponce:any;
  ngOnInit(): void {

    
    this.storeApiResponce = fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
  }
  }


