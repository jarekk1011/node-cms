import angular from 'angular';

export class NavigtionComponent {
  constructor($scope) {
    this.$scope = $scope;
  }
}
NavigtionComponent.$$ngIsClass = true;

export default angular.module('app.navigation', [])
  .component('navigation', {
      template: require('./navigation.html'),
      controller: NavigtionComponent,
  })
  .name;
