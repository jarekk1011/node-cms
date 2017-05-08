
export default function RegisterController($scope, RestService, toastr, $state) {
  // console.log('ddd');

  $scope.signup = function() {

    RestService.CreateUser($scope.user).then(
      function success(result) {
        // console.log(result.data);
        let array = result.data;
        // for (let i = 0; i < array.length; i++) {
          // console.log(array);
          if(array[0].success == true) {
            toastr.success(array[0].msg);
            $state.go('login');

          } else {
            toastr.error(array[0].msg);
          }
        // }
      },
      function error() {
        toastr.error('Error!');
      }
    );
  };
}
