import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 6;
  const [progress, setProgress] = useState(0);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "#1a1a1a";
      document.body.style.color = "white";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <div>
      <Router>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
                toggleTheme={toggleTheme}
                theme={theme}
              />
            }
          ></Route>
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
                toggleTheme={toggleTheme}
                theme={theme}
              />
            }
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
                toggleTheme={toggleTheme}
                theme={theme}
              />
            }
          ></Route>
          <Route
            path="/general"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
                toggleTheme={toggleTheme}
                theme={theme}
              />
            }
          ></Route>
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
                toggleTheme={toggleTheme}
                theme={theme}
              />
            }
          ></Route>
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
                toggleTheme={toggleTheme}
                theme={theme}
              />
            }
          ></Route>
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
                toggleTheme={toggleTheme}
                theme={theme}
              />
            }
          ></Route>
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
                toggleTheme={toggleTheme}
                theme={theme}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
