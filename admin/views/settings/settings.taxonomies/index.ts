import angular from 'angular';
import uirouter from 'angular-ui-router';
// import {USER_ROLES} from '../../constans';

import routing from './settings.taxonomies.routes';
import Controller from './settings.taxonomies.controller';

export default angular.module('admin.settingstaxonomies', [uirouter])
  .config(routing)
  .controller('SettingsTaxonomiesController', Controller)
  // .constant('USER_ROLES', USER_ROLES)
  .name;
