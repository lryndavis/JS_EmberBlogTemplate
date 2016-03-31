import Ember from 'ember';

export default Ember.Component.extend({
  sortDefinition: ['date:desc'],
  sortedPosts: Ember.computed.sort('posts', 'sortDefinition'),
  isContentShowing: false,
  actions: {
    contentShow: function() {
      this.set('isContentShowing', true);
    },
    contentHide: function() {
      this.set('isContentShowing', false);
    }
  }
});
