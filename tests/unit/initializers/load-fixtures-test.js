import Ember from 'ember';
import { module, test } from 'qunit';
import { initialize } from '../../../initializers/load-fixtures';

let container; let application;

module('Unit | Initializer | load fixtures', {
  beforeEach() {
    Ember.run(() => {
      application = Ember.Application.create();
      container = application.__container__;
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', (assert) => {
  // initialize(container, application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
