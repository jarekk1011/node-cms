import angular from 'angular';
import uirouter from 'angular-ui-router';

// import socket from 'socket.io-client';
import {USER_ROLES} from '../../constans';

import routing from './settings.routes';
import SettingsController from './settings.controller';


export default angular.module('admin.settings', [uirouter])
  .config(routing)
  .controller('SettingsController', SettingsController)
  .constant('USER_ROLES', USER_ROLES)
  .name;
