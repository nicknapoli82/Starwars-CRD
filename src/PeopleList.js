import React from 'react';

export class PeopleList extends React.Component{
  render() {
    const {people} = this.props;
    return (
      <div className="center-stuff">
	<ol>
	  {
	    people ? people.map((person) => {
	      return <li key={person.name}>{person.name}
                       <button value={person.name} onClick={this.props.removePerson}>X</button>
                     </li>;
	    }) : <li>Nothing to see here?</li>
	  }
	</ol>
      </div>
    );
  }
};
