(function() {
    'use strict';
    angular
        .module('app.login')
        .factory('LoginService', LoginService);

    LoginService.$inject = ['$q'];
    function LoginService($q) {

        var methods = {
            doLogin : doLogin
        };

        return methods;


        function doLogin(username, password) {
          var deferred = $q.defer();

          if(username.toLowerCase() == 'paicon@paicon.com' && password.toLowerCase() == 'password') {
            deferred.resolve(true);
          } else {
            deferred.reject(false);
          }

          return deferred.promise;
        };
    }
})();
