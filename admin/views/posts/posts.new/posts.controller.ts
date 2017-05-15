import 'quill';
import 'ng-quill';

export default class PostController {
  constructor($scope, $rootScope, RestService, toastr, $window) {
    this.RestService = RestService;
    this.$rootScope = $rootScope;
    this.$scope = $scope;
    this.toastr = toastr;
  }
  $onInit() {
    let ID;
    // console.log($rootScope.$stateParams.id);
    if (!!this.$rootScope.$stateParams.id) {
      ID = this.$rootScope.$stateParams.id;
      this.$scope.post_id = this.$rootScope.$stateParams.id;
    }

    if (!!ID) {
      this.RestService.postGet(ID).then((data) => {
        this.$scope.post.title = data.data.title;
        this.$scope.post.content = data.data.content;
      });
    }
    this.thisID = ID;
    // console.log($rootScope.$stateParams.postSlug);
  }

  update() {
    this.RestService.postUpdate(this.thisID, {
      title: this.$scope.post.title,
      content: this.$scope.post.content,
    }).then((data) => { this.toastr.success(data.data.msg) });
  }
  create() {
    this.RestService.postCreate(this.$scope.post).then((data) => {this.toastr.success('New post created!')});
  }

}
PostController.$$ngIsClass = true;