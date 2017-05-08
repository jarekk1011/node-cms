routes.$inject = ['$stateProvider', 'USER_ROLES'];

export default function routes($stateProvider, USER_ROLES) {
  $stateProvider
    .state('chat', {
      url: '/admin/chat',
      template: require('./chat.html'),
      controller: 'ChatController',
      controllerAs: 'chat',
      data: {
          authorizedRoles: USER_ROLES.all
      }
    });
}
