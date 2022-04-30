import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
  model() {
    const users = [
      {
        id: 1,
        username: 'admin',
        password: 'admin123',
        email: 'admin@admin.com',
        isDeleted: false,
        isAdmin: true,
      },
      {
        id: 2,
        username: 'user',
        password: 'user123',
        email: 'user@user.com',
        isDeleted: false,
        isAdmin: false,
      },
    ];
    return users;
  }
}
