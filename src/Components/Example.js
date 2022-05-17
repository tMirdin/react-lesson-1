import React from "react";
import "./Example.css";

const Example = ({ name, company, children, getInfo }) => {
  //   console.log(props.name);
  return (
    <div>
      <img
        width={300}
        className="react-icon"
        src="https://cdn.otus.ru/media/public/92/0e/UxBYDUfBNl9RfD5r6wMDvAWke3mGTfZaDcmHGZWc_1-1801-920efc.png"
      />
      <h3>{name}</h3>
      <h4>{company}</h4>
      {children}
      <input onChange={(event) => getInfo(event.target.value)} />
    </div>
  );
};

export default Example;
