import angular from 'angular';
import './chat.scss';

export class ChatComponent {
    constructor(RestService, $rootScope, $scope, $state, socket) {
        this.RestService = RestService;
        this.$scope = $scope;
        this.$state = $state;
        RestService.usersListAll().then(function(res) {
            function changeState(value, ID) {
                res.data.map(function(el) {
                    if (el._id === ID) {
                        el.isActive = value;
                    }
                });
            }
            $scope.users = res.data;
            socket.emit('users-loaded');
            res.data.map(function(el){
                if (el._id === $rootScope.currentUser._id) {
                    el.isActive = true;
                }
            });
            socket.on('active-user', function(ID) {
                changeState(true, ID);
            });
            socket.on('disconnect-user', function(ID) {
                changeState(false, ID);
            });
        });
    }
    $onInit() {

    }
}

ChatComponent.$$ngIsClass = true;

export default angular.module('app', [])
  .component('chat', {
      template: require('./chat.html'),
      controller: ChatComponent,
  })
  .name;
