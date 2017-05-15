import angular from 'angular';
import uirouter from 'angular-ui-router';
// import {USER_ROLES} from '../../constans';

import routing from './posts.routes';
import PostController from './posts.controller';

// import postList from './posts.list';


export default angular.module('admin.postnew', [uirouter, 'ngQuill'])
  .config(routing)
  .controller('PostController', PostController)
  // .constant('USER_ROLES', USER_ROLES)
  .name;
