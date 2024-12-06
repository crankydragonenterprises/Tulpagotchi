import Footer from "./components/footer/footer.component"
import Header from "./components/header/header.component"
import HomePage from "./components/home-page/home-page.component"

import './App.css';
import LogInPage from "./components/log-in-page/log-in-page.component";

function App() {
  return (
    <div>
      <Header />
      {/* <HomePage /> */}
      <LogInPage />
      <Footer />
    </div>
  )
}

export default App