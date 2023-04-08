import { Fragment } from "react";
import Nav from "./Nav";

function App(props) {
  if (props.attendees === undefined) {
    return null;
  }
  return (
    <Fragment>
    <Nav />
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Conference</th>
          </tr>
        </thead>
        <tbody>
          {/* for (let attendee of props.attendees) {
            <tr key={attendee.href}>
              <td>{ attendee.name }</td>
              <td>{ attendee.conference }</td>
            </tr>
          } */}
          {props.attendees.map(attendee => {
            return (
              <tr key={attendee.href}>
                <td>{ attendee.name }</td>
                <td>{ attendee.conference }</td>
              </tr>
            )
          })}
        </tbody>
      </table>
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
