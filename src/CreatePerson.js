import React from 'react';

export class CreatePerson extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      newName: ''
    };
  }

  handleChange(ev) {
    this.setState({newName: ev.target.value});
  }

  handleSubmit(ev) {
    this.props.addPerson(this.state.newName);
    this.setState({newName: ''});
  }
  
  render() {
    return (
      <div className="center-stuff">
        <h1>Create a Person</h1>
        <form>
          <input type='text' value={this.state.newName} onChange={this.handleChange}/>
          <button type='submit' onClick={this.handleSubmit}>Create</button>
        </form>
      </div>
    );
  }
};
