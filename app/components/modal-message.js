import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    closeModal() {
      this.set('showModal', false);
    }
  }
});
