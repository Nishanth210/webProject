import { useEffect, useState } from "react";
import Dashboard from "../../pages/Dashboard";
import Slider from "../Slider";
import axios from 'axios'
function EquipmentList() {
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                let response = await fetch("http://localhost:8000/api/Equipments/");
                response = await response.json();
                response.map((data) => {
                    if (data.status === true) {
                        data.status = "true";
                    } else {
                        data.status = "false";
                    }
                });
                setDepartments(response);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    return (
        <>
            <div>
            <div className="float-left">
                <Dashboard></Dashboard>
            </div>
            
            <Slider/>
            <div className="pl-5 py-2 mx-3 mt-3 bg-blue-300 rounded-lg pl-5 shadow-lg hover:shadow-2xl transition ease-in-out">
                <h1 className="mt-3 text-4xl">SCROLL DOWN TO VIEW EQUIPMENT LIST</h1>
                <h1 className="mt-3 text-2xl text-blue-800">AUTONOMOUS INSTITUTION WITH NAAC-A ACCREDITATION</h1>
                <p className="mt-2 text-sm font-semibold">
                    Global Academy of Technology is an A-grade college that is counted one amongst the best engineering colleges in Bangalore. Along with being equipped with modern technology and the perfect infrastructure, the college has an ambience and culture to accelerate learning. The
                    Management, Principal and Staff of the institution believe in the overall development of the students and hence encourage them to participate in co-curricular, extra-curricular and sports events.
                </p>
            </div>
                <h1 className="mt-10 mb-5 text-2xl font-semibold text-center">Equipment List</h1>
                <table className="bg-white border-collapse border border-slate-50 w-full max-w-6xl mx-auto text-center">
                    <thead>
                        <tr>
                            <th className=" border-collapse border border-slate-300">SI</th>
                            <th className=" border-collapse border border-slate-300">Serial number</th>
                            <th className=" border-collapse border border-slate-300">Purchase Order</th>
                            <th className=" border-collapse border border-slate-300">Purchase Date</th>
                            <th className=" border-collapse border border-slate-300">Equipment Value</th>
                            <th className=" border-collapse border border-slate-300">Lab</th>
                            <th className=" border-collapse border border-slate-300">Status</th>
                            <th className=" border-collapse border border-slate-300">File Title</th>
                            <th className=" border-collapse border border-slate-300">Download</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departments.map((data, index) => (
                            <tr key={index}>
                                <td className="bg-gray-100 border-collapse border border-slate-100">{index}</td>
                                <td className="bg-gray-100 border-collapse border border-slate-100">{data.equipment_serial_number}</td>
                                <td className="bg-gray-100 border-collapse border border-slate-100">{data.purchase_order}</td>
                                <td className="bg-gray-100 border-collapse border border-slate-100">{data.purchase_date}</td>
                                <td className="bg-gray-100 border-collapse border border-slate-100">{data.equipment_value}</td>
                                <td className="bg-gray-100 border-collapse border border-slate-100">{data.lab}</td>
                                <td className="bg-gray-100 border-collapse border border-slate-100">{data.status}</td>
                                <td className="bg-gray-100 border-collapse border border-slate-100">{data.invoice}</td>
                                <td className="bg-gray-100 border-collapse border border-slate-100 hover:bg-sky-400"><a href="" target="_blank"></a>
    
                                <button onClick="" className="btn btn-success">DownLoad</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default EquipmentList;
