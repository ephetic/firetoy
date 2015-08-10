var React = require('react');
var ToySectionStore = require('../stores/ToySectionStore');

var ToySection = React.createClass({
  updateFromStore: function(){
    var text = ToySectionStore.get(this.props.path);
    console.log('updateFromStore', this.props.path, text);
    this.setState({ displayedText: text });
  },
  componentDidMount: function(){
    ToySectionStore.init(this.props.path)
    ToySectionStore.on('change', this.updateFromStore);
  },
  componentWillUnmount: function(){
    ToySectionStore.removeListener('change', function(){
      console.log('ToySection removeListener done.');
    })
  },
  getInitialState: function(){
    var text = ToySectionStore.get(this.props.path);
    return { internalText: '', displayedText: text }
  },
  render: function() {
    return (
      <div className="inout">
        <div>{ this.state.displayedText }</div>
        <input type="text" value={this.state.internalText} onKeyPress={this.key} onChange={this.change}/>
      </div>
    );
  },
  change: function(element){
    this.setState({ internalText: element.target.value });
  },
  key: function(event){
    var code = event.which;
    if(code === 13) this.submit();
  },
  submit: function(){
    var text = this.state.internalText;
    ToySectionStore.set(this.props.path, text);
    this.setState({ internalText: '' });
  }
});

module.exports = ToySection;
