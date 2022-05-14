import logo from './logo.svg';
import React from 'react'
import './App.css';
import CustomerReview from './componentes/CustomerReview';
import PopUp from './componentes/PopUp';
// import PopUpTitle from './componentes/PopUpTitle';
import {useState} from 'react'; 

function App() {

  // const [popUpClick, setPopUpClick] = useState(false);

  // const handlePopUpClick = () => {
  //   setPopUpClick(!popUpClick);
  // }

  return (
    <div className="App">
      <div className={'h-screen w-screen bg-purple-400'}>
        hero section
       
      </div>
      <div className={'h-screen w-screen bg-gray-200'}>
        screen 2 
      </div>
      <div className={'h-screen w-screen bg-gray-100 flex justify-center items-center'}>
        <div className={'h-3/5 w-screen  bg-purple-400'}>
        screen 3
        </div>
      </div>
      <div className={'h-screen w-screen bg-gray-300'}>
        <h2 className={'text-center pt-10 sm:pt-44 text-3xl'}>How We Can Help You</h2>
        <p className={'text-center pt-0 sm:p-2 text-md'}>We help develop young artchpue companies and </p>
        <p className={'text-center'}>teams thast inovate when planning</p>
        <div className={'gap-1 p-5 sm:p-10 sm:gap-5 sm:flex-row flex flex-col justify-center items-center place-content-center '}>
          <PopUp/>
          <PopUp />
          <PopUp/>
          {/* {popUpClick ? <PopUpTitle handlePopUpClick={handlePopUpClick}/> : <PopUp handlePopUpClick={handlePopUpClick}/>} */}
          {/* <PopUp handlePopUpClick={handlePopUpClick} />
          <PopUp handlePopUpClick={handlePopUpClick}/>
          <PopUp handlePopUpClick={handlePopUpClick}/> */}
        </div>
      </div>
      <div className={'sm:hidden bg-gray-500 h-20 w-screen'}>

      </div>
      <div className={'h-screen w-screen bg-gray-400'}>
      <h2 className={'text-center items-center pt-10 sm:pt-44 text-3xl'}>What our clienrs say</h2>
        <div className={'flex sm:flex-row flex-col gap-1 sm:gap-5 justufy-center items-center place-content-center pt-5 sm:pt-10'}>
          <CustomerReview name={"Name Last Name"} companyName={"company name"} img={"img"}
            line1={"text text text text text text text text text text"}
            line2={"text text text text text text text text text text"}
            line3={"text text text text text text text text text text"}
            line4={"text text text text text "}/>
          <CustomerReview name={"Name Last Name"} companyName={"company name"}
             line1={"text text text text text text text text text text"}
             line2={"text text text text text text text text text text"}
             line3={"text text text text text text text text text text"}
             line4={"text text text text text "}/>
          <CustomerReview name={"Name Last Name"} companyName={"company name"}
             line1={"text text text text text text text text text text"}
             line2={"text text text text text text text text text text"}
             line3={"text text text text text text text text text text"}
             line4={"text text text text text "}/>
        </div>
      </div>
      <div className={'sm:hidden bg-gray-500 h-20 w-screen'}
         line1={"text text text text text text text text text text"}
         line2={"text text text text text text text text text text"}
         line3={"text text text text text text text text text text"}
         line4={"text text text text text "}>

      </div>
    </div>
  );
}

export default App;
