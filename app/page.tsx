"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Smartphone, Eye, Moon, Download, Github, Linkedin, ChevronDown, Shield, Heart, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTheme } from "next-themes"

export default function RoastMeAI() {
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "sample-roasts", "download", "team"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <motion.div
                className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                RoastMe.AI
              </motion.div>
              {mounted && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </Button>
              )}
            </div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "sample-roasts", "download", "team"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section ? "text-pink-400" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {section.replace("-", " ")}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-pink-500/10 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-pink-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Let Your Habits
              </span>
              <br />
              <span className="text-foreground">Roast You.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Download RoastMe.AI and get brutally honest feedback on how you spend your digital life.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection("download")}
              >
                <Download className="mr-2 h-5 w-5" />
                Download APK
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative mx-auto w-64 h-96 bg-gradient-to-b from-muted to-muted-foreground/20 rounded-3xl p-2 shadow-2xl">
              <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Smartphone className="h-16 w-16 text-pink-400 mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">RoastMe.AI</p>
                  <p className="text-xs text-muted-foreground/70 mt-2">App Preview</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We analyze your digital habits and serve you the roasts you deserve
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Smartphone className="h-12 w-12" />,
                title: "Screen Time Addict",
                description: "Your phone knows you better than your family does",
                emoji: "📱",
              },
              {
                icon: <Eye className="h-12 w-12" />,
                title: "Doomscroll Master",
                description: "Professional at turning 5 minutes into 5 hours",
                emoji: "👁️",
              },
              {
                icon: <Moon className="h-12 w-12" />,
                title: "Night Owl Syndrome",
                description: "Sleep schedule? What's that?",
                emoji: "🦉",
              },
            ].map((habit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-card border-border hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4">{habit.emoji}</div>
                    <div className="text-pink-400 mb-4">{habit.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">{habit.title}</h3>
                    <p className="text-muted-foreground">{habit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sample Roasts Section */}
      <section id="sample-roasts" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                Sample Roasts
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Here's what our AI thinks about your digital lifestyle
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              "You open Instagram more than you open your fridge. At least your fridge has something useful inside.",
              "You've unlocked 'doomscrolling' as a lifestyle. Congratulations, you're now a professional pessimist.",
              "Your sleep schedule is a myth. Just like your productivity and your promises to go to bed early.",
            ].map((roast, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-border hover:border-pink-500/50 transition-all duration-300 p-8 rounded-2xl"
              >
                <div className="text-6xl mb-4">🔥</div>
                <p className="text-lg text-foreground italic leading-relaxed">"{roast}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                Ready to Get Roasted?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Download the APK and let AI judge your digital life choices
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-foreground px-12 py-6 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-8"
            >
              <Download className="mr-3 h-6 w-6" />
              Download APK
            </Button>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-green-400" />
                <span>Safe & Secure</span>
              </div>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <span>Android Only</span>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <span>No Ads</span>
            </div>

            <details className="bg-card border border-border rounded-lg p-6 text-left max-w-2xl mx-auto">
              <summary className="cursor-pointer text-lg font-semibold text-pink-400 hover:text-pink-300">
                FAQ: Is it safe? Does it collect data?
              </summary>
              <div className="mt-4 text-muted-foreground space-y-2">
                <p>
                  <strong className="text-foreground">Is it safe?</strong> Yes! Our APK is clean and doesn't contain any
                  malware.
                </p>
                <p>
                  <strong className="text-foreground">Data collection?</strong> We only analyze your usage patterns
                  locally. No personal data leaves your device.
                </p>
                <p>
                  <strong className="text-foreground">Permissions?</strong> We only request necessary permissions to
                  analyze your app usage.
                </p>
              </div>
            </details>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
                Built by the Roast Squad
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">Meet the team behind your digital reality check</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Kushal",
                role: "Mobile Developer",
                avatar: "📱",
                image: "/placeholder.svg?height=120&width=120",
              },
              {
                name: "Om",
                role: "Full Stack Developer",
                avatar: "💻",
                image: "/placeholder.svg?height=120&width=120",
              },
              { name: "Shalini", role: "AI/ML Engineer", avatar: "🤖", image: "/placeholder.svg?height=120&width=120" },
              { name: "Varnit", role: "AI/ML Engineer", avatar: "🧠", image: "/placeholder.svg?height=120&width=120" },
            ].map((member, index) => (
              <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.05 }} className="text-center">
                <Card className="bg-card border-border hover:border-pink-500/50 transition-all duration-300">
                  <CardContent className="p-8">
                    {/* Profile Image with Role Icon Overlay */}
                    <div className="relative mb-6">
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-pink-500/20 hover:border-pink-500/50 transition-colors duration-300">
                        <img
                          src={member.image || "/placeholder.svg"}
                          alt={`${member.name} - ${member.role}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Role Icon Badge */}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center text-lg shadow-lg">
                        {member.avatar}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                    <p className="text-pink-400 mb-4">{member.role}</p>
                    <div className="flex justify-center gap-3">
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center gap-6 mb-6">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-muted-foreground mb-2">Privacy-focused. No data collection. Just honest roasts.</p>
            <p className="text-muted-foreground/70 flex items-center justify-center gap-2">
              Made with <Heart className="h-4 w-4 text-red-500" /> by RoastMe Team
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
