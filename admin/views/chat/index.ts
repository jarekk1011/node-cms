import angular from 'angular';
import uirouter from 'angular-ui-router';

// import socket from 'socket.io-client';
import {USER_ROLES} from '../../constans';

import routing from './chat.routes';
import ChatController from './chat.controller';
import ChatNewController from './chat.new/chat.new.controller';
import ChatStartController from './chat.start/chat.start.controller';


export default angular.module('admin.chat', [uirouter])
  .config(routing)
  .controller('ChatController', ChatController)
  .controller('ChatNewController', ChatNewController)
  .controller('ChatStartController', ChatStartController)
  .constant('USER_ROLES', USER_ROLES)
  .name;
