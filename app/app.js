'use strict';

// App level module which depends on views, and components
angular.module('contactsApp', [
    'ngRoute',
    'contactsApp.contacts'
]).
	// ROUTES
config(['$routeProvider', function (routeProvider) {
		routeProvider.
		when('/contacts', {
			templateUrl: 'views/contacts.html',
			controller: 'contactsCtrl',
			controllerAs: 'contacts'
		}).
		otherwise({
			redirectTo: '/contacts'
		});
    }]).
	// DIRECTIVES
directive('tableMaker', function () {
	return {
		restrict: 'A',
		templateUrl: 'templates/contacts-details.html',
		link: function (scope, elem, attrs) {
			var header = angular.element(elem.find('th'));

			//Maps key to header text
			var mapping = _.object(scope.headersCollection, scope.columnOrder);

			//Set sorting functionality 
			scope.reverse = false;
			scope.order = function (val) {
				scope.reverse = (scope.sortBy === val) ? !scope.reverse : false;
				scope.sortBy = val;
			};

			scope.sort = function (val) {
				var headerText = val;

				//Sorting of columns
				scope.order(mapping[headerText]);
			};
		}
	}
}).
directive('tableSearch', function () {
		return {
			restrict: 'A',
			templateUrl: 'templates/search-bar.html',
			link: function (scope, elem, attrs) {
				var searchBar = angular.element(elem.find('.drop-search'));


			},
			controller: function ($scope) {

			}
		}
	}).
	//FILTERS
filter('highlight', function ($sce) {
	return function (text, phrase) {
		if (phrase) text = text.replace(new RegExp('(' + phrase + ')', 'gi'),
			'<span class="highlighted">$1</span>')

		return $sce.trustAsHtml(text)
	};
})
