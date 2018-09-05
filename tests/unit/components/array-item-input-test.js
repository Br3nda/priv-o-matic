import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('array-item-input', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  const component = this.subject({
    index: 0,
    array: ['testing array-item-input']
  });

  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
