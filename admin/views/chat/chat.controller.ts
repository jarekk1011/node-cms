// import * as socket from "socket.io-client";


export default class ChatController {
  constructor($scope, $http, $state, API_ENDPOINT, RestService) {
    // this.socket = io(API_ENDPOINT.server);
    this.$scope = $scope;
    this.$http = $http;
    this.RestService = RestService;
    // this.socket = socket;
    RestService.getConversations().then(function(res) {
      if (res.data.success === false) {
        // console.log(res.data);
        $scope.conversations = res.data;
      } else {
        $scope.conversations = res.data.conversations;
      }
    });
    // console.log($scope);


    // // $scope.messageTo = '';
    //   this.socket.on('connect', function(data) {
    //   console.log('connected');
    //   // this.socket.emit('join', 'Hello World from client');
    // });

    // this.socket.on('send:message', function(data) {

    //   // console.log(data);
    //   $scope.messages.push(data);
    //   // console.log(data);
    // });

    // // this.socket.on('change:name', function (data) {
    // //   changeName(data.oldName, data.newName);
    // // });

    // // this.socket.on('user:join', function (data) {
    // //   $scope.messages.push({
    // //     user: 'chatroom',
    // //     text: 'User ' + data.name + ' has joined.'
    // //   });
    // //   $scope.users.push(data.name);
    // // });

    // // add a message to the conversation when a user disconnects or leaves the room
    // // this.socket.on('user:left', function (data) {
    // //   $scope.messages.push({
    // //     user: 'chatroom',
    // //     text: 'User ' + data.name + ' has left.'
    // //   });
    // //   var i, user;
    // //   for (i = 0; i < $scope.users.length; i++) {
    // //     user = $scope.users[i];
    // //     if (user === data.name) {
    // //       $scope.users.splice(i, 1);
    // //       break;
    // //     }
    // //   }
    // // });


    // // Methods published to the scope
    // // ==============================


    // $scope.sendMessage = function () {
    //   // console.log($scope.messageTo);
    //   socket.emit('send:message', {
    //     user_id: $scope.memberinfo._id,
    //     user: $scope.memberinfo.name,
    //     message: $scope.messageTo,
    //     date: new Date(),
    //   }, function(data){
    //     console.log(data);
    //   });

    // };
    //  var info ='';




  $scope.messages = [];
}

loadConversation(conversationId) {
  this.RestService.getConversation(conversationId).then(function(res) {
    // console.log(res);
  });
}

// newConversation() {
// }

  // console.log($scop)

}
// ChatController.$inject = ['$scope', 'UserService', '$http', '$state'];
ChatController.$$ngIsClass = true;