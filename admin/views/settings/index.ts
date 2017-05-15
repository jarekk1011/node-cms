import angular from 'angular';
import uirouter from 'angular-ui-router';
import { USER_ROLES } from '../../constans';
import SettingsGeneral from './settings.general';
import SettingsTaxonomies from './settings.taxonomies';


export default angular.module('admin.settings', [uirouter, SettingsGeneral, SettingsTaxonomies])
.constant('USER_ROLES', USER_ROLES)
.name;
