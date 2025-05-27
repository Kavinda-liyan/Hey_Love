import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import HappyBirthDay from "./HappyBirthDay";
import Step_1 from "./Step_1";
import Step_2 from "./Step_2";

const Wrapper = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/happybirthday28" element={<HappyBirthDay/>}/>
        <Route path="/step_1" element={<Step_1/>}/>
        <Route path="/step_1/step_2" element={<Step_2/>}/>
      </Routes>
    </>
  );
};

export default Wrapper;
