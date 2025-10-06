import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
})
export class ChangeColorDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'white';

  constructor() {}

  @HostListener('mouseenter') onHover() {
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') onLeave() {
    this.backgroundColor = 'white';
  }
}
