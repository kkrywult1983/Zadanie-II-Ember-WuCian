import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UserShowRoute extends Route {
  @service store;

  // destrukturyzacja parametrów
  async model({ id }) {
    return await this.store.findRecord('user', id);
  }
}
