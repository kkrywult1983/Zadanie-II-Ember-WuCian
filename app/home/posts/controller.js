import Controller from '@ember/controller';
import moment from 'moment';

export default class HomePostsController extends Controller {
  queryParams = ['dateFrom', 'dateTo'];

  get shouldBeFilteredByDate() {
    return Boolean(this.startDate && this.endDate);
  }

  get startDate() {
    if (!this.dateFrom) {
      return null;
    }
    return moment(this.dateFrom).startOf('day');
  }

  get endDate() {
    if (!this.dateTo) {
      return null;
    }
    return moment(this.dateTo).endOf('day');
  }

  get filteredPosts() {
    const posts = this.model;
    if (this.shouldBeFilteredByDate) {
      return posts.filter((post) => {
        return moment(post.createdAt).isBetween(
          this.startDate,
          this.endDate,
          undefined,
          '[]'
        );
      });
    }

    return posts;
  }
}
