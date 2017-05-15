routes.$inject = ['$stateProvider','USER_ROLES'];

export default function routes($stateProvider, USER_ROLES) {
  $stateProvider
    .state('login', {
      url: '/admin',
      template: require('./login.html'),
      controller: 'LoginController',
      controllerAs: 'login',
      data: {
          authorizedRoles: USER_ROLES.all
      }
    });
}