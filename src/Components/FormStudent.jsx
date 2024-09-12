import React, { useState } from "react";

export default function FormStudent() {
  const [formStudent, setFormStudent] = useState({});
  //list students
  const [students, setStudents] = useState([]);

  const handleChangeForm = (e) => {
    console.dir(e.target);
    const { name, value } = e.target;
    console.log("name = " + name + " value = " + value);
    setFormStudent({ ...formStudent, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, formStudent]);
    e.target.reset();
    setFormStudent({});
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        {console.log(formStudent)}
        <div>
          <label htmlFor="">Name:</label>
          <input type="text" name="fullName" onChange={handleChangeForm} />
        </div>
        <div>
          <label htmlFor="">AGE:</label>
          <input type="text" name="age" onChange={handleChangeForm} />
        </div>
        <div>
          <label htmlFor="">ADDRESS:</label>
          <input type="text" name="address" onChange={handleChangeForm} />
        </div>
        <button>ADD</button>
      </form>

      {/* <p>{students.toString()}</p> */}
      {/* <p>{JSON.stringify(students)}</p> */}
      <table border={1}>
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          
            {students.map((item, index) => {
              return <tr>
                <td key={index}>{item.fullName}</td>
                <td key={index}>{item.age}</td>
                <td key={index}>{item.address}</td>
                </tr>
            })}
            
         
        </tbody>
      </table>
    </>
  );
}
