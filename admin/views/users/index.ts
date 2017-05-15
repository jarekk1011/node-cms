import angular from 'angular';
import uirouter from 'angular-ui-router';
import {USER_ROLES} from '../../constans';

import UsersList from './users.list';

export default angular.module('admin.users', [uirouter, UsersList])
  .constant('USER_ROLES', USER_ROLES)
  .name;
