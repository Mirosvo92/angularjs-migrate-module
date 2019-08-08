import {Component, ElementRef, Input} from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-ht-widget-header',
  templateUrl: './widget-header.html',
  styleUrls: []
})
export class HtWidgetHeaderComponent {

  @Input() title;
  @Input() subtitle;
  @Input() rightText;
  @Input() allowCollapse;

  constructor(private elementRef: ElementRef) {
    console.log('runnning');

  }

  toggleContent() {
    if (this.allowCollapse === 'true') {
      const content = $(this.elementRef.nativeElement).siblings('.widget-content');
      content.toggle();
    }
  }

}
