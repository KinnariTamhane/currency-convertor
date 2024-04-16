import React, { Fragment, useState, useRef } from 'react'

function ConvertorContainer() {

  const countries:string[] = ['India','USA','UK'];

  const [selectedCountry, setSelectedCountry] = useState<string>(countries[0]);
  const [amount, setAmount] = useState<number>(0);

  const [INR, setINR] = useState<number>(0);
  const [dollar, setDollar] = useState<number>(0);
  const [pound, setPound] = useState<number>(0);

  const handleSelectChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value)
  }
  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.valueAsNumber;
    setAmount(newValue);
  };

  const handleConversion = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    switch(selectedCountry){
      case 'India':
          setINR(amount);
          setPound(amount* 0.0096);
          setDollar(amount* 0.012);
          break;
      case 'USA' :
          setINR(amount*83.611363);
          setPound(amount* 0.80);
          setDollar(amount);
        break;
      case 'UK' :
          setINR(amount*104.05);
          setPound(amount);
          setDollar(amount*1.24);
          break;
    }
  }

  return (
    <Fragment>
        <div className='text-left mt-5 md:w-[400px]'>
          <form className='grid' onSubmit={handleConversion}>
            <label className='text-xl font-bold'>Enter Amount  : </label>
            <input className='focus-0 outline-0 block my-3 px-4 py-2' type="number" value={amount} onChange={handleInputChange} ></input>
            <label className='text-xl font-bold'>Select Country : </label>
            <select className='focus-0 outline-0 block my-3 px-4 py-2' value={selectedCountry} onChange={handleSelectChange}>
                 {
                  countries.map((element,key) => {
                    return(
                      <option key={key}>{element}</option>
                    )
                  })
                 }
            </select>
            <button type="submit" className='mt-5 border rounded-xl border-white bg-white px-4 py-2 block text-black hover:text-white hover:bg-black'>Convert</button>
          </form>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div>
            <p className='mb-4'>India (INR) : {Math.round(INR * 100) / 100}</p>
            <p className='mb-4'>USA (Dollar) : {Math.round(dollar * 100) / 100}</p>
            <p className='mb-4'>UK (Pound) : {Math.round(pound * 100) / 100}</p>
          </div>
        </div>
    </Fragment>
  )
}

export default ConvertorContainer