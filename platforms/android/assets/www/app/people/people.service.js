(function() {
    'use strict';
    angular
        .module('app.people')
        .factory('PeopleService', LoginService);

    LoginService.$inject = ['$http', '$q'];
    function LoginService($http, $q) {

        var methods = {
            showPeople : showPeople
        };

        return methods;

        function showPeople() {
          var deferred = $q.defer();

					$http.get('http://swapi.co/api/people/')
	          .success(function(data) {
	            deferred.resolve(data.results);
	          }).error(function(data) {
	            deferred.reject(data.results);
	          });

          return deferred.promise;
        };
    }
})();
