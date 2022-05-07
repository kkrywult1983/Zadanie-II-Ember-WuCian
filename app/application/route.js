import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  async beforeModel() {
    window.localStorage.clear();

    const user1 = {
      username: 'admin',
      password: 'admin123',
      email: 'admin@admin.com',
      isAdmin: true,
    };
    const user2 = {
      username: 'user',
      password: 'user123',
      email: 'user@user.com',
    };

    const user1Model = this.store.createRecord('user', user1);
    const user2Model = this.store.createRecord('user', user2);
    await user1Model.save();
    await user2Model.save();

    const post1 = {
      title: 'Testowy 1',
      body: 'Zawartość testowa 1',
      owner: user1Model,
    };
    const post2 = {
      title: 'Testowy 2',
      body: 'Zawartość testowa 2',
      owner: user1Model,
    };
    const post3 = {
      title: 'Testowy 3',
      body: 'Zawartość testowa 3',
      owner: user2Model,
    };

    const post1Model = this.store.createRecord('post', post1);
    const post2Model = this.store.createRecord('post', post2);
    const post3Model = this.store.createRecord('post', post3);

    await post1Model.save();
    await post2Model.save();
    await post3Model.save();
  }
}
