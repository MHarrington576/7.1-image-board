var Backbone = require('backbone');

var Image = Backbone.Model.extend({
  defaults: {
    imageUrl: '',
    caption:''
  }
});

var ImageCollection = Backbone.Collection.extend({
  model: Image,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/image-board'
})

module.exports = {
  Image: Image,
  ImageCollection: ImageCollection
}
