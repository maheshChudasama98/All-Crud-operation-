
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./componets/Navbar";
import Roles from "./componets/Roles/Roles"
import Company from "./componets/Company/Company"
import Designation from "./componets/Designation/Designation"
import Loginlist from './componets/Crud operation/Loginlist'
import Loginlist2 from './componets/Mongo/Loginlist'
import Users from './componets/Users/Users'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/roles" element={<Roles />} />
        <Route path="/company" element={<Company />} />
        <Route path="/designation" element={<Designation />} />
        <Route path="/sql" element={<Loginlist />} />
        <Route path="/mongo" element={<Loginlist2 />} />
        <Route path="/users" element={<Users />} />
     
      </Routes>
    </>
  );
}

export default App;
