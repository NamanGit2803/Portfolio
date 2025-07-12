import React, { use, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { navLinks } from '@/constants.js'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {

    // animation 
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        })

        navTween.fromTo("nav", {
            backgroundColor: 'transparent',
        },
            {
                backgroundColor: '#00000050',
                backdropFilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.inOut'
            })

    }, [])




    const isLinkeActive = () => {

    }


    return (
        <nav className='nav'>
            <div className='div'>
                {/* logo  */}
                <a href='/' className='logo flex gap-1.5 items-center w-[10%]'>
                    <div className='w-[25%] bg-white rounded-[1px]'><ChevronRight className='text-black w-[1.3rem]' /></div>
                    <p>NJ</p>
                </a>

                {/* links  */}
                <ul>
                    {navLinks.map((links, index) => {
                        return (
                            <li>
                                <a key={links.id} href="/">{links.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar