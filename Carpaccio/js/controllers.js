'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {
    $scope.price = 0;
    $scope.items = 0;


    $scope.states = [
      {code: 'UT', taxRate:0.0685},
      {code: 'NV', taxRate:0.08},
      {code: 'TX', taxRate:0.0625},
      {code: 'AL', taxRate:0.04},
      {code: 'CA', taxRate:0.0825}
    ];

    $scope.discounts = [
      {orderValue:50000, discount:0.15},
      {orderValue:10000, discount:0.10},
      {orderValue:7000, discount:0.07},
      {orderValue:5000, discount:0.05},
      {orderValue:1000, discount:0.03}
    ];

    $scope.state = $scope.states[0];

    $scope.total = function() {
      var totalPrice = $scope.price * $scope.items;

      //calculate discount
      for ( var i=0; i < $scope.discounts.length; i++ ) {
        if ( totalPrice >= $scope.discounts[i].orderValue ) {
          totalPrice -= totalPrice * $scope.discounts[i].discount;
          break;
        }
      }

      //calculate tax
      totalPrice += totalPrice * $scope.state.taxRate;

      return totalPrice
    }
  }]);