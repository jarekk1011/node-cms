// export default class ChatNewController {
//     constructor($scope, $http, $state, API_ENDPOINT, RestService, users, $q, $timeout) {
//         this.$scope = $scope;
//         this.$http = $http;
//         this.RestService = RestService;
//         this.users = users.data;
//     }

//     $onInit() {
//         this.$scope.users = this.users;
//         console.log(this.$scope);
//     }
//     // querySearch(query) {
//     //     console.log(query);
//     // }
// }
// ChatNewController.$$ngIsClass = true;
export default function ChatNewController(users) {

    var self = this;
    self.querySearch = querySearch;
    self.allContacts = users.data;
    self.contacts = [];
    self.filterSelected = true;

    function querySearch(query) {
        var results = query ?
            self.allContacts.filter(createFilterFor(query)) : [];
        return results;
    }

    function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(contact) {
            let name = contact.name.toLowerCase();
            return (name.indexOf(lowercaseQuery) != -1);
        };
    }

    // function loadContacts() {
    //     return users.data.map(function (c, index) {
    //         console.log(c);
    //         // var cParts = c.split(' ');
    //         var contact = {
    //             name: c,
    //             email: cParts[0][0].toLowerCase() + '.' + cParts[1].toLowerCase(),
    //             image: 'http://lorempixel.com/50/50/people?' + index
    //         };
    //         contact._lowername = contact.name.toLowerCase();
    //         return contact;
    //     });
    // }
}
