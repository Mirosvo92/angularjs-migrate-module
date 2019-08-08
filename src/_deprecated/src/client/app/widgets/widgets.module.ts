import {NgModule} from '@angular/core';
import {downgradeComponent} from '@angular/upgrade/static';
import {HtWidgetHeaderComponent} from './ht-widget-header.directive';

declare const angular: any;

@NgModule({
  declarations: [HtWidgetHeaderComponent],
  entryComponents: [
    HtWidgetHeaderComponent
  ]
})
export class WidgetsModule {

}

angular.module('app.widgets', [])
  .directive('appHtWidgetHeader', downgradeComponent({component: HtWidgetHeaderComponent}));

