import { Routes, Route, Outlet } from "react-router-dom";

import './App.css';
//import LogInPage from "./components/log-in-page/log-in-page.component";
import Header from "./components/header/header.component";
import Home from "./routes/home/home.component";
import SignUp from "./routes/sign-up/sign-up.component";
import LogIn from "./routes/log-in/log-in.component";
import ContactUs from "./routes/contact-us/contact-us.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />}/>
        <Route path="/log-in" element={<LogIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
      </Route>
    </Routes>
    // <div>
    //   <Header />
    //   <HomePage />
    //   <LogInPage />
    //   <Footer />
    // </div>
  )
}

export default App;