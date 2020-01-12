(function() {
    'use strict';

    angular
        .module('app')
        .factory('productService', Service);

    Service.$inject = ['$http', 'globalConfig'];

    function Service($http, globalConfig) {
        let url = "";
        return {
            getProducts: function() {
                url = globalConfig.apiAddress + "/product";
                return $http.get(url);
            }
        };
    }
})();