import "./App.css";
import Navbar from './components/Navbar';
import Greeting from './components/Greeting';
import StudentCard from './components/StudentCard';
import Badge from './components/Badge';
import StudentList from './components/StudentList';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Greeting firstName="Cherian" />
      <Greeting firstName="Nasim" />
      <Greeting firstName="Mohamed" />
      
      <StudentList>
        <StudentCard name="Indra" week={7} info={{ city: 'BLN', course: "WEB" }} />
        <StudentCard name="Tobias" week={7} info={{ city: 'BLN', course: "WEB" }} />
      </StudentList>

      <Badge badgeText="important" />

      <ReactPlayer url="https://www.youtube.com/watch?v=8pDqJVdNa44" playing controls volume="0.5" />

      {/* Challenge: */}
      {/* Make the Button component dynamic so that you can pass the URL as props and use it with different URLs */}
    </div>
  );
}

export default App;
