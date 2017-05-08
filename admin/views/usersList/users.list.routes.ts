routes.$inject = ['$stateProvider', 'USER_ROLES'];

export default function routes($stateProvider, USER_ROLES) {
  $stateProvider
    .state('userslist', {
      url: '/admin/userslist',
      template: require('./users.list.html'),
      controller: 'UsersListController',
      controllerAs: 'userslist',
      data: {
          authorizedRoles: USER_ROLES.all 
      }
    });
}
