import Ember from 'ember';

export default Ember.Component.extend({
  currentTime: Ember.computed(function() {
    return moment().format('dddd');
  }),

  actions: {
    saveTicket() {
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        content: this.get('content'),
        time: this.get('currentTime')
      };
      this.sendAction('saveTicket', params);
    }
  }
});
