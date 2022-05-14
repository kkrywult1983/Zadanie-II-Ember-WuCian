import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { storageFor } from 'ember-local-storage';
import { inject as service } from '@ember/service';

export default class RegisterRoute extends Route {
  @storageFor('logged-as') loggedAs;
  @service router;
  @service store;

  beforeModel() {
    const userId = this.loggedAs.get('id');
    if (userId) {
      this.router.transitionTo('home');
      return;
    }
  }

  model() {
    return this.store.createRecord('user');
  }
}
