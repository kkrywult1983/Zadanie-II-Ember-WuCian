import Model, { attr } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('string', { defaultValue: 'Unknown User' }) owner;
  @attr('string') title;
  @attr('string') body;
  @attr('boolean', { defaultValue: false }) isDeleted;
}
