// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    songQueue = [];

  },

  playFirst: function(){
    this.models[0].play();
    // this.trigger('play', this);
  },


});