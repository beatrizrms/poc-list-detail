(function() {
  'use strict';

  angular
    .module('app.login')
    .config(LoginRouter);

    function LoginRouter($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('login', {
          url: '/login',
          controller: 'LoginController',
          controllerAs: 'Login',
          templateUrl: 'app/login/login.html'
        });

      $urlRouterProvider.otherwise('/login');
    }

})();
