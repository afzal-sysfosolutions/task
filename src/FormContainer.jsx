import React, { useState } from 'react';
const FormContainer = () => {
      const [rows, setRows] = useState([{ name: '', age: '', city: '' }]);

  // Add new empty row
  const handleAddRow = () => {
    if(rows.length === 0){
        setRows([{ name: '', age: '', city: '' }]);  
    }else{
    setRows([...rows, { name: '', age: '', city: '' }]);
    }
  };

  // Handle input change
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedRows = [...rows];
    updatedRows[index][name] = value;
    setRows(updatedRows);
  };

  // Submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Data:', rows);
    alert(JSON.stringify(rows, null, 2));
  };

  const HandleIteamRemove = (Index)=>{
    const filteredData = rows.filter((itm, i)=> i !== Index);
    setRows(filteredData);    
  }

  return (
     <form onSubmit={handleSubmit}>
      <table border="1" cellPadding="10" className='table-container'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>
              <button type="button" onClick={handleAddRow}>
                Add
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <>
          {rows.length > 0  ? rows.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="name"
                  value={row.name}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="age"
                  value={row.age}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="city"
                  value={row.city}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
              <td><button type='button' onClick={()=> HandleIteamRemove(index)}>X</button></td>
            </tr>
          )) : <tr>
                <td colSpan="4">No Data Found!</td>
               </tr>
          }
          </>
        </tbody>
      </table>
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

export default FormContainer
