import { Directive, Renderer2, OnInit, ElementRef, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultBorder: string = '1px solid #cccccc';
  @Input() hoverBorder: string = '2px solid #333333';
  @HostBinding('style.border') border:string = this.defaultBorder;

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }


  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.elRef.nativeElement, 'padding', '20px');
  }

  @HostListener('mouseenter') NgModuleResolver(eventData:Event) {
    this.renderer.addClass(this.elRef.nativeElement, 'custom-hover');
    this.border = this.hoverBorder;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event) {
    this.renderer.removeClass(this.elRef.nativeElement, 'custom-hover');
    this.border = this.defaultBorder;
  }

}
