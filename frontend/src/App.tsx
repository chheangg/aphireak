import { Flex, Text } from "@chakra-ui/react";
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
import MaintenanceDetail from "./page/MaintenanceRecord/MaintenanceDetail";
import CustomerDetail from "./page/Customer/CustomerDetail";
import VehicleDetail from "./page/Vehicle/VehicleDetail";
import TypeDetail from "./page/Product/TypeDetail";
import ProductDetail from "./page/Product/ProductDetail";
import AccountCard from "./components/AccountCard";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import AuthPage from './page/AuthPage'
import { checkIsInit, signInServer, signUpServer } from "./services/securityService";
import AuthCard from "./components/AuthCard";
import RegistrationForm from "./page/AuthPage/RegistrationForm";
import LoginForm from "./page/AuthPage/LoginForm";
import { TokenResponse, TokenValidResponse } from "./types";
import Schedule from "./page/Schedule";
import axios from "./services/axiosClient";


const App = () => {
  const [isInit, setIsInit] = useState<boolean>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isTokenValidated, setIsTokenValidated] = useState<boolean>(false);
  const [token, setToken] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const { data: initResponse } = useQuery('init', checkIsInit)
  const signUpMutation = useMutation(signUpServer)
  const signInMutation = useMutation(signInServer, {
    onSuccess: (response) => {
      setIsLoggedIn(true);
      if (response && response.data)
      {
        setToken(response.data.token);
        setUsername(response.data.username);

        const accountObj = {
          token: response.data.token,
          username: response.data.username,
        };

        localStorage.setItem('aphireak-token', JSON.stringify(accountObj));
      }
    }
  })

  useEffect(() => {
    if (initResponse && initResponse.data) {
      setIsInit(initResponse.data.initialization);
    }
  }, [initResponse])

  useEffect(() => {
    const jsonObj = localStorage.getItem('aphireak-token');

    if (jsonObj) {
      const accountObj : TokenResponse = JSON.parse(jsonObj);
      
      axios.post<TokenValidResponse>('/protected', accountObj).then(data => {
        if (data && data.data) {
          if (data.data.valid) {
            setIsLoggedIn(true)
            setUsername(accountObj.username)
            setToken(accountObj.token)
            setIsTokenValidated(true);
          } else {
            setIsLoggedIn(false)
            setUsername("")
            setToken("")
            setIsTokenValidated(false)
            localStorage.removeItem('aphireak-token')
          }
        }
      })
    }
  }, [])

  const onRegistration = (username: string, password: string) => {
    signUpMutation.mutate({ username, password })
    setIsInit(false);
  }

  const onLogin = (username: string, password: string) => {
    signInMutation.mutate({ username, password });
  }

  if (isInit) {
    return (
      <AuthPage>
        <AuthCard title='Intialization'>
          <RegistrationForm onSubmit={onRegistration} />
        </AuthCard>
      </AuthPage>
    )
  }

  if (!isLoggedIn && !token && !username && !isTokenValidated) {
    return (
      <AuthPage>
        <AuthCard title='Sign in'>
          <LoginForm onSubmit={onLogin}/>
        </AuthCard>
      </AuthPage>
    )
  }

  return (
    <Flex bgColor='gray.50' h='100vh' maxH='100vh' overflowY='hidden' flexDir='column' color='gray.700'>
      {/* Nav bar */}
      <Navbar>
        <LogoBtn logoImg={logoImg} />
        <AccountCard username="Ly Eang Chheang" onLogout={() => {
          setIsLoggedIn(false);
          setToken("");
          setUsername("");
          localStorage.removeItem('aphireak-token');
        }} />
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
            <Route path='/maintenances'>
              <Route element={<MaintenanceRecord />} index />
              <Route element={<MaintenanceDetail />} path=":id" />
            </Route>
            <Route element={<Schedule />} path='/upcoming-maintenances' />
            <Route path='/customers'>
              <Route element={<Customer />} index />
              <Route element={<CustomerDetail />} path=":id" />
            </Route>
            <Route path='/vehicles'>
              <Route element={<Vehicle />} index />
              <Route element={<VehicleDetail />} path=":id" />
            </Route>
            <Route path='/products'>
              <Route element={<Product />} index />
              <Route element={<ProductDetail />} path=":id" />
            </Route>
            <Route path="/types">
              <Route element={<TypeDetail />} path=":id" />
            </Route>
            <Route element={<div>account</div>} path='/accounts' />
          </Routes>
        </PageLayout>
      </MainLayout>
    </Flex>
  )
}

export default App;
