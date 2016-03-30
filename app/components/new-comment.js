import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
      var params = {
        user: this.get('user'),
        date: this.get('date'),
        commentary: this.get('commentary'),
        avatar: this.get('avatar'),
        post: this.get('post')
      };
      this.set('addNewComment', false);
      this.sendAction('saveComment', params);
    }
  }
});
