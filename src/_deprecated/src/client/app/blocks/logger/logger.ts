import {Injectable} from '@angular/core';

import * as toastr from 'toastr';

@Injectable()
export class LoggerService {

  showToasts: true;

  error(message, data, title) {
    toastr.error(message, title);
    // $log.error('Error: ' + message, data);
  }

  info(message, data, title) {
    toastr.info(message, title);
    // $log.info('Info: ' + message, data);
  }

  success(message, data, title) {
    toastr.success(message, title);
    // $log.info('Success: ' + message, data);
  }

  warning(message, data, title) {
    toastr.warning(message, title);
    // $log.warn('Warning: ' + message, data);
  }

  log(...attrs) {
    console.log(...attrs);
    // $log.log(...attr);
  }

}

