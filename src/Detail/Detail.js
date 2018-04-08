import React, {Component} from 'react';
import axios from 'axios';

class Detail extends Component {

//receive the list of gnomes
  state = {
    loadedGnome:null
  }

//get all the list of gnomes

  // componentDidMount () {
  //
  //   if (this.props.match.params.id) {
  //     if( !this.state.loadedGnome || (this.state.loadedGnome))
  //
  //   }
  //
  // }


}

export default Detail;


// Get all the contacts from the backend,
// Compare the id from the route with all the ids of the other contacts .
// Find the contact that match and renders it .


// providers: [AppService]
// })
//
// export class DetailComponent implements OnInit {
//
// data: any;
// id: number;
// contact: any = {
//   age: '',
//   friends: '',
//   hair_color: '',
//   height: '',
//   id: '',
//   name: '',
//   professions: '',
//   thumbnail: '',
//   weight: ''
// }
//
// constructor(private appService: AppService,
//   private route: ActivatedRoute) {
// }
//
// ngOnInit() {
//   this.getContacts();
// }
//
// getParams() {
//   this.route.params
//     .subscribe(
//       (params: Params) => {
//         this.id = +params['id'];
//         this.contact = this.getContact(this.id);
//         console.log(this.contact);
//       }
//     );
// }
//
// getContacts() {
//   this.appService.getData().subscribe(
//     (data: any) => {
//       this.data = data.Brastlewark;
//       this.getParams();
//     },
//     (error) => console.log(error),
//   );
// }
//
// getContact(index: number) {
//   return this.data[index];
// }
//
//
// }
