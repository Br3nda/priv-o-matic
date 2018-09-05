import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';


moduleForComponent('step-statement', {
  // Specify the other units that are required for this test
  needs: [
    'view:statement',
    'component:step-help',
    'model:statement',
    'initializer:load-fixtures'
  ]
});

test('it renders', function(assert) {
  assert.expect(3);

  // Creates the component instance
  let component = this.subject();
  assert.equal(component._state, 'preRender');

  let Statement = Ember.Object.extend({
  });

  let statement = Statement.create({ id: 1 });
  component.set('model', statement);

  //the model was loaded
  assert.ok(component.get('model'), 'component has a model');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});