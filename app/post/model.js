import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import moment from 'moment';
export default class PostModel extends Model {
  @attr('string') title;
  @attr('string') body;
  @attr('boolean', { defaultValue: false }) isDeleted;
  @belongsTo('user', { autoSave: true }) owner;
  @hasMany('like') likes;
  @attr('date', { defaultValue: () => moment() }) createdAt;

  get createdAtInMiliseconds() {
    return new Date(this.createdAt).getTime();
  }
}
