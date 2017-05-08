import angular from 'angular';
import uirouter from 'angular-ui-router';
// import '../../services/rest.service';
// require('angular-sanitize'), require('textAngular')


// import socket from 'socket.io-client';
import {USER_ROLES} from '../../constans';

import routing from './users.list.routes';
import Controller from './users.list.controller';


export default angular.module('admin.userslist', [uirouter])
  .config(routing)
  .controller('UsersListController', Controller)
  .constant('USER_ROLES', USER_ROLES)
  .name;
