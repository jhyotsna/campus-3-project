import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Student_Faculty from "./Components/Student_Faculty";
import Branches from "./Components/Branches";
import TwoOptions from "./Components/TwoOptions";
import Boy_Girl from "./Components/Boy_Girl";
import Class_Attendance_Form from "./Components/Class_Attendance_Form";
import Hostel_Attendance from "./Components/Hostel_Attendance";
import Leave_Out_In_Out from "./Components/Leave_Out_In_Out";
import New_Repair_Replace from "./Components/New_Repair_Replace";
import Request_Form_New from "./Components/Request_Form_New";
import Request_Form from "./Components/Request_Form";
import StatusCheckPage from "./Components/StatusCheckPage";
import CareTaker from "./Components/CareTaker";
import Request_Card from "./Components/Request_Card";
import Home from "./Components/Home";
import LoginSignup from "./LoginSignup";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route
      path="/"
      element={<Home />}></Route>
      {/* Class Attendance */}
      <Route 
        path="/class_attendance" 
        element={<Student_Faculty headername="Class Attendance" previouspath="/"/>} 
      />
      <Route path="class_attendance/student/branches"
      element={<Branches previouspath="/class_attendance/" name="Student" />}
      />
      <Route path="class_attendance/faculty/branches"
      element={<Branches previouspath="/class_attendance" name="Faculty" />}
      />
      <Route path="class_attendance/faculty/branches/attendance_form"
        element={<Class_Attendance_Form previouspath="/class_attendance/faculty/branches/" name="Faculty" />}
      />
      <Route path="class_attendance/student/branches/attendance_form"
        element={<Class_Attendance_Form previouspath="/class_attendance/student/branches/" name="Student" />}
      />



      {/* Hostel Attendance */}
      <Route 
  path="/hostel_attendance"
  element={<Boy_Girl headername="Hostel Attendance" previous_path="/hostel_attendance" previouspath="/"/>}/>
      <Route 
      path="/hostel_attendance/boy"
      element={<TwoOptions previous_path="/hostel_attendance/boy" previouspath="/hostel_attendance/" headername="Hostel Attendance" name1="E3" name2="E4"/>}
      />
      <Route 
      path="/hostel_attendance/girl"
      element={<TwoOptions previous_path="/hostel_attendance/girl" previouspath="/hostel_attendance" headername="Hostel Attendance" name1="E6" name2="E4" />}
      />
      <Route 
      path="/hostel_attendance/boy/e3"
      element={<Hostel_Attendance previouspath="/hostel_attendance/boy" headername="Boys" />}
      />
      <Route 
      path="/hostel_attendance/girl/e3"
      element={<Hostel_Attendance headername="Girls" previouspath="/hostel_attendance/girl" />}
      />
      <Route 
      path="/hostel_attendance/boy/e4"
      element={<Hostel_Attendance headername="Boys" previouspath="/hostel_attendance/boy" />}
      />
      <Route 
      path="/hostel_attendance/girl/e4"
      element={<Hostel_Attendance headername="Girls" previouspath="/hostel_attendance/girl" />}
      />


      {/* Leave/Outing */}
     
      <Route
      path="/leave_outing"
      element={<TwoOptions name1="Student" name2="Caretaker" previous_path="/leave_outing" previouspath="/"/>}>
      </Route>
      <Route
      path="/leave_outing/Student"
      element={<LoginSignup name="Student"/>}></Route>
     
      <Route
      path="/leave_outing/Student/login"
      element={<Boy_Girl previous_path="/leave_outing/Student" previouspath="/leave_outing/"/>}>

      </Route>
      <Route
      path="/leave_outing/Student/boy"
      element={<TwoOptions previous_path="/leave_outing/Student/boy" previouspath="/leave_outing/Student" headername="Boy" name1="Leave" name2="Outing" />}>
      </Route>
      <Route
      path="/leave_outing/Student/girl"
      element={<TwoOptions previous_path="/leave_outing/Student/girl" previouspath="/leave_outing/Student" headername="Girl" name1="Leave" name2="Outing" />}>
      </Route>
      <Route
      path="/leave_outing/Student/boy/Leave"
      element={<TwoOptions previous_path="/leave_outing/Student/boy/Leave" previouspath="/leave_outing/Student/boy" headername="Boy" name1="In" name2="Out" />}>
      </Route>
      <Route
      path="/leave_outing/Student/boy/Outing"
      element={<TwoOptions previous_path="/leave_outing/Student/boy/Outing" previouspath="/leave_outing/Student/boy" headername="Boy" name1="In" name2="Out" />}>
      </Route>
      <Route
      path="/leave_outing/Student/girl/Leave"
      element={<TwoOptions previous_path="/leave_outing/Student/girl/Leave" previouspath="/leave_outing/Student/girl" headername="Girl" name1="In" name2="Out" />}>
      </Route>
      <Route
      path="/leave_outing/Student/girl/Outing"
      element={<TwoOptions previous_path="/leave_outing/Student/girl/Outing" previouspath="/leave_outing/Student/girl" headername="Girl" name1="In" name2="Out" />}>
      </Route>


      <Route
      path="/leave_outing/Student/boy/Leave/In"
      element={<Leave_Out_In_Out headername="Boy" previouspath="/leave_outing/Student/boy/Leave" name="In" />}>
      </Route>

      <Route
      path="/leave_outing/Student/boy/Leave/Out"
      element={<Leave_Out_In_Out headername="Boy" previouspath="/leave_outing/Student/boy/Leave" name="Out" />}>
      </Route>
      <Route
      path="/leave_outing/Student/girl/Leave/In"
      element={<Leave_Out_In_Out headername="Girl" previouspath="/leave_outing/Student/girl/Leave" name="In" />}>
      </Route>

      <Route
      path="/leave_outing/Student/girl/Leave/Out"
      element={<Leave_Out_In_Out headername="Girl" previouspath="/leave_outing/Student/girl/Leave" name="Out" />}>
      </Route>

      <Route
      path="/leave_outing/Student/boy/Outing/In"
      element={<Leave_Out_In_Out headername="Boy" previouspath="/leave_outing/Student/boy/Outing" name="In" />}>
      </Route>

      <Route
      path="/leave_outing/Student/boy/Outing/Out"
      element={<Leave_Out_In_Out headername="Boy" previouspath="/leave_outing/Student/boy/Outing" name="Out" />}>
      </Route>
      <Route
      path="/leave_outing/Student/girl/Outing/In"
      element={<Leave_Out_In_Out headername="Girl" previouspath="/leave_outing/Student/girl/Outing" name="In" />}>
      </Route>

      <Route
      path="/leave_outing/Student/girl/Outing/Out"
      element={<Leave_Out_In_Out headername="Girl" previouspath="/leave_outing/Student/girl/Outing" name="Out" />}>
      </Route>
      <Route
      path="/leave_outing/Caretaker"
      element={<LoginSignup name="Caretaker"/>}></Route>
      <Route path="/leave_outing/Caretaker/login"
      element={<CareTaker />}>
      </Route>
      <Route
      path="/leave_outing/Caretaker/request_card"
      element={<Request_Card />}></Route>

      {/* IT Infra */}
      <Route
      path="/it_infra"
      element={<New_Repair_Replace headername="Laptop Issue" previouspath="/" />}>
      </Route>
      <Route
      path="/it_infra/new"
      element={<TwoOptions headername="Laptop Issue" name1="Request" name2="Status" previous_path="/it_infra/new" previouspath="/it_infra" />}>
      </Route>
      <Route
      path="/it_infra/repair"
      element={<TwoOptions headername="Laptop Issue" name1="Request" name2="Status" previous_path="/it_infra/repair" previouspath="/it_infra" />}>
      </Route>
      <Route
      path="/it_infra/replace"
      element={<TwoOptions headername="Laptop Issue" name1="Request" name2="Status"  previous_path="/it_infra/replace" previouspath="/it_infra"/>}>
      </Route>
      <Route path="/it_infra/new/Request"
      element={<Request_Form_New headername="Laptop Issue" previous_path="/it_infra/new/Request" previouspath="/it_infra/new" />}
      >
      </Route>
      <Route
      path="/it_infra/repair/Request"
      element={<Request_Form headername="Laptop Issue" previous_path="/it_infra/repair/Request" previouspath="/it_infra/repair"/>}>
      </Route>
      <Route
      path="/it_infra/replace/Request"
      element={<Request_Form headername="Laptop Issue" previous_path="/it_infra/replace/Request" previouspath="/it_infra/replace"/>}>
      </Route>
      <Route
      path="/it_infra/new/Status"
      element={<StatusCheckPage headername="Laptop Issue" previouspath="/it_infra/new/"/> }
      >
      </Route>
      <Route
      path="/it_infra/repair/Status"
      element={<StatusCheckPage headername="Laptop Issue" previouspath="/it_infra/repair/"/> }
      >
      </Route>
      <Route
      path="/it_infra/replace/Status"
      element={<StatusCheckPage headername="Laptop Issue" previouspath="/it_infra/replace/"/> }
      >
      </Route>
      <Route
      path="/it_infra/replace/Status/CareTaker"
      element={<CareTaker />}
      >
      </Route>
      <Route
      path="/request_card"
      element={<Request_Card name="Mani" />}
      >
      </Route>
      </Routes>   
      </BrowserRouter>   
    
  );
}

export default App;
