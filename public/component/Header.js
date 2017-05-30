import React from 'react';

export default class Header extends React.Component {

  textChanged(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <header title={this.props.title} />
        <input onChange={this.textChanged.bind(this)} />
      </div>
    );
  }
}