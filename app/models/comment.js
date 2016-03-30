import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  date: DS.attr(),
  commentary: DS.attr(),
  avatar: DS.attr(),
  post: DS.belongsTo('post', { async: true })
});
