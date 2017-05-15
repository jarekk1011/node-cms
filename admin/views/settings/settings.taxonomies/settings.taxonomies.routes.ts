routes.$inject = ['$stateProvider', 'USER_ROLES'];

export default function routes($stateProvider, USER_ROLES) {
  $stateProvider
    .state('taxonomies', {
      url: '/admin/taxonomies',
      template: require('./settings.taxonomies.html'),
      controller: 'SettingsTaxonomiesController',
      controllerAs: 'taxonomies',
      data: {
          authorizedRoles: USER_ROLES.all
      },
      resolve: {
        categories: function(RestService) {
          return RestService.listCategory();
        },
        tags: function(RestService) {
          return RestService.listTags();
        }
      }
    });
}
