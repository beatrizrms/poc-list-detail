(function() {
  'use strict';

  angular
    .module('app.people')
    .controller('PeopleController', PeopleController);

  PeopleController.$inject = ['PeopleService', '$state', '$scope', '$ionicLoading'];

  function PeopleController(PeopleService, $state, $scope, $ionicLoading) {
    var vm = this;

    $ionicLoading.show();

    PeopleService.showPeople()
        .then(
          function(data) {
            $scope.list = data;
            $ionicLoading.hide();
          },
          function(error) {
            $ionicLoading.hide();
          }
        );






  }
})();
