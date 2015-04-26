angular.module('Calorie Counter.controllers', ['Calorie Counter.services'])

// controller for Home Page
.controller('HomeCtrl', function($scope, $localstorage) {
	
	$scope.$on("$ionicView.enter", function(){
  // functions to be fired when the view is the active view
});
	
	// variables
	$scope.user = {
		firstName: "",
		lastName: ""
	};
	
	// example of saving single string
	//$localstorage.set('name', 'Max');
		
	if($localstorage.getObject('user')){
		
		$scope.user = $localstorage.getObject('user');
	}
	else {
		$scope.user = {
			firstName: "John",
			lastName: "Doe"};
	}
	

	// test function
	$scope.hello = function(){ 
		// example of loading saved string
  	//alert($localstorage.get('name'));
			
			// example of saving object
		 $localstorage.setObject('user', $scope.user);

  var post = $localstorage.getObject('user');
  alert(post.firstName + " " + post.lastName);
	};	
		
})

// controller for settings page
.controller('SettingsCtrl', function($scope, $localstorage) {
	
	$scope.user = $localstorage.getObject('user');
	
	// function to update user's name
	$scope.update = function(){
		
		$localstorage.setObject('user', $scope.user);
		
		var post = $localstorage.getObject('user');
  alert(post.firstName + " " + post.lastName);
	}; // update
		
});

   	