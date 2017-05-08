import angular from 'angular';
import './chat.scss';

export class ChatComponent {
    constructor(RestService, $scope, $state) {
        this.RestService = RestService;
        this.$scope = $scope;
        this.$state = $state;
        // console.log($scope);
        RestService.usersListAll().then(function(data) {
            // console.log(data.data);
             $scope.users = data.data;
        });
    }
}

ChatComponent.$$ngIsClass = true;

export default angular.module('app', [])
  .component('chat', {
      template: require('./chat.html'),
      controller: ChatComponent,
  })
  .name;
