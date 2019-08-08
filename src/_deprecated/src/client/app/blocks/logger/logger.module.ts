import {NgModule} from '@angular/core';
import {LoggerService} from './logger';
import {downgradeInjectable} from '@angular/upgrade/static';

declare const angular: any;

@NgModule({
  providers: [
    LoggerService
  ]
})
export class LoggerModule {

}

// TODO: Remove
angular.module('blocks.logger', [])
  .factory('logger', downgradeInjectable(LoggerService));
