import Route from '@ember/routing/route';

export default class PostsRoute extends Route {
  model() {
    const posts = [
      {
        id: 1,
        ownerId: 1,
        title: 'Tytuł testowy 1',
        body: 'Zawartość testowa 1',
        likesCount: 0,
        isDeleted: false,
        likedByUserIds: [],
        dislikedByUserIds: [],
      },
      {
        id: 2,
        ownerId: 1,
        title: 'Tytuł testowy 2',
        body: 'Zawartość testowa 2',
        likesCount: 0,
        isDeleted: false,
        likedByUserIds: [],
        dislikedByUserIds: [],
      },
      {
        id: 3,
        ownerId: 1,
        title: 'Tytuł testowy 3',
        body: 'Zawartość testowa 3',
        likesCount: 0,
        isDeleted: false,
        likedByUserIds: [],
        dislikedByUserIds: [],
      },
    ];
    return posts;
  }
}
