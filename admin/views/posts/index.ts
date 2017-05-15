import angular from 'angular';
import uirouter from 'angular-ui-router';
import {USER_ROLES} from '../../constans';


import PostsList from './posts.list';
import PostsNew from './posts.new';


export default angular.module('admin.post', [uirouter, PostsList, PostsNew])
  .constant('USER_ROLES', USER_ROLES)
  .name;
