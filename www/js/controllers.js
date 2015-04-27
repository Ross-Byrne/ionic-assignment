angular.module('Calorie Counter.controllers', ['Calorie Counter.services'])

// controller for Home Page
.controller('HomeCtrl', function($scope, $localstorage) {
	
	// variables
	
	// default values for user
	$scope.user = {
		firstName: "Default",
		lastName: "User",
		gender: "Default"
	};
	
	// functions to be fired when the view is the active view
	$scope.$on("$ionicView.enter", function(){
  
		// load user details
		if($localstorage.getObject('user') != null){
			$scope.user = $localstorage.getObject('user');
		} // if
	});
	
}) // HomeCtrl

// controller for settings page
.controller('SettingsCtrl', function($scope, $localstorage) {
	
	// functions to be fired when the view is entered
	$scope.$on("$ionicView.enter", function(){
  
		// load user details
		$scope.user = $localstorage.getObject('user');
		
		/*if(user.gender == "Male"){
			
		} // if*/
	});

	// function to update user's name
	$scope.updateDetails = function(){  
	  	// save users deatails
	  	$localstorage.setObject('user', $scope.user);
	 }; // updateDetails()
	
	// functions to be fired when the view exits
  	$scope.$on("$ionicView.beforeLeave", function(){
     
	});
   
}); // SettingsCtrl

   	