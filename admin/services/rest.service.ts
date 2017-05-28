
export default class restService {
  constructor($http, API_ENDPOINT) {
    this.$http = $http;
    this.API_ENDPOINT = API_ENDPOINT;
  }

  // POSTS
  postListAll() {
    return this.$http.get(`${this.API_ENDPOINT.url}/post`);
  }
  postCreate(data) {
    return this.$http.post(`${this.API_ENDPOINT.url}/post`, data);
  }
  postGet(ID) {
    return this.$http.get(`${this.API_ENDPOINT.url}/post/${ID}`);
  }
  postUpdate(ID, data) {
    return this.$http.put(`${this.API_ENDPOINT.url}/post/${ID}`, data);
  }
  postDelete(slug) {
    return this.$http.delete(`${this.API_ENDPOINT.url}/post/${ID}`);
  }
  // USERS
  CreateUser(user) {
    return this.$http.post(`${this.API_ENDPOINT.url}/signup`, user);
  }
  profile() {
    return this.$http.get(`${this.API_ENDPOINT.url}/auth`);
  }
  usersListAll() {
    return this.$http.get(`${this.API_ENDPOINT.url}/listusers`);
  }
  UpdateUser() {

  }
  DeleteUser() {

  }
  // CHAT
  getConversations() {
    return this.$http.get(`${this.API_ENDPOINT.url}/conversations`);
  }
  getConversation(ID){
    return this.$http.get(`${this.API_ENDPOINT.url}/chat/${ID}`);
  }
  // Categories
  getCategory(ID) {
    return this.$http.get(`${this.API_ENDPOINT.url}/category/${ID}`);
  }
  addCategory(data) {
    return this.$http.post(`${this.API_ENDPOINT.url}/category`, data);
  }
  updateCategory(ID, data) {
    return this.$http.put(`${this.API_ENDPOINT.url}/category/${ID}`, data);
  }
  listCategory() {
    return this.$http.get(`${this.API_ENDPOINT.url}/category-list`);
  }
  deleteCategory(ID) {
    return this.$http.delete(`${this.API_ENDPOINT.url}/category/${ID}`);
  }
  // Tags
  getTag(ID) {
    return this.$http.get(`${this.API_ENDPOINT.url}/tag/${ID}`);
  }
  addTag(data) {
    return this.$http.post(`${this.API_ENDPOINT.url}/tag`, data);
  }
  updateTag(ID, data) {
    return this.$http.put(`${this.API_ENDPOINT.url}/tag/${ID}`, data);
  }
  listTags() {
    return this.$http.get(`${this.API_ENDPOINT.url}/tag-list`);
  }
  deleteTag(ID) {
     return this.$http.delete(`${this.API_ENDPOINT.url}/tag/${ID}`);
  }
}
restService.$$ngIsClass = true;