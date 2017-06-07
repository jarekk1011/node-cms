import angular from 'angular';
import uirouter from 'angular-ui-router';


// import 'bootstrap';

// import ngCookies from 'angular-cookies';

import 'font-awesome-webpack';

import {AUTH_EVENTS, API_ENDPOINT, USER_ROLES} from './constans';
import './style/global.scss';

import 'angular-resource';
import 'angular-material';
import 'angular-animate';
import 'angular-toastr';


import login from './views/main/login';
import register from './views/main/register';

import user from './views/main/UserSettings';
// ADMIN
import AdminHeading from './components/heading/heading.component';
import AdminNavigation from './components/navigation/navigation.component';
import ChatComponent from './components/chat/chat.component';

import ChatView from './views/chat';
import dashboard from './views/dashboard';
import post from './views/posts';
import settings from './views/settings';
import users from './views/users';

import UserService from './services/user.service';
import RestService from './services/rest.service';
import SocketService from './services/socket.service';
import AuthInterceptor from './services/auth.interceptor';


import run from './app.run';


// Controllers
import MainController from './controllers/MainController';

const MODULE_NAME = 'admin';

angular.module(MODULE_NAME, [
  uirouter,
  dashboard,
  ChatComponent,
  AdminHeading,
  AdminNavigation,
  login,
  user,
  register,
  post,
  users,
  ChatView,
  settings,
  'ngMaterial',
  'toastr',
  'ngResource',
  'ngAnimate'
])
  .factory('AuthInterceptor', AuthInterceptor)
  .service('UserService', UserService)
  .service('RestService', RestService)
  .controller('MainController', MainController)
  .run( ['$rootScope', '$state', '$stateParams',
  function ($rootScope,   $state,   $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]).run(run)
.constant('API_ENDPOINT', API_ENDPOINT)
.constant('AUTH_EVENTS', AUTH_EVENTS)
.constant('USER_ROLES', USER_ROLES)
.config(['$qProvider', '$httpProvider', function ($qProvider, $httpProvider) {
    $qProvider.errorOnUnhandledRejections(false);
    $httpProvider.interceptors.push([
    '$injector',
    function ($injector) {
      return $injector.get('AuthInterceptor');
    }
  ]);
}])
.factory('socket', SocketService)
.filter('NoHtml', function() {
    return function(text)
    {
        return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
});

export default MODULE_NAME;
