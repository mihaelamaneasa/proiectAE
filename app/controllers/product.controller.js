(function() {
    'use strict';

    angular
        .module('app')
        .controller('productController', Controller);

    Controller.$inject = ['$scope', '$rootScope', 'productService', '$state', '$stateParams'];

    function Controller($scope, $rootScope, productService, $state, $stateParams) {
        $scope.products = [];

        if ($state.current.name == "products") {
            $rootScope.Title = "Products Listing";
            productService.getProducts().then(function(res) {
                $scope.products = res.data;
            }).catch(function(err) {
                console.log(err);
            });
        }
    }
})();