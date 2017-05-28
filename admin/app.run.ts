export default function($rootScope, $state, $stateParams, UserService, AUTH_EVENTS) {

  $rootScope.$on('$stateChangeStart', function (event, next, nextParams, fromState) {

    let authorized = next.data.authorizedRoles;
    if (next.name !== 'login' && next.name !== 'register') {
      UserService.LoggedIn().then(
        function() {
          if (next.name !== 'login' && next.name !== 'register') {
            if (!UserService.isAuthorized(authorized)) {
              event.preventDefault();
              return $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
            }
          }
        },
        function(){
          if (next.name !== 'login' && next.name !== 'register') {
            $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
          }
        });

        if (UserService.isAuthenticated()) {
          if (next.name !== 'login' && next.name !== 'register') {
            if (!UserService.isAuthorized(authorized)) {
              event.preventDefault();
              return $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
            }
          }
        }
    }
  });

  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $rootScope.state = $state.current.name;
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  });

}
