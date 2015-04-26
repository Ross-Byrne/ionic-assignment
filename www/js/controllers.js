angular.module('Calorie Counter.controllers', ['Calorie Counter.services'])

// controller for Home Page
.controller('HomeCtrl', function($scope, $localstorage) {
	$localstorage.set('name', 'Max');
		
	$scope.user = {
		firstName: "John",
		lastName: "Doe"
	};

	// test function
	$scope.hello = function(){ 
  	//alert($localstorage.get('name'));
			
		 $localstorage.setObject('post', $scope.user);

  var post = $localstorage.getObject('post');
  alert(post.firstName + " " + post.lastName);
	};	
		
});

