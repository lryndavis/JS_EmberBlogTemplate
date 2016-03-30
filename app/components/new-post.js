import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    savePost() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        date: this.get('date'),
        image: this.get('image'),
        content: this.get('content'),
        tags: this.get('tags')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
