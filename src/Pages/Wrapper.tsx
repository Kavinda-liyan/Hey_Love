import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import HappyBirthDay from "./HappyBirthDay";
import Step_1 from "./Step_1";

const Wrapper = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/happybirthday28" element={<HappyBirthDay/>}/>
        <Route path="/step_1" element={<Step_1/>}/>
      </Routes>
    </>
  );
};

export default Wrapper;
