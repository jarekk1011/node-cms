import angular from 'angular';
import uirouter from 'angular-ui-router';
// import {USER_ROLES} from '../../constans';

import routing from './posts.list.routes';
import Controller from './posts.list.controller';

export default angular.module('admin.postsList', [uirouter])
  .config(routing)
  .controller('PostListController', Controller)
  // .constant('USER_ROLES', USER_ROLES)
  .name;
