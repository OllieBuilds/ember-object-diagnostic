import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    [
      {
        orders: [],
        addToCart: function(order) {
          this.orders.push(order);
        },
        // Should this be a reflexive relationship?
        totalPrice:
      }
    ];
  }
});
