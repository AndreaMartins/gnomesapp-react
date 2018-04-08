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


  render () {
      const gnomes = this.state.gnomes.map(gnome => {
          return(
          <div key={gnome.id} className="containergnome">
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
          <div className="listcontainer">>
            {gnomes}
          </div>
        </div>
      );
  }

  // render () {
  //   gnomes = this.state.gnomes.map (gnome => {
  //     return (
  //       <Link to= {'/' + 'gnome.id'}>
  //
  //
  //
  //
  //
  //     </Link>)
  //   })
  // }


}

export default Lists;



// Task to render all the gnomes, get the dat from the backend by the use of the service and to filter

// providers: [AppService]
// })
//
// export class ListsComponent implements OnInit {
//
// data: any = [];
// filteredName = '';
// itemName: any;
//
// constructor(private appService: AppService) { }
//
// ngOnInit() {
//   this.getContacts();
// }
//
// getContacts() {
//   this.appService.getData().subscribe(
//     (data: any) => {
//       this.data = data.Brastlewark;
//     },
//     (error) => console.log(error),
//   );
// }
//
// }

// @Injectable()
// export class AppService {
//
//   private apiUrl = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
//
//   constructor(private http: Http) { }
//
//   getData() {
//     return this.http.get(this.apiUrl)
//       .map(
//         (res: Response) => {
//           const data = res.json();
//           return data;
//         }
//       );
//   }
//
// }
