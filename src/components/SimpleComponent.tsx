import { Fragment, useState, FC } from "react";

interface Props {
  name: string;
}

const WelcomeMessage: FC<Props> = ({ name }) => {
  console.log("render WelcomeMessage");
  return (
    <Fragment>
      <label> The name is {name} </label>
    </Fragment>
  );
};

const SimpleComponent = () => {
  const [user, setUser] = useState({ name: "" });
  console.log("render Page");
  const handleClick = () => {
    setUser({ name: "Mohit" });
  };
  return (
    <Fragment>
      <WelcomeMessage name={user.name} />
      <button onClick={handleClick}>Click to show Name </button>
    </Fragment>
  );
};

export default SimpleComponent;

/*
Remember: in React, props and state are both immutable objects.
This means firstly that state object in SimpleComponenr
 is in fact changing.
 Rather, it’s being re-created by the setState execution.
Secondly, due to Page being re-rendered, 
WelcomeMessage will be called again with a new instance of its props object,
 which is a whole new object.

*/
