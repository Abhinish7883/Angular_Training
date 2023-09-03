import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AComponent } from './Component/a/a.component';
import { BComponent } from './Component/b/b.component';
import { CComponent } from './Component/c/c.component';
import { DComponent } from './Component/d/d.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'simpleTest';
  count:number=0;

  @ViewChild('dynamicComponent',{read:ViewContainerRef,static:true}) tempRef!:ViewContainerRef;
  ngOnInit():void{

  }
  ngAfterViewInit(): void {


    this.tempRef
    
  }

  createComponent(){
    if(this.count<=2){
      this.count++;
      this.tempRef.createComponent(AComponent);
    }
    else if(this.count<=5){
      this.count++;
      this.tempRef.createComponent(BComponent);
    }
    else{
      this.count++;
      this.tempRef.createComponent(CComponent);
      this.tempRef.createComponent(DComponent);
    }
  }

  deleteComponent(){
    this.tempRef.detach();
  }
}
