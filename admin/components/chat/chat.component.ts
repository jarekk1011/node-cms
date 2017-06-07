import angular from 'angular';
import './chat.scss';

export class ChatComponent {
    constructor(RestService, $rootScope, $scope, $state, socket) {
        this.RestService = RestService;
        this.$scope = $scope;
        this.$state = $state;
        function changeState(data, value, ID) {
            data.map(function(el) {
                if (el._id === ID) {
                    el.isActive = value;
                }
            });
        }
        RestService.usersListAll().then(function(res) {
            socket.emit('users-loaded');
            res.data.map(function(el){
                if (el._id === $rootScope.currentUser._id) {
                    el.isActive = true;
                }
            });
            socket.on('active-user', function(ID) {
                changeState(res.data, true, ID);
            });
            socket.on('disconnect-user', function(ID) {
                console.log('disconnect user');
                changeState(res.data, false, ID);
            });
            $scope.users = res.data;
        });

        // setTimeout(function(){
        //     let users = $scope.users;
        //    socket.on('active-user', function(ID) {
        //         changeState(users, true, ID);
        //         $scope.users = users;
        //     });
        //     socket.on('disconnect-user', function(ID) {
        //         changeState(users, false, ID);
        //         $scope.users = users;
        //     });
        // }, 3000);
    }

}

ChatComponent.$$ngIsClass = true;

export default angular.module('app', [])
  .component('chat', {
      template: require('./chat.html'),
      controller: ChatComponent,
  })
  .name;
