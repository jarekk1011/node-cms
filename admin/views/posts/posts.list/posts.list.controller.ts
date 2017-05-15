export default class PostListController {
  constructor (posts, $scope) {
    $scope.postsList = posts.data;
  }
}
PostListController.$$ngIsClass = true;
