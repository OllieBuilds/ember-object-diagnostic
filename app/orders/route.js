import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
        {
        unitPrice: 0,
        quantity: 0,
        orderPrice: function(unit, qty) {
          return unit * qty;
        },
      }
    ];
  }
});
