import React, { useState } from "react";
import "./Notepad.css";

function Notepad() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const [font, setFont] = useState("Arial");
  const [fontSize, setFontSize] = useState("16px");
  const [fontColor, setFontColor] = useState("#000000");
  const [fontWeight, setFontWeight] = useState("550");


  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSave() {
    if(text != ""){
      const newNote = { text: text, id: Date.now() };
    setNotes([...notes, newNote]);
    setText("");
    }
    
  }

  function handleDelete(id) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  // function handleSaveNote() {
  //   const newSavedNote = { text: notes.join("\n"), id: Date.now() };
  //   setSavedNotes([...savedNotes, newSavedNote]);
  //   setNotes([]);
  // }

  // function handleDeleteSavedNote(id) {
  //   const newSavedNotes = savedNotes.filter((note) => note.id !== id);
  //   setSavedNotes(newSavedNotes);
  // }

  function handleFontChange(event) {
    setFont(event.target.value);
  }

  function handleFontSizeChange(event) {
    setFontSize(event.target.value);
  }

  function handleFontColorChange(event) {
    setFontColor(event.target.value);
  }
  function handleFontWeight(event){
    setFontWeight(event.target.value)
  }
  return (
    <div className="notepad-container">
      <div className="notepad-header">
      <ul className="notepad-notes-list">
          {notes.map((note) => (
            <li key={note.id} className="notepad-note-item" style={{ fontFamily: font, fontSize: fontSize, color: fontColor }}>
              {note.text}
              <button onClick={() => handleDelete(note.id)} className="notepad-delete-button">
                X
              </button>
            </li>
          ))}
        </ul>
       
      </div>
      <div className="notepad-content">
        
      <label>
          Font:
          <select value={font} onChange={handleFontChange}>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Verdana">Verdana</option>
            <option value="Gill Sans">Gill Sans</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="sans-serif">sans-serif</option>
            <option value="Cambria">Cambria</option>
            <option value="Cochin">Cochin</option>
            <option value="Georgia">Georgia</option>
            <option value="Times">Times</option>
            <option value="Cochin">Cochin</option>
            <option value="Segoe UI">Segoe UI</option>
            <option value="Tahoma">Tahoma</option>
            <option value="Geneva">Geneva</option>
            <option value="Verdana">Verdana</option>

          </select>
        </label>
        <label>
          Font Size:
          <select value={fontSize} onChange={handleFontSizeChange}>
            <option value="10px">10</option>
            <option value="12px">12</option>
            <option value="14px">14</option>
            <option value="16px">16</option>
            <option value="18px">18</option>
            <option value="20px">20</option>
            <option value="22px">22</option>
            <option value="24px">24</option>
            <option value="26px">26</option>
            <option value="28px">28</option>
            <option value="30px">30</option>
            
          </select>
        </label>
        <label>
          Font Color:
          <input type="color" value={fontColor} onChange={handleFontColorChange} />
         
        </label>
        <label>
          Font Weight:
          <select value={fontWeight} onChange={handleFontWeight}>
          <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="600">600</option>
            <option value="700">700</option>
            <option value="800">800</option>
            <option value="900">900</option>           
          </select>
        </label>
        <textarea
          value={text}
          onChange={handleChange}
          className="notepad-textarea"
          placeholder="Write a note..."
          style={{ fontFamily: font, fontSize: fontSize, color: fontColor , fontWeight:fontWeight}}
        />
        <button onClick={handleSave} className="notepad-save-button">
          Save
        </button>
      <p>&#169; 2023 AQEEL(AK019). All rights reserved.</p> 

      </div>
      
    </div>
  );
}

export default Notepad;
