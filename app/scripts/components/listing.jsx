var React = require('react');

var ListingComponent = React.createClass({
  render: function(){
    var imageSrc = this.props.model.get('imageUrl');
    var imageCaption = this.props.model.get('caption');

    return (
      <div className="col-sm-6 col-sm-offset-3">
        <div className="thumbnail">
          <img src="imageSrc" alt="imageCaption" />
          <div className="caption">
            <p>Image Description</p>
            <p><a href="#" className="btn btn-primary" role="button">Edit</a> <a href="#" className="btn btn-default" role="button">Remove</a></p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = {
  ListingComponent: ListingComponent
}
