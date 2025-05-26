import Capybara_01 from '../assets/Images/Cappybara_float.gif';
import Button from '../Components/Buttons/Button';
import Images from '../Components/ImageCards/Images';
const Landing = () => {
  return (
    <>
      <main className="h-dvh">
        <div className="flex bg-purple-400 h-full flex-col items-center justify-center gap-5">
            <div className='ml-auto mr-auto'>
                <Images source={Capybara_01}/>
            </div>
            <div>
        <Button Btn_Lable='Click Me!'/>
            </div>
        </div>
      </main>
    </>
  );
};

export default Landing;
