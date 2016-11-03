// 3rd Party
var React = require('react');

// Local imports
var ImageCollection = require('../models/images.js').ImageCollection;
var Image = require('../models/images.js').Image;
var FormComponent = require('./form.jsx').FormComponent;
var ListingComponent = require('./listing.jsx').ListingComponent;


var AppComponent = React.createClass({
  getInitialState: function(){
    var self = this;
    var imageBoard = new ImageCollection();

    imageBoard.fetch().then(function(){
      self.setState({collection: imageBoard});
    });

    return {
      imageToEdit: false,
      collection: imageBoard,
      showForm: false
    };
  },
  addImage: function(imageModel){
    this.state.collection.create(imageModel);
    this.setState({collection: this.state.collection});
    // this.forceUpdate();
  },
  handleEdit: function(model){
    this.setState({showForm: true, imageToEdit: model});
  },
  handleToggleForm: function(e){
    e.preventDefault();

    var showForm = !this.state.showForm;
    this.setState({showForm: showForm});
  },
  editImage: function(model, data){
    model.set(data);
    model.save();

    this.setState({imageToEdit: false, showForm: false});
  },
  render: function(){
    var self = this;

    var imageList = this.state.collection.map(function(image){
      return (
        <ListingComponent
          key={image.get("_id")}
          model={image}
          handleEdit={self.handleEdit}
        />
      );
    });

    return (
      <div>
        <header className="container-fluid main-header">
          <h1>JavaScript Image Board</h1>
          <a className="add-image" href="#" onClick={this.handleToggleForm}>Add Image</a>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {this.state.showForm ? <FormComponent model={this.state.imageToEdit} addImage={this.addImage} editImage={this.editImage}/> : null}
            </div>
          </div>

          <div className="row">
            {imageList}
          </div>

        </div>
      </div>
    );
  }
});

module.exports = {
  AppComponent: AppComponent
};
