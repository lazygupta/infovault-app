import React from 'react'
import { motion } from "motion/react"


import { Button } from './ui/button'
import {  Brain } from 'lucide-react'
import { BackgroundBeams } from './ui/background-beams'
import { TextGenerateEffect } from './ui/text-generate-effect'

const Hero = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <>
            <div className="relative mx-auto px-4 pt-42 h-full sm:h-screen pb-10 z-20">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={fadeIn}
                    className="text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center mb-6"
                    >
                        <Brain className="w-20 h-20 text-primary" />
                    </motion.div>
                    <motion.h1
                        className='m-2'
                    >
                        <TextGenerateEffect className='text-3xl' words="Your Personal AI Knowledge Assistant" />

                    </motion.h1>
                    <motion.p
                        className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto m-6"
                    >
                        Never forget anything important. Store, organize, and retrieve your digital memories with Brainly - your personal AI-powered knowledge management system.
                    </motion.p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button size="lg" className="bg-primary text-primary-foreground hover:cursor-pointer">Get Started</Button>

                    </motion.div>

                </motion.div>

                <BackgroundBeams className='absolute -z-10' />
            </div>


        </>

    )
}

export default Hero