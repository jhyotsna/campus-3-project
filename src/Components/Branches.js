import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Branches_Data = [
  {
    name: "CSE",
    img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
    sections: ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"],
  },
  {
    name: "ECE",
    img: "https://images.pexels.com/photos/4584614/pexels-photo-4584614.jpeg?auto=compress&cs=tinysrgb&w=600",
    sections: ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"],
  },
  {
    name: "EEE",
    img: "https://images.pexels.com/photos/3672355/pexels-photo-3672355.jpeg?auto=compress&cs=tinysrgb&w=600",
    sections: ["Section A", "Section B"],
  },
  {
    name: "Mechanical",
    img: "https://images.pexels.com/photos/188777/pexels-photo-188777.jpeg?auto=compress&cs=tinysrgb&w=600",
    sections: ["Section A", "Section B"],
  },
  {
    name: "Civil",
    img: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=600",
    sections: ["Section A", "Section B"],
  },
];

export default function Branches(props) {
  const [selectedBranch, setSelectedBranch] = useState(null);
  const navigate = useNavigate();

  const handleSectionChange = (event) => {
    const selectedSection = event.target.value;
    if (selectedSection && props.name === "Faculty") {
      navigate("/class_attendance/faculty/branches/attendance_form");
    } else if (selectedSection && props.name === "Student") {
      navigate("/class_attendance/student/branches/attendance_form");
    }
  };
  

  return (
    <>
    <Header name="Branches"/>
    <div className="branches-container">
      <h1>{props.name} Branches</h1>
      <div className="branches-grid">
        {Branches_Data.map((branch, index) => (
          <div key={index} className="branch-wrapper">
            <div
              className="branch-card"
              onClick={() =>
                setSelectedBranch((prev) => (prev === branch ? null : branch))
              }
            >
              <img src={branch.img} alt={branch.name} />
              <h2>{branch.name}</h2>
            </div>
            {selectedBranch === branch && (
              <div className="dropdown-container">
                <select className="Branch-select" onChange={handleSectionChange}>
                  <option value="">Select Section</option>
                  {branch.sections.map((section, idx) => (
                    <option key={idx} value={section}>
                      {section}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer previouspath={props.previouspath} />
    </>
  );
}
