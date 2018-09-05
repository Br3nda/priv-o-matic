import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addParty () {
      let parties = this.get('model.statement.sharingParties');
      parties.pushObject(Ember.A({}));
    }
  },
});
