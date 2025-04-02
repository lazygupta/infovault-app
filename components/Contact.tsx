import React from 'react'
import { motion } from 'motion/react'
import { MailIcon, MapPin, PhoneIcon } from 'lucide-react'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const Contact = () => {
    return (
        <div className="py-24 bg-background">
            <div className="mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-xl text-muted-foreground">
                        Have questions? We'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <MailIcon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <p className="text-muted-foreground">contact@lazyrabbit.space</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <PhoneIcon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold">Phone</h4>
                                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold">Location</h4>
                                <p className="text-muted-foreground">San Francisco, CA</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Input placeholder="First Name" className="bg-muted/50" />
                            <Input placeholder="Last Name" className="bg-muted/50" />
                        </div>
                        <Input placeholder="Email" className="bg-muted/50" />
                        <Input placeholder="Subject" className="bg-muted/50" />
                        <Textarea
                            placeholder="Your Message"
                            className="bg-muted/50 min-h-[150px]"
                        />
                        <Button className="w-full bg-primary text-primary-foreground">
                            Send Message
                        </Button>
                    </motion.div>
                </div>
            </div>
        </div>

    )
}

export default Contact