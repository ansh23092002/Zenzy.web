import React from 'react'
import AnimatedTitle from './AnimatedTitle'
import { useRef } from 'react';
import RoundedCorners from './RoundedCorners';
import gsap from 'gsap';
import Button from './Button';
const Story = () => {

     const frameRef = useRef(null);

    const  handleMouseLeave =()=>{
        const element = frameRef.current;
        gsap.to(element,{
                duration:0.3,
                rotateX:0,
                rotateY:0,
                ease:'power1.inOut'
            })

    };

    const handleMouseMove =(e)=>{
            const {clientX,clientY} =e;
            const element = frameRef.current;
            
            if(!element) return;

            const rect = element.getBoundingClientRect();
            const X = clientX-rect.left;
            const Y = clientY-rect.top;

            const centerX = rect.width/2;
            const centerY = rect.height/2;

            const rotateX = ((Y-centerY) / centerY) * -10;
            const rotateY = ((X-centerX) / centerX) * 10;

            gsap.to(element,{
                duration:0.3,
                rotateX,rotateY,
                transformPerspective:500,
                ease:'power1.inOut'
            })
    }

  return (
    <section id='story' className='min-h-dvh w-screen bg-black text-blue-custom-50'>
       <div className='flex size-full flex-col items-center py-10 pb-24'>
            <p className='font-general text-sm uppercase md:text-[10px]'>the multiversal ip world</p>
            <div className='relative size-full'> 
                <AnimatedTitle
                title="the st<b>ory</b> of <br/> a hidden real<b>m</b>"
                sectionId="story"
                containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"/>

                <div className='story-img-container'>
                    <div className='story-img-mask'>
                        <div className='story-img-content'>
                            <img src="/img/entrance.webp" alt="etrance"
                            ref={frameRef}
                            onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                            className='object-contain' />
                        </div>
                    </div>
                    <RoundedCorners/>
                </div>
            </div>
            <div className='-mt-80 flex w-full justify-center md:mt-64 md:me-44 md:justify-end'>
                <div className='flex h-full w-fit flex-col items-center md:items-start'>
                    <p className='mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start' >where realms converge, lies Zentry and the boundless pillar. Discover its secrets and shape your fate amidst
                        infinite opportunities. </p>
                        <Button id="realm-button" title="discover prologe" containerClass="mt-5 "/>
                </div>      
            </div>
       </div>
    </section>
  )
}

export default Story
