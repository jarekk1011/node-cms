export default class DashboardController {
  constructor(RestService, $scope, posts, users) {
    this.$scope = $scope;
    this.users = users;
    this.posts = posts;
    $scope.usersLength = users.data.length;
    $scope.postsLength = posts.data.length;
  }
}
DashboardController.$$ngIsClass = true;
DashboardController.$inject = ['RestService', '$scope', 'posts', 'users'];
