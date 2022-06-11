import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import moment from 'moment';

export default class HomePostsController extends Controller {
  @tracked dateFrom;
  @tracked dateTo;

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

  get minDate() {
    return this.startDate?.toDate();
  }

  get maxDate() {
    return this.endDate?.toDate();
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

  @action
  onStartDateChange(date) {
    this.dateFrom = moment(date).format('YYYY-MM-DD');
  }

  @action
  onEndDateChange(date) {
    this.dateTo = moment(date).format('YYYY-MM-DD');
  }

  @action
  clearFilters() {
    this.dateFrom = null;
    this.dateTo = null;
  }
}
