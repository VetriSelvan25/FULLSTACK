import Student from "./Components/Student.jsx"

const App=()=>{
  const name="Kumar"
  const age=22
  const course="React JS"
  return(
    <>
    <Student name={name} age={age} course={course} />
    </>
  )
}
export default App