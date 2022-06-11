import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('string') title;
  @attr('string') body;
  @attr('boolean', { defaultValue: false }) isDeleted;
  @belongsTo('user', { autoSave: true }) owner;
  @hasMany('like') likes;
  @attr('date', { defaultValue: () => new Date() }) createdAt;

  get fullDate() {
    const date = new Date(this.createdAt);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const dateString = `${day}-${month}-${year}`;

    return dateString;
  }
}
