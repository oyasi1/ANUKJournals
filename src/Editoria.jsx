import { useState } from "react";

const Editoria = () => {
    const [activeTab, setActiveTab] = useState("editorial");
    
    const editorialTeam = [
        { name: "Prof. Tamunonimim Ngerebo", role: "Dean, Collage of Public Sector Accounting", school: "ANAN University, Kwall, Plateau State, Nigeria " },
        { name: "Prof. Tochukwu Okafor", role: "Department of Accounting", school: "University of Nigeria Nsukka. " },
        { name: "Prof. Stephen I. Ocheni", role: "" , school: "University of Calabar, Nigeria"},
        { name: "Prof. Salisu Abubakar", role: "Department of Accounting" , school: "ABU Zaria, Kaduna State, Nigeria"},
        { name: "Associate Prof. Mohammad Ali Aghaei", role: "Associate Professor of Accounting (With interest in Public Sector Accounting)", school: " Tarbiat Modares University, Tehran, Iran."},
        { name: " Prof. Hassan Ibrahim,", role: "Department of Accounting" , school: "IBB University, Lapai, Niger State, Nigeria"},
        { name: "Prof. Lawyer Chukwuma Obaia", role: "Department of Accounting, Rivers State", school: " University, Port Harcourt Nigeria" },
        { name: "Dr. John Obasi", role: "Environmental, Oil and Gas Accounting Department", school: " ANAN University, Kwall, Plateau State, Nigeria" },
        { name: "Prof. Bausua Fortune Nwinee", role: "Department of Finance & Banking", school: " University of Port Harcourt, Rivers State, Nigeria." },
        { name: "Dr. Anderson E. Oriakpono", role: "Taxation and Fiscal Policy Department", school: " ANAN University, Kwall, Plateau State, Nigeria" },
        { name: "Dr. Simon Akpadaka", role: "Department of Accounting", school: " ANAN University, Kwall, Plateau State, Nigeria" },
        { name: "Dr. Joshua S. Riti", role: "Department of Economics (With interest in Public Sector Economics and Environmental Economics)", school: " University of Jos, Nigeria." },
        { name: "Dr. Linus Igboyi", role: "Nigerian College of Accountancy", school: " ANAN University, Kwall, Plateau State, Nigeria" },
        { name: "Dr. Yang Shu", role: "School of Economics & Management", school: " University of Geosciences (CUG), No. 388 Lumo Road, Wuhan, 430074, China. email: cug@foxmail.com" },
        { name: "Dr. Friday Akpan", role: "Nigerian College of Accountancy", school: " ANAN University, Kwall, Plateau State, Nigeria" },
        { name: "Dr. Effiezal Abdul Wahab", role: "School of Accounting, Economics and Finance", school: " Curtin University, Australia." },
        { name: "Dr. Suka Adamgbo", role: "Department of Finance", school: " Rivers State University, Port Harcourt, Nigeria" },
        { name: "Prof. M.A. Mainoma", role: "Department of Accountancy", school: "Nasarawa State University, Nigeria" },
        { name: "Prof. Sunday Mlanga", role: "Director, Academic Planning", school: "ANAN University Kwall, Plateau State, Nigeria." },
        { name: "Prof. K.B. Kiatel", role: "Department of Accountancy,", school: " Rivers State University, Port Harcourt, Nigeria" },
        { name: "Prof. Joseph Femi Adebisi", role: "Deputy Vice Chancellor", school: "ANAN University Kwall, Plateau State, Nigeria" },
        { name: "Prof. Musa Adeiza Farouk", role: "Dean, College of Accountancy Kwall", school: " Plateau State, Nigeria." },
        { name: "Dr. Saidu Halidu", role: "Department of Financial Reporting", school: " ANAN University Kwall, Plateau State, Nigeria" },
        { name: "Prof. Chinedu Innocent Ekene", role: "Department of Public Sector Accounting", school: "ANAN University Kwall, Plateau State, Nigeria" },
        { name: "Dr. Abdullahi Ya’u", role: "ANAN Business School", school: " Gwarinpa, Abuja, Nigeria" }
    ];

    const boardOfAdvisers = [
        { name: "Professor Rowan Jones", role: "Emeritus Professor of Public Sector Accounting", school: "University of Birmingham, United Kingdom email: rowanhjones@outlook.com"},
        { name: "Assistant Professor Dina D. Pomeranz", role: "Assistant Professor of Applied Economics(With interest in Public Economics)", school: "University of Zurich, Switzerland email: dina.pomeranz@econ.uzh.ch" },
        { name: "Professor Ana Yetano", role: "Professor of Public Sector Accounting", school: "University of Zaragoza,Spain. email: ayetano@unizar.es " },
        { name: "Professor Juraj Nemec", role: "Professor of Public Finance and Management", school: "Masaryk University Brno, Czech Republic email: juraj.nemec@umb.sk " },
        { name: "Professor Suleiman A.S. Aruwa", role: "Professor of Accounting and Finance (With interest in Public Financial Management)", school: "Nassarawa State University, Keffi, Nigeria" },
        { name: "Professor Mohammad Kabir Hassan", role: "Professor of Finance", school: " University of New Orleans, United States. Email: mhassan@uno.edu" },
        { name: "Dr. Dagwom Y. Dang", role: "Public Sector Accounting Department", school: " ANAN University, Kwall, Plateau State, Nigeria " }
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Desktop Table (hidden on mobile) */}
            <div className="hidden lg:block">
                <div className="max-h-[600px] overflow-x-auto overflow-y-auto shadow-lg rounded-xl">
                    <table className="min-w-full divide-y-2 divide-gray-200 bg-white">
                        <thead className="sticky top-0 z-10">
                            <tr className="bg-gradient-to-r from-blue-900 to-blue-800">
                                <th className="px-6 py-5 text-white font-semibold text-center text-lg border-r border-blue-700">
                                    Editorial Team
                                </th>
                                <th className="px-6 py-5 text-white font-semibold text-center text-lg">
                                    Board of Advisers
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                            {Array.from({ length: Math.max(editorialTeam.length, boardOfAdvisers.length) }).map((_, index) => (
                                <tr key={index} className="hover:bg-blue-50 transition-colors duration-150">
                                    <td className="px-6 py-4 text-gray-900 text-center border-r border-gray-100">
                                        {editorialTeam[index] ? (
                                            <div>
                                                <div className="font-semibold">{editorialTeam[index].name}</div>
                                                <div className="text-sm text-gray-500 mt-1">{editorialTeam[index].role}</div>
                                                <div className="text-sm text-gray-500 mt-1">{editorialTeam[index].school}</div>
                                            </div>
                                        ) : ""}
                                    </td>
                                    <td className="px-6 py-4 text-gray-900 text-center">
                                        {boardOfAdvisers[index] ? (
                                            <div>
                                                <div className="font-semibold">{boardOfAdvisers[index].name}</div>
                                                <div className="text-sm text-gray-500 mt-1">{boardOfAdvisers[index].role}</div>
                                                <div className="text-sm text-gray-500 mt-1">{boardOfAdvisers[index].school}</div>
                                            </div>
                                        ) : ""}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Tablet View (2 columns side by side) */}
            <div className="hidden md:block lg:hidden">
                <div className="grid grid-cols-2 gap-6">
                    {/* Editorial Team Column */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-4 px-6">
                            <h3 className="text-center font-bold text-xl">Editorial Team</h3>
                        </div>
                        <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
                            {editorialTeam.map((person, index) => (
                                <div key={index} className="p-4 hover:bg-blue-50 transition-colors">
                                    <div className="font-semibold text-gray-900 text-center">{person.name}</div>
                                    <div className="text-sm text-gray-500 text-center mt-1">{person.role}</div>
                                    <div className="text-sm text-gray-500 text-center mt-1">{person.school}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Board of Advisers Column */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-green-800 to-green-700 text-white py-4 px-6">
                            <h3 className="text-center font-bold text-xl">Board of Advisers</h3>
                        </div>
                        <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
                            {boardOfAdvisers.map((person, index) => (
                                <div key={index} className="p-4 hover:bg-blue-50 transition-colors">
                                    <div className="font-semibold text-gray-900 text-center">{person.name}</div>
                                    <div className="text-sm text-gray-500 text-center mt-1">{person.role}</div>
                                    <div className="text-sm text-gray-500 text-center mt-1">{person.school}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View with Button Toggle - FIXED */}
            <div className="md:hidden">
                {/* Button Toggle */}
                <div className="flex gap-3 mb-6">
                    <button
                        onClick={() => setActiveTab("editorial")}
                        className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                            activeTab === "editorial"
                                ? "bg-blue-800 text-white shadow-lg ring-2 ring-blue-400"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        📚 Editorial Team
                    </button>
                    <button
                        onClick={() => setActiveTab("advisers")}
                        className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                            activeTab === "advisers"
                                ? "bg-blue-800 text-white shadow-lg ring-2 ring-blue-400"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        🎓 Board of Advisers
                    </button>
                </div>

                {/* Editorial Team Content */}
                {activeTab === "editorial" && (
                    <div className="space-y-3">
                        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-3 rounded-t-xl">
                            <h3 className="text-center font-bold text-lg">Editorial Team</h3>
                        </div>
                        <div className="space-y-3">
                            {editorialTeam.map((person, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                                    <div className="text-center">
                                        <div className="font-semibold text-gray-1000 text-base sm:text-lg">
                                            {person.name}
                                        </div>
                                        <div className="text-gray-600 text-sm sm:text-base mt-2 font-medium">
                                            {person.role}
                                        </div>
                                        <div className="text-blue-400 text-sm sm:text-base mt-2 font-medium">
                                            {person.school}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Board of Advisers Content */}
                {activeTab === "advisers" && (
                    <div className="space-y-3">
                        <div className="bg-gradient-to-r from-blue-800 to-blue-500 text-white py-3 rounded-t-xl">
                            <h3 className="text-center font-bold text-lg">Board of Advisers</h3>
                        </div>
                        <div className="space-y-3">
                            {boardOfAdvisers.map((person, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                                    <div className="text-center">
                                        <div className="font-semibold text-gray-900 text-base sm:text-lg">
                                            {person.name}
                                        </div>
                                        <div className="text-blue-600 text-sm sm:text-base mt-2 font-medium">
                                            {person.role || "Adviser"}
                                        </div>
                                        <div className="font-semibold text-gray-900 text-base sm:text-lg">
                                            {person.school}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Editoria;