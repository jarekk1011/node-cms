import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './register.routes';
import RegisterController from './register.controller';

import './style.scss';
import {USER_ROLES} from '../../../constans';

export default angular.module('admin.register', [uirouter])
  .config(routing)
  .controller('RegisterController', RegisterController)
  .constant('USER_ROLES', USER_ROLES)
  .name;
