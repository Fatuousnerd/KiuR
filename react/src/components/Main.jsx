import React from 'react';
import Navbar from './Navbar';
import { useState } from 'react';
import { BackupRounded } from '@mui/icons-material'
import axios from 'axios';

const Main = () => {
  const [mode, setMode] = useState('reader');
  const [genVal, setGenVal] = useState('');
  const [scanVal, setScanVal] = useState('');
  const [kiur, setKiur] = useState('');
  const [load, setLoad] = useState(false);

  const handleGen = async () => {
    try {

      if (genVal === '') return;
      // setKiur(`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${genVal}`)
      console.log(genVal);
      const res = await axios.post('http://localhost:5678/webhook-test/a5ebe23a-cb32-4418-8de9-96c8abed8852', {
        genVal
      });
      setKiur(res);

    } catch (err) {
      console.error('Error generating QR', err);
    }
  };

  const handleScan = () => { };

  return (
    <>
      <Navbar />
      <div className="w-full h-screen relative flex items-center justify-center ">
        <div className="flex flex-col rounded-3xl p-[15px] gap-[15px] bg-[rgba(255,255,255,.5)] backdrop-blur-lg w-[600px] max-h-[650px] transition-all duration-300 ">

          <div className="flex gap-[25px] ">
            <button onClick={() => setMode('reader')} className={`p-[15px] rounded-lg border-[2px] border-[--MainText] outline-none ${mode === 'reader' ? 'bg-[--MainText] text-[--MainBg]' : 'bg-transparent text-[--MainText]'} flex-1 duration-150 transition-all `}>Scanner</button>
            <button onClick={() => setMode('gen')} className={`p-[15px] rounded-lg border-[2px] border-[--MainText] outline-none ${mode === 'gen' ? 'bg-[--MainText] text-[--MainBg]' : 'bg-transparent text-[--MainText]'} flex-1 duration-150 transition-all `}>Generator</button>
          </div>

          <div className="flex flex-[4] ">

            {mode === 'gen' &&
              <>
                <div className="flex flex-col flex-1 py-[25px] gap-[25px] items-center justify-around ">
                  <div className="flex flex-col w-full">
                    <label htmlFor="inp">Enter URL/Text</label>
                    <input type="text" name="inp" id="" onChange={(e) => setGenVal(e.target.value)} value={genVal} placeholder='URL/Text Here' className='p-[10px] bg-[--Glass] rounded-md outline-none ' />
                  </div>
                  <div className="flex gap-[25px] w-full justify-center ">
                    <button onClick={handleGen} className='w-7/12 p-[15px] rounded-md bg-[--MainText] text-[--MainBg] font-bold '>Generate</button>
                    {/* <button className='p-[15px] rounded-md bg-[--MainText] text-[--MainBg] font-bold '>Download</button> */}
                  </div>
                  {kiur !== '' && <img src={kiur} className="w-[300px] h-[300px] border-[3.5px] border-[--MainText] rounded-2xl flex items-center justify-center " />}
                </div>
              </>
            }

            {mode === 'reader' &&
              <>
                <div className="flex flex-col flex-1 items-center  justify-between gap-[25px] ">
                  <div className="flex flex-col w-full">
                    <label htmlFor="qr" className='flex item-center gap-[25px] bg-[--Glass] p-[15px] w-full '><BackupRounded /> Upload Qr Code</label>
                    <input type="file" name="" id="" className='hidden ' />
                  </div>
                  {/* <div className="flex w-[300px] h-[300px] bg-[--MainText] rounded-md "></div> */}
                </div>
              </>
            }

          </div>

        </div>
      </div>
    </>
  )
}

export default Main