import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from '@tabler/icons-react'
import { Brain } from 'lucide-react'
import React from 'react'


const footerLinks = {
    product: [
        { name: "Features", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "API", href: "#" }
    ],
    company: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" }
    ],
    resources: [
        { name: "Community", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Partners", href: "#" },
        { name: "Status", href: "#" }
    ],
    legal: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "Security", href: "#" },
        { name: "Cookies", href: "#" }
    ]
};

const Footer = () => {
    return (
        <div className='w-screen flex justify-center'>
            <footer className="w-6xl pt-24 pb-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12">
                        <div className="col-span-2">
                            <div className="flex items-center space-x-2 mb-4">
                                <Brain className="w-8 h-8 text-primary" />
                                <span className="text-xl font-bold">Infovault</span>
                            </div>
                            <p className="text-muted-foreground mb-6 max-w-md">
                                Your AI-powered second brain for storing, organizing, and retrieving digital knowledge.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    <IconBrandTwitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    <IconBrandFacebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    <IconBrandInstagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    <IconBrandLinkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                    <IconBrandGithub className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Product</h4>
                            <ul className="space-y-2">
                                {footerLinks.product.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2">
                                {footerLinks.company.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Resources</h4>
                            <ul className="space-y-2">
                                {footerLinks.resources.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-border/40 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-muted-foreground text-sm">
                                © 2025 Infovault. All rights reserved.
                            </p>
                            <div className="flex space-x-6 mt-4 md:mt-0">
                                {footerLinks.legal.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer