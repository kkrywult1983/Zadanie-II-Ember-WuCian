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
  }
}
