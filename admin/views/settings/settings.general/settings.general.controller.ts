export default class SettingsGeneralController {
  constructor ($scope) {
    $scope.toppings = [
      { name: 'Pepperoni', wanted: true },
      { name: 'Sausage', wanted: false },
      { name: 'Black Olives', wanted: true },
      { name: 'Green Peppers', wanted: false }
    ];
  }
}
SettingsGeneralController.$$ngIsClass = true;
