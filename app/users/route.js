import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UsersRoute extends Route {
  @service store;

  model() {
    const users = this.store.findAll('user');
    return users;
  }
}
