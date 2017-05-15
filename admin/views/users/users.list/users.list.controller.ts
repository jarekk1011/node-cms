
export default class UsersListController {
  constructor(RestService, $scope, $window) {

    RestService.usersListAll().then(function(data) {
      $scope.UserList = data.data;
      // console.log(data.data);
    });

  }

}
UsersListController.$$ngIsClass = true;