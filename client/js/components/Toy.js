var React = require('react');
var ToySection = require('./ToySection')

var Toy = React.createClass({
  render: function () {
    return (
      <div className="toy">
        <ToySection path="toyText" />
        <ToySection path="toyTextTwo" />
      </div>
    );
  }
});

module.exports = Toy;





