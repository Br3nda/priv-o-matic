import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showModal() {
      this.set('showModal', true);
    },
  }
});
