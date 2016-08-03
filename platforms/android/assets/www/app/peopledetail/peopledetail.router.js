(function() {
  'use strict';

  angular
    .module('app.peopledetail')
    .config(PeopleDetailRouter);

    function PeopleDetailRouter($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('peopledetail', {
          url: '/peopledetail/:id',
          controller: 'PeopleDetailController',
          controllerAs: 'PeopleDetail',
          templateUrl: 'app/peopledetail/peopledetail.html'
        });
    }

})();
