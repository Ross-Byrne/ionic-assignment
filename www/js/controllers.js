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
		dailyCals: 0,
		calsConsumed: 0
	};
	
	// functions to be fired when the view is the active view
	$scope.$on("$ionicView.afterEnter", function(){
  
		// load user details if they are there
		if($localstorage.getObject('user') != null){
			$scope.user = $localstorage.getObject('user');
		}
		else{ // otherwise save defaults
			
			// save default values
			$localstorage.setObject('user', $scope.user);
		} // if
	});
	
}) // HomeCtrl

// controller for updating user settings
.controller('UpdateCtrl', function($scope, $localstorage) {
	
	// functions to be fired when the view is entered
	$scope.$on("$ionicView.beforeEnter", function(){
  
		// load user details
		$scope.user = $localstorage.getObject('user');
	});
	
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
		$scope.user.dailyCals = Math.round($scope.user.BMR * $scope.user.activityLevel);
		
	  	// save users deatails
	  	$localstorage.setObject('user', $scope.user);
	 }; // updateDetails()
	
}) // UpdateCtrl

// controller for settings page
.controller('SettingsCtrl', function($scope, $localstorage, $ionicPopup, $state, $ionicHistory) {

	// functions to be fired when the view is entered
	$scope.$on("$ionicView.enter", function(){
 
		// load user details
		$scope.user = $localstorage.getObject('user');
	});
	
	// confirm delete all user info
 	$scope.showConfirm = function() {
   	var confirmPopup = $ionicPopup.confirm({
     		title: 'Delete All User Information',
     		template: 'Are you sure you want to delete all user information?'
   	}); // confirmPopup()
   	confirmPopup.then(function(res) {
     		if(res) { // if yes
				// delete all user information
       		$scope.user = {
					firstName: "Default",
					lastName: "User",
					gender: "Default",
					weightKG: 0,
					heightCM: 0,
					ageInYears: 0,
					BMR: 0,
					activityLevel: 0,
					dailyCals: 0,
					calsConsumed: 0	
				};
				// save changes
				$localstorage.setObject('user', $scope.user);
			
     		} else { // if no
				// dont delete information
     		} // if
   	});
 	}; // showConfirm()
   
}); // SettingsCtrl

   	