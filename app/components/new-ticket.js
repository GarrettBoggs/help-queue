import Ember from 'ember';

export default Ember.Component.extend({
  allStepsTaken: false,
  gotPairHelp: false,
  spentTime: false,
  helpSent: false,

  currentTime: Ember.computed(function() {
    return moment().format();
  }),

  actions: {
    saveTicket() {
      if(this.get('name') && this.get('content')){
        this.set('helpSent', true);

      var params = {
        name: this.get('name'),
        location: this.get('location'),
        content: this.get('content'),
        time: this.get('currentTime')
      };
      this.set('helpSent', true);
      this.sendAction('saveTicket', params);
 
    },

    setStepsTaken(){
      this.set('allStepsTaken', true);
    },
    setPairHelp(){
      this.set('gotPairHelp', true);
    },
    setSpentTime(){
      this.set('spentTime', true);
    }
  }
});
