import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './user.settings.routes';
import UserSettingsController from './user.settings.controller';
import {USER_ROLES} from '../../../constans';

import './style.scss';

export default angular.module('admin.usersettings', [uirouter])
  .config(routing)
  .controller('UserSettingsController', UserSettingsController)
  .constant('USER_ROLES', USER_ROLES)
  .name;
