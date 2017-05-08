import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './dashboard.routes';
import DashboardController from './dashboard.controller';
import {USER_ROLES} from '../../constans';


export default angular.module('admin.dashboard', [uirouter])
  .config(routing)
  .controller('DashboardController', DashboardController)
  .constant('USER_ROLES', USER_ROLES)
  .name;
