import React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'





const SpinCounter = ({spinIcon, imgClass, spinIdx, name}) => {
    const [spinCount, setSpinCount] = useState(0);
    const [globalSpinCount, setGlobalSpinCount] = useState(0);
    // useEffect(() => {
    //     const spinningElement = document.querySelector(`#spin-${spinIdx}`);
    //     let isSpinning = false;
    
    //     const handleTransitionEnd = () => {
    //       if (isSpinning) {
    //         setSpinCount(prevCount => prevCount + 1);
    //       }
    //       isSpinning = !isSpinning;
    //     };
    
    //     spinningElement.addEventListener('transitionend', handleTransitionEnd);
    
    //     return () => {
    //       spinningElement.removeEventListener('transitionend', handleTransitionEnd);
    //     };
    //   }, []);

    useEffect(() => {
        const spinningElement = document.querySelector(`#spin-${spinIdx}`);
        let isSpinning = false;
    
        const handleTransitionEnd = () => {
          if (isSpinning) {
            setSpinCount(prevCount => prevCount + 1);
            if (spinCount + 2 > 10 && globalSpinCount === 0) {
              fetch('/api/spins', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: spinCount + 1, skill: name })
              }
              )
                .then(response => response.json())
                .then(data => {
                  console.log("success:", data)
                setGlobalSpinCount(data.amount);
                  // Handle the response if needed
                })
                .catch(error => {
                  // Handle errors
                });
            }
          }
          isSpinning = !isSpinning;
        };
    
        spinningElement.addEventListener('transitionend', handleTransitionEnd);
    
        return () => {
          spinningElement.removeEventListener('transitionend', handleTransitionEnd);
        };
      }, [spinCount, globalSpinCount]);

  return (
<>
<Image id={`spin-${spinIdx}`} src={spinIcon} alt="spinning icon" className={imgClass} />
{spinCount > 0 && globalSpinCount < 1 && <div className="text-xl font-semibold">{spinCount}</div>}
{spinCount >=3 && spinCount <= 5 && globalSpinCount < 1 && <div className="text-xl font-semibold">Keep Spinning!</div>}
{spinCount > 5 && globalSpinCount < 1 && <div className="text-xl font-semibold">Great Job!</div>}
{spinCount > 7 && globalSpinCount < 1 && <div className="text-xl font-semibold">Almost There!</div>}

{globalSpinCount > 0 && <div className="text-xl font-semibold">Global Accumulated Spins:{globalSpinCount}</div>}
{globalSpinCount > 0 && <div className="text-xl font-semibold">Thanks for uploading spins!</div>}

</>
  )
}

export default SpinCounter