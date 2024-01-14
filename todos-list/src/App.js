import "./App.css";
import Header from "./MyComponents/Header";
import { Planners } from "./MyComponents/Planners";
import { Footer } from "./MyComponents/Footer";
import { AddPlanner } from "./MyComponents/AddPlanner";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initPlanner;
  if (localStorage.getItem("planners") === null) {
    initPlanner = [];
  } else {
    initPlanner = JSON.parse(localStorage.getItem("planners"));
  }

  const onDelete = (planner) => {
    console.log("I am ondelete of planner", planner);
    // Deleting this way in react does not work
    // let index = planners.indexOf(planner);
    // planners.splice(index, 1);

    setPlanners(
      planners.filter((e) => {
        return e !== planner;
      })
    );
    console.log("deleted", planners);
    localStorage.setItem("planners", JSON.stringify(planners));
  };

  const addPlanner = (title, desc) => {
    console.log("I am adding this planner", title, desc);
    let sno;
    if (planners.length === 0) {
      sno = 0;
    } else {
      sno = planners[planners.length - 1].sno + 1;
    }
    const myPlanner = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setPlanners([...planners, myPlanner]);
    console.log(myPlanner);
  };

  const [planners, setPlanners] = useState(initPlanner);
  useEffect(() => {
    localStorage.setItem("planners", JSON.stringify(planners));
  }, [planners]);

  return (
    <>
      <div className="new">
      <Router>
        <Header title="My Planners List" searchBar={false} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddPlanner addPlanner={addPlanner} />
                  <Planners planners={planners} onDelete={onDelete} />
                </>
              )
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
      </div>
    </>
  );
}

export default App;
