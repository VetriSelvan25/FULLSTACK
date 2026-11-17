import React from 'react'

const App = () => {
  const obj={name:"Arun",age:21,department:"Computer Science",city:"Chennai"};
  const arrobj=[{name:"Arun",age:21,department:"Computer Science",city:"Chennai"},{name:"kumar",age:22,department:"IT",city:"Bangalore"},{name:"Vivek",age:23,department:"EEE ",city:"Hyderabad"},{name:"Shiva",age:24,department:"ECE",city:"Mumbai"}];
  return (
    <div>
      <div>
        <h4>Object Rendering</h4>
        <p>name:{obj.name}</p>
        <p>age:{obj.age}</p>
        <p>department:{obj.department}</p>
        <p>city:{obj.city}</p> 
    
      </div>
      <div>
        <h4>Array of Object Rendering</h4>
        <table border ="1" cell padding="10px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Department</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {arrobj.map((emp)=>(
              <tr key={emp.name}>
                <td>{emp.name}</td>
                <td>{emp.age}</td>
                <td>{emp.department}</td>
                <td>{emp.city}</td>
              </tr>
            ))}
           
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App