var React = require('react');

var FormComponent = React.createClass({
  getInitialState: function(){
    return {
      url: '',
      caption: ''
    };
  },
  componentWillReceiveProps: function(nextProps){
    if(nextProps.model){
      this.setState({
        url: nextProps.model.get('url'),
        caption: nextProps.model.get('caption')
      });
    }
  },
  handleUrlChange: function(e){
    var urlInputValue = e.target.value;
    this.setState({url: urlInputValue});
  },
  handleCaptionChange: function(e){
    var captionValue = e.target.value;
    this.setState({caption: captionValue});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var imageData = {url: this.state.url, caption: this.state.caption};

    if(this.props.model){
      this.props.editImage(this.props.model, imageData);
    }else{
      this.props.addImage(imageData);
    }

    this.setState({url: '', caption: ''});
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit} className="well" action="index.html" method="post">
        <div className="form-group">
          <label htmlFor="url">Image URL</label>
          <input onChange={this.handleUrlChange} type="text" className="form-control" id="url" value={this.state.url} placeholder="Image URL" />
        </div>
        <div className="form-group">
          <label htmlFor="caption">Image Caption</label>
          <textarea onChange={this.handleCaptionChange} className="form-control" id="caption" value={this.state.caption} rows="3" />
        </div>
        <button type="submit" className="btn btn-default">{this.props.model ? 'Edit' : 'Add'} Image</button>
      </form>
    );
  }
});


module.exports = {
  FormComponent: FormComponent
};
