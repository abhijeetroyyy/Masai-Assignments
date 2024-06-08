import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Tickets from "../pages/Tickets";
import PrivateRoutes from "./PrivateRoutes";
import TicketCreate from "../pages/TicketCreate";
import TicketEdit from "../pages/TicketEdit";
import TicketView from "../pages/TicketView";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      />
      <Route
        path="/about"
        element={
          <PrivateRoutes>
            <About />
          </PrivateRoutes>
        }
      />
      <Route
        path="/contact"
        element={
          <PrivateRoutes>
            <Contact />
          </PrivateRoutes>
        }
      />
      <Route
        path="/tickets"
        element={
          <PrivateRoutes>
            <Tickets />
          </PrivateRoutes>
        }
      />
      <Route
        path="/tickets/create"
        element={
          <PrivateRoutes>
            <TicketCreate />
          </PrivateRoutes>
        }
      />
      <Route
        path="/tickets/edit/:id"
        element={
          <PrivateRoutes>
            <TicketEdit />
          </PrivateRoutes>
        }
      />
      <Route
        path="/tickets/view/:id"
        element={
          <PrivateRoutes>
            <TicketView />
          </PrivateRoutes>
        }
      />
        <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
