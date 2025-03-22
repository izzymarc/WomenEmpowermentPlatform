import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronRight, Globe, Users, Heart, ArrowRight, Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from 'react';

interface CountUpAnimationProps {
  target: number;
  duration?: number;
}

const CountUpAnimation = ({ target, duration = 2000 }: CountUpAnimationProps) => {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);
  const countRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = countRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;

    let startTime: number | undefined;
    const startValue = 0;
    const step = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime!) / duration, 1);

      setCount(Math.floor(progress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return <span ref={countRef}>{count}</span>;
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary/70" />
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/images/pattern.svg')",
            backgroundSize: "30px 30px",
            scale,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-4 inline-block"
              >
                <span className="px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium">
                  Global Initiative for Women's Empowerment
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Empowering Women,{" "}
                <span className="bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
                  Building Futures
                </span>
              </h1>
              <p className="text-xl mb-8 text-white/80 leading-relaxed max-w-2xl">
                We've empowered <strong className="text-accent">25,000+ women</strong> across 
                West Africa through:
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-accent" />
                    Vocational training programs
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-accent" />
                    GBV prevention initiatives
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2 text-accent" />
                    Leadership development workshops
                  </li>
                </ul>
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/programs">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 group">
                    Explore Programs 
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                    Get Involved
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-white/10 rounded-lg blur" />
                <img
                  src="/images/women-empowerment.jpg"
                  alt="Group of women collaborating in a workshop session"
                  className="rounded-lg relative z-10 w-full h-[600px] object-contain object-center"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-lg" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white/70">
            <span className="text-sm mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight className="h-6 w-6 rotate-90" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Mission Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Global Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Together, we're making a difference across communities worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                number: 120,
                label: "Communities Reached",
                description: "Across 15 countries"
              },
              {
                icon: Users,
                number: 25000,
                label: "Women Empowered",
                description: "Through our initiatives"
              },
              {
                icon: Heart,
                number: 35,
                label: "Active Programs",
                description: "Creating lasting impact"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-primary/5 rounded-lg transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative p-8 text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="text-4xl font-bold text-primary mb-2">
                    <CountUpAnimation target={stat.number} />
                    {stat.number >= 1000 ? "+" : ""}
                  </h3>
                  <p className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <p className="text-gray-600 flex items-center gap-1 cursor-help">
                          {stat.description}
                          <Info className="h-4 w-4 text-primary/50" />
                        </p>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-[300px] text-sm">
                        {stat.number === 120 && "Our community network spans rural and urban areas across 15 countries"}
                        {stat.number === 25000 && "Women trained in entrepreneurship, leadership, and technical skills since 2020"}
                        {stat.number === 35 && "Active initiatives including microfinance, health education, and legal advocacy"}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Voices of Change</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stories from women whose lives have been transformed
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              className="w-full"
              aria-label="Success stories carousel"
            >
              <CarouselContent>
                {[
                  {
                    quote: "The foundation's support changed my life. Their programs gave me the skills and confidence to start my own business.",
                    author: "Aisha M.",
                    role: "Entrepreneur",
                    location: "Abuja, Nigeria"
                  },
                  {
                    quote: "Through the foundation's advocacy programs, I found my voice and now help other women in my community.",
                    author: "Fatima K.",
                    role: "Community Leader",
                    location: "Kano, Nigeria"
                  },
                  {
                    quote: "The educational support I received opened new doors for my career. I'm grateful for their guidance.",
                    author: "Zainab H.",
                    role: "Education Advocate",
                    location: "Abuja, Nigeria"
                  }
                ].map((testimonial, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-6"
                    >
                      <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="mb-4 text-4xl text-primary/20">"</div>
                        <blockquote className="mb-4 text-lg text-gray-700">
                          {testimonial.quote}
                        </blockquote>
                        <footer>
                          <div className="font-semibold text-primary">{testimonial.author}</div>
                          <div className="text-sm text-gray-500">{testimonial.role}</div>
                          <div className="text-xs text-gray-400">{testimonial.location}</div>
                        </footer>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-4 flex justify-center gap-2">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Our Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for lasting change
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Gender-Based Violence (GBV) Prevention",
                description: "Comprehensive programs to prevent and respond to gender-based violence through education, legal support, and counseling services."
              },
              {
                title: "Skills Development",
                description: "Empowering women through vocational training and business skills development."
              },
              {
                title: "Community Support",
                description: "Building strong support networks and safe spaces for women to thrive."
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{program.title}</h3>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <Link href="/programs">
                    <Button variant="outline" className="w-full group">
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
