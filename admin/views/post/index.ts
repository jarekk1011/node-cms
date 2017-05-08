import angular from 'angular';
import uirouter from 'angular-ui-router';
// require('angular-sanitize'), require('textAngular')

// import socket from 'socket.io-client';

// import 'textAngular';
// import 'textAngular/dist/textAngular-sanitize';
// import 'textAngular/dist/textAngularSetup';
// import quill from 'ng-quill';

// console.log(quill);

// import 'angular-ui-tinymce';
import {USER_ROLES} from '../../constans';

import routing from './post.routes';
import PostController from './post.controller';


export default angular.module('admin.post', [uirouter])
  .config(routing)
  .controller('PostController', PostController)
  .constant('USER_ROLES', USER_ROLES)
  .name;
