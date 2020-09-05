import React from 'react';
import logo from './logo-2.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';
//import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
//import { momentLocalizer} from 'react-big-calendar';
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
//const localizer = momentLocalizer(moment);

class App extends React.Component{

  constructor() {
    super();
    this.state = {
      people: [],
      cal_events: []
    };
  }

  componentDidMount() {
    fetch("https://demo2523910.mockable.io/userdata/api/members")
      .then(members => members.json())
      .then(data => {
        let appointments = data.members;

        for (let i = 0; i < appointments.length; i++) {
          appointments[i].start =    moment.utc(appointments[i].start).toDate();
          appointments[i].end = moment.utc(appointments[i].end).toDate();
          
        }
        this.setState({
          cal_events : appointments,
          people: data.members
        })
      });
  };
  
  

  render(){

    //const {cal_events} = this.state; 

    // const viewCalendar = () =>{
    //   return(
    //     <div style={{ height: 700 }}>
    //       <Calendar
    //         localizer = {localizer}
    //         events={cal_events}
    //         step={30}
    //         defaultView='week'
    //         views={['month','week','day']}
    //         defaultDate={new Date()}
    //       />
    //     </div>
    //   );
    // }

  
    return(
      <div className="app">
        <div className="header">
          <div className="img-container">
            <img src={logo} alt="logo" />
          </div>
          <div className="title">
            <h1>Hiring Assignment</h1>
          </div>
        </div>
        <h1>User Data fetched from Mock Api listed Below</h1>
        
        <div className="container">
        
          <Table striped bordered hover variant>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
            {this.state.people.map(members =>(
                <tr>
                  <td>{members.id}</td>
                  <td className="username">
                      {members.real_name} 
                  </td>
                  <td>{members.tz}</td>
                </tr>
            ))}
            </tbody>
          </Table>
          
        </div>
      </div>
    );
  }
}

export default App;
