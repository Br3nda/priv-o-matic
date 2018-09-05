import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addOptionalInfo () {
      const optional = this.get('model.statement.extraOptionalInfo');
      optional.pushObject(Ember.A({}));
    }
  },
});
