import React, { useState, useEffect } from 'react';

export default function FavItem({ color, copyFuc, favFunc, favColors, setFavColors }) {
  const [boxColor, setBoxColor] = useState(''); 
  const [inputValue, setInputValue] = useState(color.name); // state for input value

  //handles changing name of fav color
  function handleChange(event) {
    setInputValue(event.target.value); 

    // Updates the favColors array with the new name
    setFavColors((prevFavColors) =>
      prevFavColors.map((item) =>{
        if(item.hex === color.hex){
          return { ...item, name: event.target.value };
        }else{
          return item;
        }
      })
    );
  }

  //sets initial values for states
  useEffect(() => {
    setBoxColor(color.hex);     
    setInputValue(color.name); 
  }, [color]);

  return (
    <div className='bg-black/40 mb-3 ml-3 w-[200px] sm:w-[275px] p-1 flex flex-row items-center rounded-lg'>
      <div className='h-[30px] w-[30px] ml-[10px]' style={{ backgroundColor: boxColor }}></div>
      {/* NAME INPUT */}
      <input
        className='ml-[10px] text-gray-300 text-[80%] w-[95px] bg-transparent absolute left-[50px] border-none'
        value={inputValue} // Bind the input value to the state
        onChange={handleChange} // Update the state on input change
      />
      {/* COPY BUTTON */}
      <span onClick={() => { copyFuc(color.hex) }} className='ml-auto p-1 pl-[5px] pr-[5px] rounded-[5px] text-gray-300 ml-[200px] transition-all duration-300 hover:bg-[#616161]'>
        <i className="fa fa-file-o" aria-hidden="true"></i>
      </span>
      {/* DELETE BUTTON */}
      <span onClick={() => { favFunc(color.hex) }} className='ml-auto pl-[5px] pr-[5px] p-[5px] rounded-[5px] absolute left-[225px] sm:left-[300px] bg-transparentRed text-white transition-all duration-300 hover:bg-[#cecece] hover:text-black'>
        <i className="fa fa-trash-o" aria-hidden="true"></i>
      </span>
    </div>
  );
}