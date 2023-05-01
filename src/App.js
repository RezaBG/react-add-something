import React, { useState } from "react";

import CourseGoalList from "./CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./CourseGoals/CourseInput/CourseInput";
import "./App.css";

const App = () => {
  const [courseGoals, setCouseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCouseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCouseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };
  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe and one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList item={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }
  return (
    <div>
      <section>
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;
