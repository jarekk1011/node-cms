import angular from 'angular';
import uirouter from 'angular-ui-router';
import routing from './settings.general.routes';
import SettingsGeneralController from './settings.general.controller';

export default angular.module('admin.settingsgeneral', [uirouter])
  .config(routing)
  .controller('SettingsGeneralController', SettingsGeneralController)
  .name;
