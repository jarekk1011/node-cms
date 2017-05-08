routes.$inject = ['$stateProvider', 'USER_ROLES'];

export default function routes($stateProvider, USER_ROLES) {
  $stateProvider
    .state('settings', {
      url: '/admin/settings',
      template: require('./settings.html'),
      controller: 'SettingsController',
      controllerAs: 'settings',
      data: {
          authorizedRoles: USER_ROLES.all
      }
    });
}
