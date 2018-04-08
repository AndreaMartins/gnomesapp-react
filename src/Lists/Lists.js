import React, {Component} from 'react';
import axios from 'axios';
// import axios from '../axios';

import { Link } from 'react-router-dom';
import './Lists.css';

class Lists extends Component {

//receive the list of gnomes
  state = {
    gnomes:[]
  }

//get all the list of gnomes

  componentDidMount () {
      axios.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json')
           .then(response => {
              this.setState({gnomes: response.data.Brastlewark});
              console.log(this.state.gnomes)
          });
  }


  gnomeSelectedHandler = (id) => {
    this.props.history.push('/' + id);
  }


  render () {
      const gnomes = this.state.gnomes.map(gnome => {
          return(
          <div key={gnome.id} className="containergnome" onClick={ () => this.gnomeSelectedHandler(gnome.id)} >
            <div className="containergnome__item">
              <figure className="containergnome__shape">
                <img src={gnome.thumbnail} className="containergnome__img"/>

                <figcaption className="containergnome__caption"> + details</figcaption>

              </figure>
            </div>
            <div>
              <p className="containergnome__font">{gnome.name}</p>
            </div>
          </div>
          )
      });

      return (
        <div>
          <nav className="navgnome">
            <div className="navgnome__container">
              <h1>
                Brastlewark!
              </h1>
              <div className="search">
                <input type="text" placeholder="  Search Gnome by age" />
              </div>
            </div>
          </nav>
          <div className="listcontainer">
            {gnomes}
          </div>
        </div>
      );
  }




}

export default Lists;



// Task to render all the gnomes, get the dat from the backend by the use of the service and to filter
