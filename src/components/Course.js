import React from "react";
import Content from "./Content";
import Header from "./Header";

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course, index) => (
        <>
          <Header header={course.name} key={course.id} />
          <Content parts={course.parts} key={course.id} />
        </>
      ))}
    </>
  );
};

export default Course;
