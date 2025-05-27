import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import HappyBirthDay from "./HappyBirthDay";
import Step_1 from "./Step_1";
import Step_2 from "./Step_2";
import Step_3 from "./Step_3";
import Step_4 from "./Step_4";

const Wrapper = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/happybirthday28" element={<HappyBirthDay/>}/>
        <Route path="/step_1" element={<Step_1/>}/>
        <Route path="/step_1/step_2" element={<Step_2/>}/>
        <Route path="/step_1/step_2/step_3" element={<Step_3/>}/>
        <Route path="/step_1/step_2/step_3/step_4" element={<Step_4/>}/>
      </Routes>
    </>
  );
};

export default Wrapper;
