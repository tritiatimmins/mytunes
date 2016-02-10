// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function () {
    if (this.models.length === 1) {
      this.trigger('playFirst', this);
    }
  }

  
});