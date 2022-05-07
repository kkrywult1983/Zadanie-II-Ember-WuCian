import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostShowRoute extends Route {
  @service store;

  async model(params) {
    const post = await this.store.findRecord('post', params.id);
    return post;
  }
}
