angular.module('contactsApp.contacts', ['ngRoute']).
controller('contactsCtrl', ['$scope', '$http', function ($scope, $http) {
	var vm = this;

	//Set column header values
	$scope.headersCollection = ['First Name', 'Last Name', 'Phone', 'Email', 'Company'];

	//Set order of columns
	$scope.columnOrder = ['first_name', 'last_name', 'phone', 'email', 'company'];

	//Set column to sort by
	$scope.sortBy = 'first_name';

	$http.get('json/MOCK_DATA.json').success(function (data) {
		$scope.gridData = data;
	});
}]);
