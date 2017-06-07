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
    this.RestService.listCategory().then((res) => {
      console.log(res);
      this.$scope.categories = res.data;
    });
    if (!!this.$rootScope.$stateParams.id) {
      ID = this.$rootScope.$stateParams.id;
      this.$scope.post_id = this.$rootScope.$stateParams.id;
    }

    if (!!ID) {
      this.RestService.postGet(ID).then((res) => {
        let post = res.data;
        this.$scope.post.title = post.title;
        this.$scope.post.category = post.category;
        this.$scope.post.content = post.content;
      });
    }
    this.thisID = ID;
  }
  update() {
    // console.log(this.$scope.post);
    this.RestService.postUpdate(this.thisID, {
      title: this.$scope.post.title,
      category: this.$scope.post.category,
      content: this.$scope.post.content,
    }).then((data) => { this.toastr.success(data.data.msg) });
  }
  create() {
    this.RestService.postCreate(this.$scope.post).then((data) => {this.toastr.success('New post created!')});
  }

}
PostController.$$ngIsClass = true;