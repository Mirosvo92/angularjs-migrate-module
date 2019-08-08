import {downgradeInjectable} from '@angular/upgrade/static';
import {LoggerService} from './_deprecated/src/client/app/blocks/logger/logger';

require('@uirouter/angular-hybrid');

declare const require: any;
declare const angular: any;

require('src/_deprecated/src/client/app/app.module.js');
require('src/_deprecated/src/client/app/admin/admin.module.js');
require('src/_deprecated/src/client/app/blocks/exception/exception.module.js');
require('src/_deprecated/src/client/app/blocks/router/router.module.js');
require('src/_deprecated/src/client/app/core/core.module.js');
require('src/_deprecated/src/client/app/dashboard/dashboard.module.js');
require('src/_deprecated/src/client/app/layout/layout.module.js');
require('src/_deprecated/src/client/app/widgets/widgets.module');
require('src/_deprecated/src/client/app/admin/admin.controller.js');
require('src/_deprecated/src/client/app/admin/admin.route.js');
require('src/_deprecated/src/client/app/blocks/exception/exception-handler.provider.js');
require('src/_deprecated/src/client/app/blocks/exception/exception.js');
require('src/_deprecated/src/client/app/blocks/router/router-helper.provider.js');
require('src/_deprecated/src/client/app/core/config.js');
require('src/_deprecated/src/client/app/core/constants.js');
require('src/_deprecated/src/client/app/core/core.route.js');
require('src/_deprecated/src/client/app/core/dataservice.js');
require('src/_deprecated/src/client/app/dashboard/dashboard.controller.js');
require('src/_deprecated/src/client/app/dashboard/dashboard.route.js');
require('src/_deprecated/src/client/app/layout/ht-sidebar.directive.js');
require('src/_deprecated/src/client/app/layout/ht-top-nav.directive.js');
require('src/_deprecated/src/client/app/layout/shell.controller.js');
require('src/_deprecated/src/client/app/layout/sidebar.controller.js');
require('src/_deprecated/src/client/app/widgets/ht-img-person.directive.js');
