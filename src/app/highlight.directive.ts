import {Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  private onHovered = 0;
  @Input('appHighlight') highlightColor: [];

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor, this.onHovered);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.highlightColor, 0);
  }

  private highlight(colorRange: [], hovered: number | string): void {
    this.onHovered = colorRange ? hovered < colorRange.length - 1 ? this.onHovered += 1 : 0 : 0;
    this.el.nativeElement.style.color = colorRange ? colorRange[this.onHovered] : 'white';
    this.el.nativeElement.style.cursor = 'pointer';
  }

  constructor(private el: ElementRef) {}

}
