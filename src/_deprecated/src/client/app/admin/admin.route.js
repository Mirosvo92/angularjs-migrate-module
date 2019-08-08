(function() {
  'use strict';

  angular
    .module('app.admin')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
    routerHelper.getTest('parentAbs', {
      abstract: true,
      url: '/parent-abs',
      template: '<ui-view/>',
      settings: {isAbstract: true}
    });
  }

  function getStates() {
    return [
      {
        state: 'parentAbs.about',
        config: {
          url: '/about'
        }
      },
      {
        state: 'parentAbs.admin',
        config: {
          url: '/admin',
          templateUrl: '_deprecated/src/client/app/admin/admin.html',
          controller: 'AdminController',
          controllerAs: 'vm',
          title: 'Admin',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> Admin'
          }
        }
      }
    ];
  }
})();
