import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },
    updateComment(comment) {
      var params = {
        user: this.get('user'),
        date: this.get('date'),
        commentary: this.get('commentary'),
        avatar: this.get('avatar'),
        post: this.get('post')
      };
      this.set('updateCommentForm', false);
      this.sendAction('updateComment', comment, params);
    }
  }
});
