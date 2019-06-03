import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {NavHeader} from './NavHeader';
import {PeopleList} from './PeopleList';
import {Home} from './Home';
import {CreatePerson} from './CreatePerson';
import {getPeopleInitial} from './functionality/getPeopleInitial';
import {stubbornOldMan} from './functionality/stubbornOldMan';


// ITs the glue. IT knows all, IT sees all. ITs Main!
export default class Main extends React.Component {
  constructor() {
    super();
    this.removePerson = this.removePerson.bind(this);
    this.addPerson = this.addPerson.bind(this);
    this.state = {
      numberPeople: 0,
      people: null
    };
  }

  // Only functions through CreatePerson. Gets called from there
  addPerson(name) {
    const people = [{name: name}, ...this.state.people];
    this.setState({people, numberPeople: people.length});
  }

  // Removes a person from Peoplelist - Except for the stubbornOldMan
  removePerson(ev) {
    if (ev.target.value === 'Obi-Wan Kenobi') {
      stubbornOldMan();
      return;
    }
    const nameDeleted = this.state.people.filter((item) => {
      return item.name !== ev.target.value;});
    this.setState({people: nameDeleted, numberPeople: nameDeleted.length});
  }

  //Grabs the initial list of people, thats it.
  async componentDidMount() {
    if (!this.state.initialSet) {
      const people = await getPeopleInitial();
      this.setState({people, numberPeople: people.length});
    }
  }
  
  render() {
    return (
      <div>
	<h1>Star Wars CRD (no U)</h1>
	<div id="content-region">
	  <Router>
	    <NavHeader numberPeople={this.state.numberPeople}/>
	    <Route exact path='/' component={Home} />
            <Route path='/people'
                   render={()=>
                           <PeopleList removePerson={this.removePerson}
                                       people={this.state.people}/>} />
            <Route path='/create'
                   render={()=> 
                           <CreatePerson addPerson={this.addPerson}/>} />
	  </Router>
	</div>
      </div>
    );
  }
}
