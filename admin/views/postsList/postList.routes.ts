routes.$inject = ['$stateProvider', 'USER_ROLES'];

export default function routes($stateProvider, USER_ROLES) {
  $stateProvider
    .state('postlist', {
      url: '/admin/postlist',
      template: require('./postList.html'),
      controller: 'PostListController',
      controllerAs: 'postlist',
      data: {
          authorizedRoles: USER_ROLES.all
      },
      resolve: {
        posts: function(RestService) {
          return RestService.postListAll();
        }
      }
    });
}
