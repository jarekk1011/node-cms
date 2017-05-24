import angular from 'angular';

export class NavigtionComponent {
  constructor($scope) {
    this.$scope = $scope;
    // console.log($scope);
    $scope.expand = function(e) {
      let element = e.target;
      let thisEl = angular.element(element).parent();
      if (thisEl.hasClass('is--open')) {
        thisEl.removeClass('is--open')
      } else {
        angular.forEach(thisEl.parent().children(), function(value, key) {
          let el = angular.element(value);
          if (el.hasClass('is--open')) {
             el.removeClass('is--open');
          }
        });
        thisEl.addClass('is--open');
      }
    }
  }
}
NavigtionComponent.$$ngIsClass = true;

export default angular.module('app.navigation', [])
  .component('navigation', {
      template: require('./navigation.html'),
      controller: NavigtionComponent,
  })
  .name;
