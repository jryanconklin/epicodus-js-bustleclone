import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(article) {
      this.sendAction('destroyArticle', article);
    },
    update(article, params) {
      this.sendAction('update', article, params);
    }
  }
});
