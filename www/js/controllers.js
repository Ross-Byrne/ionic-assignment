angular.module('Calorie Counter.controllers', ['Calorie Counter.services'])

// controller for Home Page
.controller('HomeCtrl', function($scope, $localstorage) {
	
	// variables
	
	// default values for user
	$scope.user = {
		firstName: "Default",
		lastName: "User"
	};
	
	// functions to be fired when the view is the active view
	$scope.$on("$ionicView.beforeEnter", function(){
  
		// load user details
		if($localstorage.getObject('user') != null){
			$scope.user = $localstorage.getObject('user');
		} // if
		
		//alert("h");
	});
	
	// example of saving single string
	//$localstorage.set('name', 'Max');
	
	// test function
	$scope.displayName = function(){ 
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
	$scope.updateName = function(){
		// update user name
		$localstorage.setObject('user', $scope.user);
		
		// display message showing new name
		var post = $localstorage.getObject('user');
  	alert(post.firstName + " " + post.lastName);
	}; // update
		
});

   	