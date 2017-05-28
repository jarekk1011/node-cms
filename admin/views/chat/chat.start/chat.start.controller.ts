export default class ChatStartController {
    constructor($scope, $http, $state, API_ENDPOINT, RestService) {
        this.$scope = $scope;
        this.$http = $http;
        this.RestService = RestService;
    }
    $onInit() {

    }
}
ChatStartController.$$ngIsClass = true;