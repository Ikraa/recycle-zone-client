import React from "react";
import Navbar from "../../Shared/Navbar/Navbar";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl underline text-center mt-5">
        <b>Question & Answer</b>
      </h1>
      <div className="shadow-xl lg:mx-40 card-body">
        <div className="mt-2 mb-2 ml-4">
          <h1>
            <span className="text-xl mb-3">
              <b>1.Question:</b>
            </span>
            What are the different ways to manage a state in a React
            application?
          </h1>
          <h1>
            <span className="text-bold text-xl mb-1">
              <b>Ans:</b>
            </span>{" "}
            There are different ways to manage a state in a react application.
            Some are given below: Local state this is manage by use state ,
            Global state this is manage by context api and redux, Server state
            and URL state.
          </h1>
        </div>
      </div>
      <div className="shadow-xl lg:mx-40 mt-3 card-body">
        <h1>
          <span className="text-xl text-bold">
            <b>2.Question:</b>
          </span>
          How does prototypical inheritance work?
        </h1>
        <h1>
          <span className="text-bold text-xl">
            <b>Ans:</b>
          </span>
          The Prototypal Inheritance is a feature in javascript. It is used to
          add methods and properties in objects. And also a method by which an
          object can inherit the properties and methods of another object.
        </h1>
      </div>
      <div className="shadow-xl lg:mx-40 mt-3 card-body">
        <h1>
          <span className="text-xl text-bold">
            <b>3.Question:</b>
          </span>
          What is a unit test? Why should we write unit tests?
        </h1>
        <h1>
          <span className="text-bold text-xl">
            <b>Ans:</b>
          </span>
          Unit Testing is a type of method or software testing where individual
          units or components of a software are tested. Unit tests act as
          documentation for code. They enable this to catch bugs early in the
          development process. Automated unit tests help a great deal with
          regression testing. They easily detect code smells in our codebase.
        </h1>
      </div>
      <div className="shadow-xl lg:mx-40 mt-3 card-body mb-8">
        <h1>
          <span className="text-xl text-bold">
            <b>4.Question:</b>
          </span>
          React vs. Angular vs. Vue?
        </h1>
        <h1>
          <span className="text-bold text-xl">
            <b>Ans:</b>
          </span>
          <ul className="list-disc">
            <li>
              <b>React</b> often requires extra modules and components, which
              keeps the core library small, but means there's extra work
              involved when incorporating outside tools.
            </li>
            <li>
              <b>Anguler</b>, on the other hand, is more of a full-fledged
              solution that doesn't require extras like React often does, though
              it does have a steeper learning curve for its core compared to
              React.
            </li>
            <li>
              <b>Vue</b> is generally more suited to smaller, less complex apps
              and is easier to learn from scratch compared to React. Vue can be
              easier to integrate into new or existing projects and many feel
              its use of HTML templates along with JSX is an advantage.
            </li>
          </ul>
        </h1>
      </div>
    </div>
  );
};

export default Blog;
