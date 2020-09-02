import React, { useState } from "react";

function MapApplications(props) {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const onChnae = (e) => {
    setInputText(e.target.value);
  };
  const onClick = (e) => {
    e.preventDefault();
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };
  const onRemove = (id) => {
    const nextName = names.filter((name) => name.id !== id);
    setNames(nextName);
  };
  const nameList = names.map((name) => (
    <li onDoubleClick={() => onRemove(name.id)} key={name.id}>
      {name.text}
    </li>
  ));
  return (
    <div>
      <form>
        <input value={inputText} onChange={onChnae} />
        <button onClick={onClick}>추가</button>
        <ui> {nameList}</ui>
      </form>
    </div>
  );
}

export default MapApplications;
