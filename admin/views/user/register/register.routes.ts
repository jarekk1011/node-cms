routes.$inject = ['$stateProvider','USER_ROLES'];

export default function routes($stateProvider, USER_ROLES) {
  $stateProvider
    .state('register', {
      url: '/admin',
      template: require('./register.html'),
      controller: 'RegisterController',
      controllerAs: 'register',
      data: {
          authorizedRoles: USER_ROLES.all
      }
    });
}
