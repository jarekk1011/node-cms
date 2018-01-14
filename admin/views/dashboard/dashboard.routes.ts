routes.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'USER_ROLES'];

export default function routes($stateProvider, $locationProvider, $urlRouterProvider, USER_ROLES) {
  $urlRouterProvider.otherwise('/admin');
  $stateProvider
    .state('dashboard', {
      url: '/admin/dashboard',
      template: require('./dashboard.html'),
      controller: 'DashboardController',
      controllerAs: 'dashboard',
      data: {
          authorizedRoles: USER_ROLES.all
      },
      resolve: {
        users: function(RestService) {
          return RestService.usersListAll();
        },
        posts: function(RestService) {
          return RestService.postListAll();
        }
      }
    });
    $locationProvider.html5Mode(true);
}
