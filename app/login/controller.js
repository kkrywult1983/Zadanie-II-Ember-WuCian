import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { storageFor } from 'ember-local-storage';

export default class LoginController extends Controller {
  @storageFor('logged-as') loggedAs;
  @service store;
  @tracked loginValue;
  @tracked passwordValue;

  @action
  onLoginChange(event) {
    this.loginValue = event.target.value;
  }

  @action
  onPasswordChange(event) {
    this.passwordValue = event.target.value;
  }

  @action
  async onSubmit(event) {
    event.preventDefault();
    const users = await this.store.query('user', {
      filter: { username: this.loginValue, password: this.passwordValue },
    });
    const isUserExist = Boolean(users.length);
    if (isUserExist) {
      const user = users.firstObject;
      this.loggedAs.set('id', user.id);
      window.location.href = '/';
    }
  }
}
