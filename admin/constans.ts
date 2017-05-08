export const AUTH_EVENTS = {
  loginSuccess : 'auth-login-success',
	loginFailed : 'auth-login-failed',
	logoutSuccess : 'auth-logout-success',
	sessionTimeout : 'auth-session-timeout',
	notAuthenticated : 'auth-not-authenticated',
	notAuthorized : 'auth-not-authorized'
};
export const API_ENDPOINT = {
  // url: 'https://app.jarekk1011.usermd.net/api/admin',
  // server: 'https://app.jarekk1011.usermd.net/'
	url: 'http://localhost:3000/api/admin',
  server: 'http://localhost:3000'
};
export const USER_ROLES = {
  all : '*',
	admin : 'admin',
	editor : 'editor',
	member : 'Member'
}
