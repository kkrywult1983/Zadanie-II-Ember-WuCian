import Model, { attr, belongsTo } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('string') title;
  @attr('string') body;
  @attr('boolean', { defaultValue: false }) isDeleted;
  @belongsTo('user') owner;
}
