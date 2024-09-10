angular.module('resume', []).controller('Controller', ['$scope', '$http', 
function($scope, $http) {
	// $http.get('https://zsyslog.github.io/resume.json')
	var host = window.location.host; // Obtiene el host actual, incluyendo subdominio y puerto si los hay.
    var url = 'https://' + host + '/resume.json'; // Construye la URL para hacer la solicitud.
	$http.get(url)
						.success(function(data, status, headers, config){
							console.log(data)
							$scope.resume = data
						})
}]);
