// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var firstApp = angular.module('firstApp', ['ionic','ngRoute']);


// firstApp.config(['$routeProvider', '$httpProvider',
//     function ($routeProvider, $httpProvider) {
//              $urlRouterProvider.otherwise('/side/home')
//              $routeProvider

//             .when('/sidemenu', {
//                 url:'/side',
//                 abstract:true,
//                 templateUrl: 'templates/side-menu.html',
//                 // controller: 'starterController'
//             })
//             .when('/sidemenu.home',{
//               url:'/home',
//               views:{
//                 'menuContent':{
//                   templateUrl:"templates/home.html"
//                 }
//               }
//             });

//           }])


firstApp.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/login')
  // $urlRouterProvider.otherwise('/side/home')
  $stateProvider
  .state('sidemenu',{
    url:"/side",
    abstract:true,
    templateUrl:"templates/side-menu.html"
  })

  .state('login',{
    url:"/login",
    controller:'loginController',
    templateUrl:"templates/loginPage.html"
  })

  .state('sidemenu.home',{
    url:'/home',
    views:{
      'menuContent':{
        templateUrl:"templates/home.html"
      }
    }
  })

  .state('sidemenu.nav',{
    url:'/map',
    views:{
      'menuContent':{
        controller:'mapCtrl',
        templateUrl:"templates/map.html"
      }
    }
  })

    .state('sidemenu.support',{
    url:'/support',
    views:{
      'menuContent':{
        // controller:'mapCtrl',
        templateUrl:"templates/support.html"
      }
    }
  })
})



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }


  });
})





