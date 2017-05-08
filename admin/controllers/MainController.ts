// import io from 'socket.io';
export default function($scope, $rootScope, toastr, $state, UserService, AUTH_EVENTS, API_ENDPOINT, USER_ROLES, $mdSidenav, socket) {
  let setCurrentUser = function(){
    $scope.currentUser = $rootScope.currentUser;
  }
  let showNotAuthorized = function() {
      toastr.error('You are not Authorized');
  }
  let goLogin = function() {
    UserService.logout();
  }

  $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');
  function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
  }

  socket.on('connect', function() {
    socket.on('users-length', function(data) {
      if (!!data) {
        $scope.activeUsers = data;
      } else {
        $scope.activeUsers = 0;
      }
      });
  });



  $rootScope.$on(AUTH_EVENTS.notAuthorized, showNotAuthorized);
  $rootScope.$on(AUTH_EVENTS.notAuthenticated, goLogin);
  // $rootScope.$on(AUTH_EVENTS.sessionTimeout, goLogin);
  // $rootScope.$on(AUTH_EVENTS.logoutSuccess, goLogin);
  $rootScope.$on(AUTH_EVENTS.loginSuccess, setCurrentUser);
  // console.log($rootScope);
}
