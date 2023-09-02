import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'searchOperation';

  @ViewChild('searchBox') searchBox!:ElementRef;

  ngAfterViewInit():void{

    let formEvent = fromEvent<any>(this.searchBox.nativeElement,'keyup');
    console.log(this.searchBox.nativeElement)

    formEvent.pipe(
      map(event=> event.target.value),
      debounceTime(1500)
      )
    .subscribe(value=>{
      console.log( 'API CALL WITH : '+value);
    })
  }
}
