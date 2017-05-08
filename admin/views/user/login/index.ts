import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './login.routes';
import LoginController from './login.controller';
import {USER_ROLES} from '../../../constans';

// console.log('dd');

export default angular.module('admin.login', [uirouter])
  .config(routing)
  .controller('LoginController', LoginController)
  .constant('USER_ROLES', USER_ROLES)
  .name;
