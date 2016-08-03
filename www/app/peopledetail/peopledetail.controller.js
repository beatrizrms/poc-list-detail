(function() {
  'use strict';

  angular
    .module('app.peopledetail')
    .controller('PeopleDetailController', PeopleDetailController);

  PeopleDetailController.$inject = ['PeopleDetailService', '$state', '$scope', '$stateParams', '$ionicLoading'];

  function PeopleDetailController(PeopleDetailService, $state, $scope, $stateParams, $ionicLoading) {
    var vm = this;

    $ionicLoading.show();

    PeopleDetailService.detailPeople($stateParams.id)
        .then(
          function(data) {
            $scope.people = data;
              $ionicLoading.hide();
          },
          function(error) {
              $ionicLoading.hide();
          }
        );
  }
})();
