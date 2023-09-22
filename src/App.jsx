import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Issue from "./pages/Issues";
import Header from "./Components/Header";
import Recieved from "./pages/Recieved";
import Home from "./pages/Home";
import Purchase from "./pages/PurchaseOrderForm";
import DepartmentList from "./pages/DepartmentForm";
import EquipmentDetailsForm from "./pages/EquipmentDetailsForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LabInformation from "./pages/LabInformationForm";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Demo from "./Components/DashboardPages/DpList";
import Lablist from "./Components/DashboardPages/Lablist";
import IssuesList from "./Components/DashboardPages/IssuesList";
import PurchaseList from "./Components/DashboardPages/PurchaseList";
import EquipmentList from "./Components/DashboardPages/EquipmentList";
import EquipmentsReview from "./pages/EquipmentReview";
import EquipmentsReviewList from "./Components/DashboardPages/EquipmentReviewList";
function App() {
    return (
        <div className="App">
            <ToastContainer position="bottom-center" theme="dark" />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/issue" element={<Issue />} />
                    <Route path="/departmentlist" element={<DepartmentList />} />
                    <Route path="/equipments" element={<EquipmentDetailsForm />} />
                    <Route path="/purchase" element={<Purchase />} />
                    <Route path="/lab" element={<LabInformation />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/demo" element={<Demo />} />
                    <Route path="/lablist" element={<Lablist />} />
                    <Route path="/issueslist" element={<IssuesList />} />
                    <Route path="/purchaselist" element={<PurchaseList />} />
                    <Route path="/equipmentlist" element={<EquipmentList />} />
                    <Route path="/equipment_review" element={<EquipmentsReview />} />
                    <Route path="/equipmentreviewlist" element={<EquipmentsReviewList />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
