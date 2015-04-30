angular.module('Calorie Counter.services', [])

// factory for saving application data
.factory('$localstorage', ['$window', function($window) {
	return {
			
		// save a single string to local storage
		set: function(key, value) {
			$window.localStorage[key] = value;
		},
			
		// loading a single string from local storage
		get: function(key, defaultValue) {
			return $window.localStorage[key] || defaultValue;
		},
			
		// saving an object to local storage
		setObject: function(key, value) {
			$window.localStorage[key] = JSON.stringify(value);
		},
			
		// loading an object from local storage
		getObject: function(key) {
			return JSON.parse($window.localStorage[key] || null);
		}
	}
}])

// factory for manging user created food objects
.factory('foodItems', ['$window', function($window) {
	return {
		
		// create new food item
		addNewFood: function(foodName, cals){
			return{
				name: foodName,
				calories: cals
			};
		},
		
		// display all food items
		displayAll: function(){
			
			var foodItems = $window.localStorage['foodItems'] || null;
			if (foodItems) {
				return JSON.parse(foodItems);
			}
      	return [];	
		},
		
		// saving a food Item to local storage
		save: function(value) {
			$window.localStorage['foodItems'] = JSON.stringify(value);
		}
	}
}]);