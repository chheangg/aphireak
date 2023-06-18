import { Box } from "@chakra-ui/react";
import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layout/MainLayout";


const App = () => {
  return (
    <Box>
      {/* Nav bar */}
      <div>Nav bar</div>
      <MainLayout>
        {/* This is the fixed sidebar */}
        <div>
          Sidebar
        </div>
        {/* This is the content part. We use react-router to change the content based on the side bar selected */}
        <Routes>
          {/* Make /maintnenace the default route on visiting the website */}
          <Route element={<Navigate to='/maintenance' />} path='/' />
          <Route element={<div>Maintenance</div>} path='/maintenance' index />
          <Route element={<div>Upcoming Maintenance</div>} path='/upcoming-maintenancne' />
          <Route element={<div>Customer</div>} path='/customer' />
          <Route element={<div>Vehicle</div>} path='/vehicle' />
          <Route element={<div>product</div>} path='/product' />
        </Routes>
      </MainLayout>
    </Box>
  )
}

export default App;
