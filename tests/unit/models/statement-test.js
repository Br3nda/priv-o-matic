import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('statement', {
  // Specify the other units that are required for this test.
  needs: ['model:step']
});

test('it exists', function(assert) {
  let model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
