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

import logoImg from './asset/logo.png';
import LogoBtn from "./components/LogoBtn";
import PageLayout from "./layout/PageLayout";
import MaintenanceRecord from "./page/MaintenanceRecord";
import Customer from "./page/Customer";
import Vehicle from "./page/Vehicle";
import Product from "./page/Product";


const App = () => {
  return (
    <Flex bgColor='gray.50' minH='100vh' flexDir='column' color='gray.700'>
      {/* Nav bar */}
      <Navbar>
        <LogoBtn logoImg={logoImg} />
      </Navbar>
      <MainLayout>
        {/* This is the fixed sidebar */}
        <SideBar>
          <SideBarTitle>Dashboard</SideBarTitle>
          <SideBarElement icon={BsFolder2Open} to='/maintenances'>Maintenance Record</SideBarElement>
          <SideBarElement icon={MdSchedule} to='/upcoming-maintenances'>Upcoming Maintenance</SideBarElement>
          <SideBarElement icon={MdPerson4} to='/customers'>Customer</SideBarElement>
          <SideBarElement icon={MdDirectionsCar} to='/vehicles'>Vehicle</SideBarElement>
          <SideBarTitle>Manage</SideBarTitle>
          <SideBarElement icon={GiOilDrum} to='/products'>Product Inventory</SideBarElement>
          <SideBarElement icon={MdAccountCircle} to='/accounts'>Account</SideBarElement>
        </SideBar>
        {/* This is the content part. We use react-router to change the content based on the side bar selected */}
        {/**
         * Each page has listing and form section for creation. 
         */}
        <PageLayout>
          <Routes>
            {/* Make /maintnenace the default route on visiting the website */}
            <Route element={<Navigate to='/maintenances' />} path='/' />
            <Route element={<MaintenanceRecord />} path='/maintenances' index />
            <Route element={<div>Upcoming Maintenance</div>} path='/upcoming-maintenances' />
            <Route element={<Customer />} path='/customers' />
            <Route element={<Vehicle />} path='/vehicles' />
            <Route element={<Product />} path='/products' />
            <Route element={<div>account</div>} path='/accounts' />
          </Routes>
        </PageLayout>
      </MainLayout>
    </Flex>
  )
}

export default App;
