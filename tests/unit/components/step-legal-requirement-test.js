import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('step-legal-requirement', {
  // Specify the other units that are required for this test
  needs: ['component:radio-button', 'component:modal-message']
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  const component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
