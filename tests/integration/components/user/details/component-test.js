/* eslint-disable ember/no-pause-test */
/* eslint-disable prettier/prettier */
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import {faker} from '@faker-js/faker'

module('Integration | Component | user/details', function (hooks) {
  setupRenderingTest(hooks);
  
  const user = {
    id: 1,
    username:faker.name.firstName(),// => "Katelynn",
    email:'kamilkrywult@gmial.com',
    password:'admin123',
    photoURL:faker.image.avatar(),
    
  }
  test('it renders', async function (assert) {
    // eslint-disable-next-line prettier/prettier
    
    this.set('user',user)
    await render(hbs`<User::Details @user ={{this.user}} />`);

await this.pauseTest() 

assert.dom('[data-test-id]').hasText(user.id.toString())
assert.dom('[data-test-username]').hasText(user.username)
assert.dom('[data-test-email]').hasText(user.email)
assert.dom('[data-test-password]').hasText(user.password)

 }) ;
});
