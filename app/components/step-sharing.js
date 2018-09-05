import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addParty () {
      const parties = this.get('model.statement.sharingParties');
      parties.pushObject(Ember.A({}));
    }
  },
});
