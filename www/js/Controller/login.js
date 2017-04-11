firstApp.controller("loginController",function($scope,$rootScope,$location,$route){
	console.log("LOGIN")
	// $scope.username = ""
	// $scope.passcode = ""
	$scope.access = {};
	$scope.login = function(user,pass){

		console.log("$scope.username ",$scope.access.username)
		if($scope.access.username == 'himanish' && $scope.access.passcode == 'himanish'){
			// alert("SUCCESSFUL")

			$location.path('/side/home')
			$scope.access = ""
		}
		else if($scope.access.username == '' || $scope.access.username == null || $scope.access.username == undefined || $scope.access.passcode == null || $scope.access.passcode == undefined || $scope.access.passcode == ''){
			alert("ENTER VALID CREDENTIALS")
		 	$scope.access = ""
		 // $scope.passcode = ""
		}
		else{
			alert("ENTER VALID CREDENTIALS")
			$scope.access = ""
			// $scope.passcode = ""
		}

		
	}
});