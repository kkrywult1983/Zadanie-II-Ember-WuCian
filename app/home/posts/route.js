import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostsRoute extends Route {
  @service store;

  model(params) {
    console.log(params);
    const posts = this.store.findAll('post');
    return posts;
  }
}
