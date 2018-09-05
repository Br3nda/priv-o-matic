import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('step', params.step_id);
  }
});
