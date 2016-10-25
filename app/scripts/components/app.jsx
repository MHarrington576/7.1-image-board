// 3rd Party
var React = require('react');

// Local imports
var ImageBoardCollection = require('../models/images.js').ImageCollection;
var FormComponent = require('./form.jsx').FormComponent;
var ListingComponent = require('./listing.jsx').ListingComponent;

var AppComponent = React.createClass({
  getInitialState: function(){
    var self = this;
    var imageBoard = new ImageCollection();
    var imageModel = new Image();

    imageBoard.fetch().then(function(){
      self.setState({collection: imageBoard});
    });

    return {
      imageToEdit: imageModel,
      collection: imageBoard,
      showForm: false
    };
    // Fetch the data from the sevrer and, when you're done, take that react
    // component and call setState and set a collection to the image board.
  },
  addImage: function(imageModel){
    this.state.collection.create(imageModel);
    this.setState({collection: this.state.collection});
    // this.forceUpdate();
  },
  handleToggleForm: function(e){
    e.preventDefault();

    var showForm = !this.state.showForm;
    this.setState({showForm: showForm});
  },
  editImage: function(image){
    this.setState({imageToEdit: image});
  },
  render: function(){
    var self = this;

    var imageList = this.state.collection.map(function(image){
      return (
        <ListingComponent
          key={image.get("_id")}
          model={image}
          editImage={self.editImage}
        />
      );
    });

    return (
      <div>
        <header className="container-fluid main-header">
          <a className="add-image" href="#" onClick={this.handleToggleForm}><i className="glyphicon glyphicon-plus"></i></a>
        </header>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {this.state.showForm ? <FormComponent model={this.state.imageToEdit} addImage={this.addImage}/> : null}
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




    return {
      collection: imageBoard,
      testingState: 'Hey, this is cool!'
    };
  },
  render: function(){
    var imageList = this.state.collection.map(function(image){
    //  return <ListingComponent key={image.} model={image} />
    });

    return (
      <div>
        <header className="container-fluid main-header">
          <a className="add-image" href="#"><i className="glyphicon glyphicon-plus"></i></a>
        </header>

        <h1>{this.state.testingState}</h1>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <FormComponent />
            </div>
          </div>

          <div className="row">
            <ListingComponent />
          </div>

        </div>
      </div>
    );
  }
});

module.exports = {
  AppComponent: AppComponent
}
