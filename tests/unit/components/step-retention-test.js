import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('step-retention', 'Unit | Component | step retention', {
  // Specify the other units that are required for this test
  needs: ['component:step-help']
});

test('it renders', function (assert) {
  assert.expect(2);

  // Creates the component instance
  const component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
