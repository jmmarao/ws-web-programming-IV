import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link to='/' style={{ padding: 11 }}>Home</Link>
          <Link to='/about' style={{ padding: 11 }}>About</Link>
          <Link to='/alunos' style={{ padding: 11 }}>Students</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/alunos' element={<Students />}>
            <Route index element={<StudentsList />} />
            <Route path=':code' element={<StudentInfo />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

function Students() {
  return (
    <div>
      <h2>Students</h2>
      <Outlet />
    </div>
  );
}

function StudentInfo() {
  const { code } = useParams();

  return (
    <div>
      <h3>{`Student Info ${code}`}</h3>
      <Link to='..'>Back</Link>
    </div>
  )
}

function StudentsList() {
  const [stateStudents, setStateStudents] = useState([]);
  useEffect(() => {
    // Function to fetch students list and save the state
    async function fetchStudents() {
      const response = await fetch("http://localhost:8000/alunos",
        {
          method: "GET"
        }).catch((err) => {
          console.log(`Error to GET students. $(err)`);
        });

      if (response.status > 400) {
        console.log(`Error on requests. Error code: ${response.status}`);
      }
      else {
        const responseJson = await response.json();
        setStateStudents(responseJson);
      }
    }
    fetchStudents();
  }
    , []);

  return (
    <ul>
      {stateStudents.map((student, index) => {
        return <li key={index}>
          <Link to={`/alunos/${index}`}><h3>{student.nome}</h3></Link>
        </li>
      })}
    </ul>
  )
}

function Home() {
  return (
    <div>
      <h2>Home Component!</h2>

    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About this app </h2>
      <p>
        App information...
      </p>
    </div>
  );
}

export default App;
