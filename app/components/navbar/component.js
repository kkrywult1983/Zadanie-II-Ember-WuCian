import Component from '@glimmer/component';
import { action } from '@ember/object';
import { storageFor } from 'ember-local-storage';

export default class NavbarComponent extends Component {
  @storageFor('logged-as') loggedAs;
  @action onLogout() {
    console.log('logout');
    this.loggedAs.set('id', null);
    window.location.href = '/login';
  }
}
