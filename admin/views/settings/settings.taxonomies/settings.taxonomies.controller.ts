export default class SettingsTaxonomiesController {
  constructor ($scope, $mdDialog, RestService, categories, tags) {
      function template(el) {
        //   console.log(el);
        return `<md-dialog class="" aria-label="Add ${el}">
                    <md-dialog-content>
                        <md-input-container md-no-float class="md-block">
                            <input ng-model="${el}.title"  placeholder="Title" ng-required="true">
                        </md-input-container>
                        <md-input-container md-no-float class="md-block">
                            <textarea rows="4" ng-model="${el}.description" placeholder="Description"></textarea>
                        </md-input-container>
                    </md-dialog-content>
                    <md-dialog-actions>
                        <md-button ng-click="closeDialog()" class="md-primary">
                            Cancel
                        </md-button>
                        <md-button ng-click="add${el}()" class="md-primary">
                            Create
                        </md-button>
                    </md-dialog-actions>
                </md-dialog>`
        }
        function DialogController($scope, $mdDialog, RestService) {
            // $scope.items = items;
            $scope.closeDialog = function() {
                $mdDialog.hide();
            }
            $scope.addcategory = function() {
                RestService.addCategory($scope.category).then(function(res) {
                    $mdDialog.hide();
                });
            }
            $scope.addtag = function() {
                RestService.addTag($scope.tag).then(function(res) {
                    $mdDialog.hide();
                });
            }
        }
        $scope.tagPrompt = function($event) {
            let parentEl = angular.element(document.body);
            let tag = 'tag';
            $mdDialog.show({
                parent: parentEl,
                targetEvent: $event,
                template: template(tag),
                locals: {
                    // items: $scope.items
                },
                controller: DialogController
            });
        };
        $scope.categoryPrompt = function($event) {
            let parentEl = angular.element(document.body);
            let tag = 'category';
            $mdDialog.show({
                parent: parentEl,
                targetEvent: $event,
                template: template(tag),
                locals: {
                    // items: $scope.items
                },
                controller: DialogController
            });
        };

    this.$scope = $scope;
    this.RestService = RestService;
    $scope.categories = categories.data;
    $scope.tags = tags.data;
  }
  deleteTag(id) {
    this.RestService.deleteTag(id).then(function(){
    });
  }
  deleteCategory(id) {
    this.RestService.deleteCategory(id).then(function(){
    });
  }

}
SettingsTaxonomiesController.$$ngIsClass = true;
