import { useState } from "react";

function App() {
  const [subjectValue, setSubjectValue] = useState();
  const [date, setDate] = useState();
  const [taskList, setTaskList] = useState([]);

  const handleChange = (event) => {
    setSubjectValue(event.target.value);
  }

  const handleSubmit = (event) => {
    const newTask = [subjectValue, date];
    // Duplicate list
    // const list = [...taskList];
    // list.push(newTask);

    // Other way to do line 15 and 16
    const list = [...taskList, newTask];
    setTaskList(list);

    console.table(taskList);

    event.preventDefault();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>Subject:
          <input name="subject" type="text" value={subjectValue}
            onChange={handleChange} />
        </label>
        <label>Date:
          <input name="date" type="date" value={date}
            onChange={(e) => setDate(e.target.value)} />
        </label>
        <br />
        <input type="submit" value="Add task" />
      </form>

      <br />
      <h3>Task List</h3>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {
            taskList.map((task, index) => {
              return <tr key={index}>
                <td>{task[0]}</td>
                <td>{task[1]}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
