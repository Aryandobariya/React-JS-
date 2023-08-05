import { data } from "jquery";
import React, { useState } from "react";

export default function Crude() {
  let [name, setName] = useState("");
  let [aar, setAar] = useState([]);
  let [inde,setinde] = useState(null)

  function getdata(e) {
    setName(e.target.value);
  }

  function adddata() {
    setAar([...aar, name]);
    setName("");
  }
  function Delete(index) {
    aar.splice(index, 1);
    setAar([...aar]);
  }
  function Deletealldata() {
    setAar([]);
  }

  function update (inde,data){
    setName(data)
    setinde(inde)
  }

  function updatechange(){
    aar.splice(inde, 1, name);
    setAar([...aar]);
    setName("");
    setinde(null)
  }

  return (
    <>
      <div className="name div">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          onChange={(e) => getdata(e)}
          value={name}
        />
        <button onClick={() => adddata()}>Add</button>

        <button onClick={() => Deletealldata()}>Delite all data</button>

        <button onClick={()=> updatechange()}>updatechange</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {aar.map((e, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{e}</td>
              <td>
                <button onClick={() => Delete(i)}>Delete</button>
              </td>
              <td>
                <button onClick={() => update(i,e)}>update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
