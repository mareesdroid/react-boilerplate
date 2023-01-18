import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes, Link, useLocation, Navigate
    } from 'react-router-dom';

    // layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";

const Routers = () => <>
<Routes>
      {/* add routes with layouts */}
      <Route path="/admin" element={<Admin />} />
      <Route path="/auth" element={<Auth />} />
      {/* add routes without layouts */}
      <Route path="/landing" element={<Landing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/" element={<Index />} />
      {/* add redirect for first page */}
      {/* <Navigate from="*" to="/" /> */}
    </Routes>
</>


export default Routers