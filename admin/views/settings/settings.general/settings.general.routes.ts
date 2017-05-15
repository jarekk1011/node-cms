routes.$inject = ['$stateProvider', 'USER_ROLES'];

export default function routes($stateProvider, USER_ROLES) {
  $stateProvider
    .state('settingsgeneral', {
      url: '/admin/settings',
      template: require('./settings.general.html'),
      controller: 'SettingsGeneralController',
      controllerAs: 'settings',
      data: {
          authorizedRoles: USER_ROLES.all
      }
    });
}
