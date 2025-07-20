"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Server,
  Smartphone,
  Star,
  Users,
  Coffee,
  Award,
  ArrowRight,
  Linkedin,
  Twitter,
  Heart,
  Phone,
  MapPin,
} from "lucide-react";
import Particles from "@/components/particles";

const projects = [
  {
    title: "Modern E-commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
    github: "#",
    live: "#",
    category: "E-commerce",
  },
  {
    title: "Fashion Store",
    description:
      "Responsive fashion e-commerce site with advanced filtering, wishlist, and shopping cart functionality.",
    tech: ["React", "Node.js", "MongoDB", "Express", "PayPal API"],
    image:
      "https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=400",
    github: "#",
    live: "#",
    category: "E-commerce",
  },
  {
    title: "Tech Blog Platform",
    description:
      "Modern blog platform with markdown support, comments system, and SEO optimization.",
    tech: ["Next.js", "MDX", "Tailwind CSS", "Vercel", "Contentful"],
    image:
      "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=400",
    github: "#",
    live: "#",
    category: "Blog",
  },
  {
    title: "Digital Agency Website",
    description:
      "Professional agency website with portfolio showcase, team profiles, and contact forms.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Sanity CMS"],
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
    github: "#",
    live: "#",
    category: "Agency",
  },
  {
    title: "Project Management SaaS",
    description:
      "Comprehensive project management tool with team collaboration, time tracking, and reporting features.",
    tech: ["React", "Node.js", "Socket.io", "Redis", "MySQL"],
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
    github: "#",
    live: "#",
    category: "SaaS",
  },
  {
    title: "Real Estate Platform",
    description:
      "Comprehensive real estate platform with property listings, virtual tours, and agent management.",
    tech: ["Next.js", "TypeScript", "Mapbox", "Prisma", "Cloudinary"],
    image:
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400",
    github: "#",
    live: "#",
    category: "Real Estate",
  },
];

const skills = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Prisma", category: "ORM" },
  { name: "AWS", category: "Cloud" },
  { name: "Vercel", category: "Deployment" },
];

const features = [
  {
    icon: Code,
    title: "Full Stack Development",
    description:
      "End-to-end web application development from database design to user interface implementation with modern technologies.",
  },
  {
    icon: Server,
    title: "Backend Architecture",
    description:
      "Scalable server-side solutions with RESTful APIs, database optimization, and cloud deployment strategies.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Responsive and progressive web applications that deliver exceptional user experiences across all devices.",
  },
  {
    icon: Palette,
    title: "Performance Optimization",
    description:
      "Code optimization, lazy loading, and performance monitoring to ensure lightning-fast web applications.",
  },
];

const stats = [
  { icon: Star, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
  { icon: Award, value: "3+", label: "Years Experience" },
];

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-32 lg:px-8 overflow-hidden">
        <Particles />
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center rounded-full border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
                <Code className="mr-2 h-4 w-4" />
                Full Stack Developer
              </div>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Md.Tofayel Islam
              </span>
            </h1>
            <p className="mb-10 text-lg leading-8 text-muted-foreground sm:text-xl">
              Passionate full-stack developer crafting modern web experiences
              with cutting-edge technologies. Specializing in React, Next.js,
              and scalable backend solutions.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="mailto:tofayeltuhin143@gmail.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Get In Touch
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="about" className="px-6 py-16 lg:px-8 bg-muted/50">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 text-blue-400">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specialized skills and technologies I use to build exceptional web
              applications.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border-border/50 hover:border-blue-500/50">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/10 text-blue-500 transition-all duration-300 group-hover:bg-blue-600/20 group-hover:scale-110">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-center text-muted-foreground leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="px-6 py-16 lg:px-8 bg-muted/50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proficient in modern web technologies and frameworks, with
              expertise in building scalable applications.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-4 text-center transition-all duration-300 hover:border-blue-500/50 hover:shadow-md"
              >
                <div className="text-sm font-medium">{skill.name}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {skill.category}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore my portfolio of diverse web applications, from e-commerce
              platforms to SaaS solutions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 border-border/50 hover:border-blue-500/50">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" asChild>
                        <a
                          href={project.github}
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700"
                        asChild
                      >
                        <a
                          href={project.live}
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-16 lg:px-8 bg-muted/50">
        <div className="mx-auto max-w-4xl">
          <Card className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-center border-border/50">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your ideas and turn them into reality. I'm here to
                help you build something amazing.
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                asChild
              >
                <a
                  href="mailto:tofayeltuhin143@gmail.com"
                  className="flex items-center gap-2"
                >
                  Let's Talk
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Let's connect and create something amazing together.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href="mailto:tofayeltuhin143@gmail.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Send Email
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/yel-59" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10 "
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-black dark:text-transparent dark:bg-gradient-to-r dark:from-blue-400 dark:to-orange-400 dark:bg-clip-text">
              Let's Work Together
            </h2>

            <p className="text-xl text-black dark:text-teal-300 mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting
              projects. Let's create something amazing together!
            </p>

            <div className="grid md:grid-cols-3  mb-12">
              <div className="border-b-2 border-r-2 bg-white/5 backdrop-blur-sm  p-6 hover:bg-white/10 transition-all">
                <Mail className="text-blue-400 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">tofayeltuhin143@gmail.com</p>
              </div>
              <div className="border-t-2 border-r-2 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-all">
                <Phone className="text-blue-400 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-400">+880 170 890 1418</p>
              </div>
              <div className="border-b-2  bg-white/5 backdrop-blur-sm  p-6 hover:bg-white/10 transition-all">
                <MapPin className="text-blue-400 mx-auto mb-4" size={32} />
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-gray-400">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="border  bg-white/5 backdrop-blur-sm p-4 rounded-full hover:bg-white/10 transition-all transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="border bg-white/5 backdrop-blur-sm p-4 rounded-full hover:bg-white/10 transition-all transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:tofayeltuhin143@gmail.com"
                className="border bg-white/5 backdrop-blur-sm p-4 rounded-full hover:bg-white/10 transition-all transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 px-6 py-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <h3 className="text-xl font-bold">Md.Tofayel Islam</h3>
                <p className="text-muted-foreground mt-2">
                  Full Stack Developer passionate about creating exceptional web
                  experiences.
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://github.com/yel-59"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="mailto:tofayeltuhin143@gmail.com"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#projects"
                    className="hover:text-foreground transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="hover:text-foreground transition-colors"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Web Development</li>
                <li>E-commerce Solutions</li>
                <li>SaaS Applications</li>
                <li>API Development</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-muted-foreground text-sm">
                &copy; 2025 Md.Tofayel Islam. All rights reserved.
              </p>
              <p className="flex items-center gap-1 text-muted-foreground text-sm">
                Made with <Heart className="h-4 w-4 text-red-500" /> using
                Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
