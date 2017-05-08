import angular from 'angular';
import uirouter from 'angular-ui-router';
// import '../../services/rest.service';
// require('angular-sanitize'), require('textAngular')


// import socket from 'socket.io-client';
import {USER_ROLES} from '../../constans';

import routing from './postList.routes';
import Controller from './postList.controller';

import './style.scss';

export default angular.module('admin.postList', [uirouter])
  .config(routing)
  .controller('PostListController', Controller)
  .constant('USER_ROLES', USER_ROLES)
  .name;
