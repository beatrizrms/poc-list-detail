(function() {
    'use strict';
    angular
        .module('app.peopledetail')
        .factory('PeopleDetailService', PeopleDetailService);

    PeopleDetailService.$inject = ['$http', '$q'];
    function PeopleDetailService($http, $q) {

        var methods = {
            detailPeople : detailPeople
        };

        return methods;

        function detailPeople(index) {
          var deferred = $q.defer();

					$http.get('http://swapi.co/api/people/'+index)
	          .success(function(data) {
	            deferred.resolve(data);
	          }).error(function(data) {
	            deferred.reject(data);
	          });

          return deferred.promise;
        };
    }
})();
