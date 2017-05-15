export default function LoginController($scope, UserService, toastr, $location, $window) {
  $scope.user = {email: '',password: ''};
  $scope.loginS = () => {UserService.login($scope.user)};
  $scope.google = () => {$window.open('/auth/google', '_self')};
}
