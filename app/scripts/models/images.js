var Backbone = require('backbone');

var Image = Backbone.Model.extend({
  defaults: {
    imageUrl: '',
    caption: ''
  },
  idAttribute: '_id'
});

var ImageCollection = Backbone.Collection.extend({
  model: Image,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/image-board-mdh'
});

module.exports = {
  Image: Image,
  ImageCollection: ImageCollection
}
