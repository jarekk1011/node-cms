routes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'USER_ROLES'];

export default function routes($stateProvider, $locationProvider, $urlRouterProvider, USER_ROLES) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/admin');
  $stateProvider
    .state('profile', {
      url: '/admin/profile',
      template: require('./user.settings.html'),
      controller: 'UserSettingsController',
      controllerAs: 'profile',
      data: {
          authorizedRoles: USER_ROLES.all
      },
      resolve: {
        profile: function(RestService) {
          return RestService.profile();
        }
      }
    });
}
