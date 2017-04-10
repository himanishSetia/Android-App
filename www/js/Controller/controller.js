firstApp.controller("starterController", function($scope,$http,$log,$location,$route) {
	console.log("starterController")
$scope.clicked = function(){
	console.log("ENTERED");
	alert("HELLO");
}
})