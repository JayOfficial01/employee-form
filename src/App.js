import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserProfile from "./components/UserProfile/UserProfile";
import UsersList from "./pages/UsersList/UsersList";
import { GlobalStyles } from "./styles/GlobalStyles";
import THEMES from "./styles/theme";
import { EmployeeProvider } from "./context/employeeContext";

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <ThemeProvider theme={THEMES}>
          <GlobalStyles />
          <Routes>
            <Route path="/" exact element={<UsersList />} />
            <Route
              path="/user-profile/:userSlug"
              exact
              element={<UserProfile />}
            />
          </Routes>
        </ThemeProvider>
      </Router>
    </EmployeeProvider>
  );
}

export default App;
