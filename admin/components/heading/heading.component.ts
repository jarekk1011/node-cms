import angular from 'angular';

// let img = require('./user-icon.png');

export class HeadingComponent {
  constructor($scope, UserService, $mdSidenav, $mdMenu) {
    this.$scope = $scope;
    this.UserService = UserService;
    this.$mdSidenav = $mdSidenav;
    this.$scope.user = {
      email: '',
      password: ''
    };
    // $scope.image = img;
    $scope.closeMenu = function() {
      $mdMenu.hide(null, { closeAll: true });
    }
  }
}
HeadingComponent.$$ngIsClass = true;

export default angular.module('admin.heading', ['admin'])
  .component('heading', {
      template: require('./heading.html'),
      controller: HeadingComponent,
  })
  .name;
