import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import HappyBirthDay from "./HappyBirthDay";

const Wrapper = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/happybirthday28" element={<HappyBirthDay/>}/>
      </Routes>
    </>
  );
};

export default Wrapper;
