import { Flex } from "@chakra-ui/react";
import { Routes, Route, Navigate } from "react-router-dom";

import { BsFolder2Open } from 'react-icons/bs'
import { MdSchedule, MdPerson4, MdDirectionsCar, MdAccountCircle } from 'react-icons/md'
import { GiOilDrum } from 'react-icons/gi'

import MainLayout from "./layout/MainLayout";
import SideBar from "./components/SideBar";
import SideBarTitle from "./components/SideBar/SideBarTitle";
import SideBarElement from "./components/SideBar/SideBarElement";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <Flex bgColor='gray.50' minH='100vh' flexDir='column' color='red.500'>
      {/* Nav bar */}
      <Navbar></Navbar>
      <MainLayout>
        {/* This is the fixed sidebar */}
        <SideBar>
          <SideBarTitle>Dashboard</SideBarTitle>
          <SideBarElement icon={BsFolder2Open} to='/maintenances'>Maintenance Record</SideBarElement>
          <SideBarElement icon={MdSchedule} to='/upcoming-maintenances'>Upcoming Maintenance</SideBarElement>
          <SideBarElement icon={MdPerson4} to='/customers'>Customer</SideBarElement>
          <SideBarElement icon={MdDirectionsCar} to='/vehicles'>Vehicle</SideBarElement>
          <SideBarTitle>Manage</SideBarTitle>
          <SideBarElement icon={GiOilDrum} to='/product'>Product Inventory</SideBarElement>
          <SideBarElement icon={MdAccountCircle} to='/product'>Account</SideBarElement>
        </SideBar>
        {/* This is the content part. We use react-router to change the content based on the side bar selected */}
        <Routes>
          {/* Make /maintnenace the default route on visiting the website */}
          <Route element={<Navigate to='/maintenances' />} path='/' />
          <Route element={<div>Maintenance</div>} path='/maintenances' index />
          <Route element={<div>Upcoming Maintenance</div>} path='/upcoming-maintenances' />
          <Route element={<div>Customer</div>} path='/customers' />
          <Route element={<div>Vehicle</div>} path='/vehicles' />
          <Route element={<div>product</div>} path='/products' />
          <Route element={<div>account</div>} path='/accounts' />
        </Routes>
      </MainLayout>
    </Flex>
  )
}

export default App;
