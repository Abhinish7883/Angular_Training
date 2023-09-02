import { Directive, ElementRef,HostListener, Input } from "@angular/core";

@Directive({
    selector: '[CreateAttributeDirective]'
    }
)
export class CreateAttributeDirective{

    // dirct use....
    // constructor(private ele:ElementRef){
    //     this.ele.nativeElement.style.backgroundColor = 'yellow';
    // }

    // Handling user events

    
    constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }




}