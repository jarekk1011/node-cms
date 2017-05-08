import angular from 'angular';
import uirouter from 'angular-ui-router';

// import socket from 'socket.io-client';
import {USER_ROLES} from '../../constans';

import routing from './chat.routes';
import ChatController from './chat.controller';


export default angular.module('admin.chat', [uirouter])
  .config(routing)
  .controller('ChatController', ChatController)
  .constant('USER_ROLES', USER_ROLES)
  .name;
