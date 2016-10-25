// 3rd Party
var React = require('react');

// Local imports
var ImageBoardCollection = require('../models/images.js').ImageCollection;
var FormComponent = require('./form.jsx').FormComponent;
var ListingComponent = require('./listing.jsx').ListingComponent;

var AppComponent = React.createClass({
  getInitialState: function(){
    var imageBoard = new ImageBoardCollection();

    imageBoard.fetch().then(function(){
      self.setState({collection: imageBoard})
    });
    // Fetch the data from the sevrer and, when you're done, take that react
    // component and call setState and set a collection to the image board.

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
