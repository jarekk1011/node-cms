export default function LoginController($scope, UserService, $window) {
  $scope.user = {email: '', password: ''};
  $scope.loginS = () => { UserService.login($scope.user) };
  $scope.google = () => { $window.open('http://0.0.0.0:3000/auth/google', '_self') };
}
