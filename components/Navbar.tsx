import { Brain } from "lucide-react"
import { Button } from "./ui/button"
import { ColourfulText } from "./ui/colourful-text"
import { ModeToggle } from "./ui/Mode-toggle"


const Navbar = () => {
  return (
    <div className="hidden sm:flex justify-center ">
      <div className="border-1 border-border/100 backdrop-blur-xs fixed w-6xl z-50 bg-background/20 rounded-2xl mt-2">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold"><ColourfulText text="Infovault" /></span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <Button className="bg-primary text-primary-foreground hover:cursor-pointer">Get Started</Button>
            <ModeToggle/>
          </div>
        </div>
      </div>
      

    </div>

  )
}

export default Navbar