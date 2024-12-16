import { Routes, Route } from "react-router-dom";
import DashboardPage from "../../components/dashboard-page/dashboard-page.component";
import ProgressSection from "../../components/progress-section/progress-section.component";
import DragonDetailsPage from "../../components/dragon-details-page/dragon-details-page.component";

function Dashboard () {
    return(
        <Routes>
            <Route element = { <DashboardPage />}>
                <Route path=':dragonID' element={<DragonDetailsPage />}/>
                <Route path='/' element={<ProgressSection />} />
            </Route>
        </Routes>
       
    )
}

export default Dashboard;