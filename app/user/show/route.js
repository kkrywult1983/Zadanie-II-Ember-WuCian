import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class UserShowRoute extends Route {
  @service store;

  async model(params) {
    const user = await this.store.findRecord('user', params.id);
    return user;
  }
}
