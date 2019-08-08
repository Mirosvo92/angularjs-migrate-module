import {UIRouterUpgradeModule} from '@uirouter/angular-hybrid';
import {CommonModule} from '@angular/common';
import {AboutComponent} from './about.component';
import {NgModule} from '@angular/core';

export const test = {
  parent: 'parentAbs',
  name: 'about',
  url: '/about',
  path: 'about',
  component: AboutComponent,
};


@NgModule({
  imports: [
    CommonModule,
    UIRouterUpgradeModule.forChild({
      states: [test]
    }),
  ],
  declarations: [
    AboutComponent
  ],
  providers: []
})
export class AboutModule {
}
