import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteComment(comment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('destroyComment', comment);
      }
    },
    saveComment(params) {
      this.sendAction('saveComment', params);
    },
    updateComment(params, comment) {
      this.sendAction('updateComment', params, comment);
    }
  }
});
