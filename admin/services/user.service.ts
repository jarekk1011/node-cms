import angular from 'angular';
export default function UserService($http, $state, $q, toastr, $rootScope, AUTH_EVENTS, API_ENDPOINT) {

let UserService = {};

  UserService.login = function(credentials) {
    $http.post(API_ENDPOINT.url + '/login', credentials).then(function(data) {
      let user = data.data.user;
      toastr.success(data.data.msg);
      if (user) {
        $rootScope.currentUser = user;
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
        $state.go('dashboard');
      if (user.email === credentials.email) {

        } else {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        }
      }
    },
    function(result) {
      console.log(result);
    });
  };

  UserService.LoggedIn = function() {
    let deferred = $q.defer();

    $http.get(API_ENDPOINT.url +'/auth').then(function(res) {
      let user = res.data;
      $rootScope.errorMessage = null;
      if (!!user) {
        $rootScope.currentUser = user;
        deferred.resolve();
      } else { // User is not Authenticated
        $rootScope.errorMessage = 'You need to log in';
        $rootScope.currentUser = null;

      }
    }, function (err) {
        deferred.reject();
      });
    return deferred.promise;
  };

  UserService.isAuthenticated = function() {
    if (!!$rootScope.currentUser) {
      return true;
    }else {
      return false;
    }
  }

  UserService.isAuthorized = function(authorizedRoles) {
    if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
    }
    return (UserService.isAuthenticated() &&
      authorizedRoles.indexOf($rootScope.currentUser.role) !== -1 ||
        UserService.isAuthenticated() && authorizedRoles[0] == '*');
  };
  UserService.logout = function() {
    $http.post(API_ENDPOINT.url +'/logout').then(function(){
      $state.go('login');
      $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
      $rootScope.currentUser = null;
    });
  };
  $rootScope.UserService = UserService;
  return UserService;
}
