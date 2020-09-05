import React, { useEffect, useState } from "react";

function Hooks(props) {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  useEffect(() => {
    console.log("렌더링완료");
    console.log({
      name,
      nickname,
    });
  }, [name]);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  return (
    <div>
      <input onChange={onChangeName} />
      <input onChange={onChangeNickname} />
      <p>{name}</p>
      <p>{nickname}</p>
    </div>
  );
}

export default Hooks;
