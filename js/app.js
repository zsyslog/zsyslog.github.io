angular.module('resume', []).controller('Controller', ['$scope', '$http', 
function($scope, $http) {
	$http.get('https://zsyslog.github.io/resume.json')
						.success(function(data, status, headers, config){
							console.log(data)
							$scope.resume = data
						})
}]);
