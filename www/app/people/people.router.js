(function() {
  'use strict';

  angular
    .module('app.people')
    .config(PeopleRouter);

    function PeopleRouter($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('people', {
          url: '/people',
          controller: 'PeopleController',
          controllerAs: 'People',
          templateUrl: 'app/people/people.html'
        });
    }

})();
