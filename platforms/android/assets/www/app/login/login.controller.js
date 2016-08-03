(function() {
  'use strict';

  angular
    .module('app.login')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$scope','LoginService', '$state', '$ionicLoading'];

  function LoginController($scope, LoginService, $state, $ionicLoading) {
    var vm = this;
    vm.title = 'Login';

    $scope.validateLogin = function(username,password) {
      $ionicLoading.show();
      $scope.error = '';
      LoginService.doLogin(username, password)
            .then(
              function(data) {
                $state.go('people');
                $ionicLoading.hide();
              },
              function(error) {
                $scope.error = "Usuário e/ou	senha	incorretos";
                $ionicLoading.hide();
              }
            );
    }
  }
})();
