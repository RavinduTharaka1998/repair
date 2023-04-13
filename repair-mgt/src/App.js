import Header from "./components/Header";
import React from "react";
import {Route, Routes } from 'react-router-dom';
import ViewRepair  from "./components/ViewRepair";
import AddRepair  from "./components/AddRepair";
import ReturnItems  from "./components/ReturnItems";
import RepairStatus from "./components/RepairStatus";
import RepairReport from "./components/RepairReport";
import UpdateRepair  from "./components/UpdateRepair";
import ViewReturnItem  from "./components/ViewReturnItem";


function App() {
  return <React.Fragment>
    <header>
      <Header/>
    </header>
    <main>
   
       <Routes>
          <Route path ="/view" element={<ViewRepair/>} exact />
          <Route path ="/add" element={<AddRepair/>}  />
          <Route path ="/editRepaire" element={<UpdateRepair/>}  />
          <Route path ="/return" element={<ReturnItems/>}  />
          <Route path ="/returnitem" element={<ViewReturnItem/>}  />
          <Route path ="/status" element={<RepairStatus/>}  />
          <Route path ="/report" element={<RepairReport/>}  />
        </Routes>
    </main>
  </React.Fragment>
}

export default App;
