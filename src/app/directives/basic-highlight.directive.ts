import { Directive, OnInit, ElementRef } from "@angular/core";
import { NgModuleResolver } from '@angular/compiler';

@Directive({
  selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef) { } 

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}