angular.module('Calorie Counter.controllers', ['Calorie Counter.services'])

// controller for Home Page
.controller('HomeCtrl', function($scope, $localstorage) {
	
	// variables
	
	// default values for user
	$scope.user = {
		firstName: "Default",
		lastName: "User",
		gender: "Default",
		weightKG: 0,
		heightCM: 0,
		ageInYears: 0,
		BMR: 0,
		activityLevel: 0,
		dailyCals: 0
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
	// variables
	$scope.edit = false;
	
	// functions to be fired when the view is entered
	$scope.$on("$ionicView.afterEnter", function(){
  
		// load user details
		$scope.user = $localstorage.getObject('user');
	});
	
	//function to enable updating users details
	$scope.editUserDetails = function(){
		// disables display and enables editing
		$scope.edit = true;
	} // editUserDetails()

	// function to update user's name
	$scope.updateDetails = function(){  
		$scope.user.weightKG = 62;
		$scope.user.heightCM = 170;
		$scope.user.ageInYears = 20;
		$scope.user.activityLevel = 1.2;
		// calculate personal basal metabolic rate / BMR
		// for women
		if($scope.user.gender == "Female"){
			$scope.user.BMR = ((9.6 * $scope.user.weightKG) +
				(1.8 * $scope.user.heightCM) -
				(4.7 * $scope.user.ageInYears) + 655);
		} // if
		
		// for men
		if($scope.user.gender == "Male"){
			$scope.user.BMR = ((13.7 * $scope.user.weightKG) +
				(5 * $scope.user.heightCM) -
				(6.8 * $scope.user.ageInYears) + 66);
		} // if
		
		// calculate daily calorie needs based on 
		// user BMR and activity level
		
		$scope.user.dailyCals = ($scope.user.BMR * $scope.user.activityLevel);
		
		
		
	  	// save users deatails
	  	$localstorage.setObject('user', $scope.user);
		
		// disables editing
		$scope.edit = false;
	 }; // updateDetails()
	
	// functions to be fired when the view exits
  	$scope.$on("$ionicView.beforeLeave", function(){
     
	});
   
}); // SettingsCtrl

   	