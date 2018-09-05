import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addOptionalInfo () {
      let optional = this.get('model.statement.extraOptionalInfo');
      optional.pushObject(Ember.A({}));
    }
  },
});
