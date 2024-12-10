import { Routes, Route } from "react-router-dom";

import './App.css';
//import LogInPage from "./components/log-in-page/log-in-page.component";
import Header from "./components/header/header.component";
import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignUp from "./routes/sign-up/sign-up.component";
import LogIn from "./routes/log-in/log-in.component";
import ContactUs from "./routes/contact-us/contact-us.component";
import Dashboard from "./routes/dashboard/dashboard.component";
import Dragondex from "./routes/dragondex/dragondex.component";
import Store from "./routes/store/store.component";
import Account from "./routes/account/account.component";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />}/>
        <Route path="/log-in" element={<LogIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
        <Route path='/' element={<Navigation />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dragondex" element={<Dragondex />} />
          <Route path="/store" element={<Store />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App;