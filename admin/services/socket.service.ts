import {API_ENDPOINT} from '../constans';
import * as io from 'socket.io-client';

export default function ($rootScope) {
  let socket;
  console.log($rootScope);
  if (!!$rootScope.currentUser) {
    console.log('loggedin');
    socket = io.connect(API_ENDPOINT.server);
  } else {
    console.log('not loged')
    socket = io.connect();
  }
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {
        let args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        let args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      });
    }
  };
}

