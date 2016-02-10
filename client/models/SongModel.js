// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event on an instance of a SongModel will also trigger that event on all collections that SongModel instance belongs to.
    // Why do we need to pass along the keyword this when we trigger the 'play' event?
    // this.trigger('playFirst', this);
    this.trigger('play', this);
  },

  enqueue: function(){
    // songQueue.push();
    // console.log("songQueue", songQueue);
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    songQueue.pop();
    this.trigger('dequeue', this);
  },

  ended: function(){
    // alert('song is over');
    this.trigger('ended', this);
  }

});