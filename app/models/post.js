import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  // timestamp: DS.attr('number'),
  image: DS.attr(),
  content: DS.attr(),
  tags: DS.attr(),
  comments: DS.hasMany('comment', { async: true })
});
