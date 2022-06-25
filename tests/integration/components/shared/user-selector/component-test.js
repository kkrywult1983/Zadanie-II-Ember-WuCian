import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | shared/user-selector', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function () {
    this.set('selectedAuthors', [{ username: 'Kamil' }]);
    this.set('options', [{ username: 'Jacek' }, { username: 'Kamil' }]);
    this.set('chooseAuthors', () => {});
  });

  test('it renders', async function (assert) {
    this.set('selectedAuthors', [{ username: 'Kamil' }]);
    this.set('options', [{ username: 'Jacek' }, { username: 'Kamil' }]);
    this.set('chooseAuthors', () => {});

    await render(hbs`
      <Shared::UserSelector
        @multipleType={{true}}
        @selected={{this.selectedAuthors}}
        @options={{this.options}}
        @onChange={{this.chooseAuthors}}
        />
    `);

    assert.dom('.ember-power-select-multiple-option').exists();
  });

  test('display initial user', async function (assert) {
    this.set('selectedAuthors', [{ username: 'Kamil' }]);
    this.set('options', [{ username: 'Jacek' }, { username: 'Kamil' }]);
    this.set('chooseAuthors', () => {});

    await render(hbs`
      <Shared::UserSelector
        @multipleType={{true}}
        @selected={{this.selectedAuthors}}
        @options={{this.options}}
        @onChange={{this.chooseAuthors}}
        />
    `);

    assert.dom('.ember-power-select-multiple-option').includesText('Kamil');
  });
});
