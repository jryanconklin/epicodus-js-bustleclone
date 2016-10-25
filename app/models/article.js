import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  body: DS.attr(),
  image: DS.attr(),
  date: DS.attr(),

  preview: Ember.computed('body', function() {
    var body = `${this.get('body')}`;
    var words = body.split(" ");
    if (words.length > 15) {
      var previewDisplay = words.slice(0,15).join(" ") + '...';
    } else {
      var previewDisplay = words.join(" ");
    }
    return previewDisplay;
  })
});
