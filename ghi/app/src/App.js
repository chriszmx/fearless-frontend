import { Fragment } from "react";
import Nav from "./Nav";
import AttendeesList from "./AttendeesList";
import LocationForm from "./LocationForm";
import ConferenceForm from "./ConferenceForm";

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <Fragment>
    <Nav />
    <div className="container">
      <ConferenceForm />
      {/* <LocationForm /> */}
      {/* <AttendeesList attendees={props.attendees} /> */}
    </div>
    </Fragment>
  );
}

export default App;







// function App(props) {
//   if (props.attendees === undefined) {
//     return null;
//   }
//   return (
//     <div>
//       Number of attendees: {props.attendees.length}
//     </div>
//   );
// }

// export default App;
