export default class UserSettingsController {
  constructor($scope, profile) {
    this.$scope = $scope;
    this.profile = profile;
  }
  $onInit() {
    this.$scope.memberinfo = this.profile.data;
  };
}
UserSettingsController.$$ngIsClass = true;