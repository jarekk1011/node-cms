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
    })
    .state('chat.new', {
      url: '',
      template: require('./chat.new/chat.new.html'),
      controller: 'ChatNewController',
      controllerAs: 'ctrl',
      data: {
        authorizedRoles: USER_ROLES.all
      },
      resolve: {
        users: function (RestService) {
          return RestService.usersListAll()
        }
      }
    })
    .state('chat.start', {
      url: '',
      template: require('./chat.start/chat.start.html'),
      controller: 'ChatStartController',
      controllerAs: 'ctrl',
      data: {
        authorizedRoles: USER_ROLES.all
      },
      resolve: {
      }
    });
}
