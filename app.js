
var app = angular.module('app', ['myServices']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', { templateUrl: 'tplIndex.html' })
    .when('/other', { templateUrl: 'tplOther.html' })
    .otherwise({ redirectTo: '/' });
});

app.controller('MainCtrl', function($scope,myService) {
  $scope.changeText= function(){

      myService.GetDataFromService(false,$scope.searchText);
      //console.log($scope.searchText);

  }
});

