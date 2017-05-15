import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './users.list.routes';
import Controller from './users.list.controller';


export default angular.module('admin.userslist', [uirouter])
  .config(routing)
  .controller('UsersListController', Controller)
  .name;
