routes.$inject = ['$stateProvider', 'USER_ROLES'];

export default function routes($stateProvider, USER_ROLES) {
  $stateProvider
    .state('post', {
      url: '/admin/post/:id',
      template: require('./post.html'),
      controller: 'PostController',
      controllerAs: 'post',
      data: {
          authorizedRoles: USER_ROLES.all
      }
    });
}
