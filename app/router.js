import EmberRouter from '@ember/routing/router';
import config from 'zadanie-ii-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' }, function () {
    this.route('posts');

    this.route('post', function () {
      this.route('show', { path: '/:id' });
    });
    this.route('users');

    this.route('user', function () {
      this.route('show', { path: '/:id' });
    });
    this.route('settings');
  });
});
