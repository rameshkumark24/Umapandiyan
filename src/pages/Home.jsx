import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, UserCheck, HeartHandshake, Zap, Sunrise, Sparkles, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
// NEW: Import the Carousel components
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Home = () => {
  // Data for the home page testimonials section
  const homeTestimonials = [
    {
      id: 7,
      name: "Sakti",
      location: "Tirunelveli",
      rating: 5,
      text: "My life feels different now; I can see how needlessly I used to be afraid. I'm clear-headed and feel there's no longer any need to be afraid. Thanks to Uma ma'am for transforming me.",
      treatment: "Holistic Healing",
      audioSrc: "https://audio.jukehost.co.uk/wGAKYeq2hYHM4onOa64lghKLfZVOBTvM"
    },
    {
      id: 8,
      name: "Hema",
      location: "Dindugul",
      rating: 5,
      text: "I had significant financial difficulties, but since starting her coaching, I have been able to secure one order after another... This has allowed me to become financially stable.",
      treatment: "Holistic Healing for Finance",
      audioSrc: "https://audio.jukehost.co.uk/oEAX1CpCG5ilqYBmrfcWuAon8P8UziJO"
    },
    {
      id: 1,
      name: "Lavanya",
      location: "Canada",
      rating: 5,
      text: "Dear Coach, or should I say Happiness Restorer — I’m truly grateful for your guidance. The small changes you suggested—positive affirmations, letting go of complaints and expectations, and accepting others—have transformed my mindset. I feel peaceful, emotionally balanced, and genuinely happy again. It’s amazing how everything around me started shifting like magic. Thank you for helping me rediscover my happiness!",
      treatment: "Mindset & Happiness Coaching"
    },
    {
      id: 3,
      name: "Arjun",
      location: "Chennai",
      rating: 5,
      text: "Before the healing session, I was anxious and under pressure about my 10th board exams. After the session, my confidence grew, and I faced the exams calmly, scoring 80% and securing the Bio-Math group I wanted. All thanks to Uma aunty for this amazing transformation!",
      treatment: "Student Confidence Building"
    },
    {
      id: 5,
      name: "Reshma",
      location: "Coimbatore",
      rating: 5,
      text: "Last year, I had irregular periods, and Uma's coaching helped me overcome the issue. I no longer face irregularities, and I feel better both physically and emotionally. Her guidance also contributed to my overall well-being and gave me a sense of mental peace during times when I used to feel overwhelmed.",
      treatment: "Women's Wellness Coaching"
    }
  ];

  return (
    <>
      <Helmet>
        <title>UmaPandiyan - Holistic Therapist | Life Coach.</title>
        <meta
          name="description"
          content="Experience transformative holistic therapy with Uma Pandiyan. Personalized healing sessions combining ancient wisdom with modern techniques for your complete wellness journey."
        />
      </Helmet>

      {/* Hero Section (Unchanged) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden font-body">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-primary-lightest opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.h2
                className="text-4xl md:text-6xl font-heading font-bold text-gradient mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                No more Procrastination, only Transformation.
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                To empower individuals to overcome emotional, physical, and spiritual blocks — and to guide them
                toward a fulfilled, purpose-driven life.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeZMmTnBnXvEx86B3K_aUfscQ0h7WAtWAAXurrYfwAcDeCeoQ/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-[#B8860B] text-white hover:bg-white hover:text-[#B8860B] border border-[#B8860B] px-8 py-3 text-lg pulse-glow shadow-lg transition-colors duration-300">
                    Book Your Session
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
                <Link to="/about">
                  <Button
                    variant="outline"
                    className="border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white px-8 py-3 text-border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white px-8 py-3 text-lg"
                  >
                    Learn More About Me
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 gold-gradient-bg rounded-full blur-3xl opacity-30 floating-animation"></div>

                <video
                  className="relative z-10 w-full h-auto rounded-2xl shadow-2xl hover-lift"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source
                    src="https://ik.imagekit.io/rxkzfoqlj/VN20251006_220121.mp4?updatedAt=1759768396065"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings Section (Unchanged) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-4"> My Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto"></p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: UserCheck, title: 'One-on-One Life Coaching', description: '(Online/Offline)' },
              { icon: HeartHandshake, title: 'Emotional Healing & Energy Work' },
              { icon: Zap, title: 'Personal Breakthrough Sessions' },
              { icon: Sunrise, title: 'Spiritual Mentoring' },
              { icon: Sparkles, title: 'Relationship healing and coaching', description: 'Based on personal needs' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-6 rounded-2xl bg-gradient-to-br from-[#F5EBFA] to-white hover-lift ${
                  index === 4 ? 'lg:col-start-2' : ''
                }`}
              >
                <div className="w-16 h-16 mx-auto mb-4 gold-gradient-bg rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-[#49225B] mb-3">{feature.title}</h3>
                {feature.description && <p className="text-gray-600">{feature.description}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section (Unchanged) */}
      <section className="py-20 bg-white font-body">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-tr from-[#E7DBEF] to-[#F5EBFA]"
          >
            <blockquote className="text-2xl md:text-3xl font-heading font-bold text-[#49225B] italic">
              "What people think is a problem is the simply hidden opportunity to raise!"
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* UPDATED Testimonials Section */}
      <section className="py-20 bg-white font-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-6">
              Words from a Transformed Life
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Listen to the real stories of transformation and healing directly from my clients.
            </p>
          </motion.div>

          {/* Carousel replaces the grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
            >
              <CarouselContent>
                {homeTestimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <div className="bg-[#F9EBF8] rounded-2xl p-8 shadow-lg hover-lift relative flex flex-col h-full">
                        <div className="absolute top-4 right-4 text-accent-gold opacity-20">
                          <Quote className="w-8 h-8" />
                        </div>

                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>

                        {testimonial.audioSrc ? (
                          <>
                            <p className="text-gray-700 mb-4 font-bold leading-relaxed flex-grow italic">
                              "{testimonial.text}"
                            </p>
                            <audio controls className="w-full mt-4">
                              <source src={testimonial.audioSrc} type="audio/mpeg" />
                              Your browser does not support the audio element.
                            </audio>
                          </>
                        ) : (
                          <p className="text-gray-700 mb-6 font-bold leading-relaxed flex-grow italic">
                            "{testimonial.text}"
                          </p>
                        )}

                        <div className="border-t pt-4 mt-auto">
                          <div className="font-heading font-semibold text-[#49225B]">{testimonial.name}</div>
                          <div className="text-sm text-gray-600 mb-2">{testimonial.location}</div>
                          <div className="text-sm text-[#B8860B] font-medium">
                            {testimonial.treatment}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </motion.div>
          
          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button
                variant="outline"
                className="border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white px-8 py-3 text-border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white px-8 py-3 text-lg"
              >
                View More Testimonials
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section (Unchanged) */}
      <section className="py-20 gradient-bg font-body">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to Begin Your Healing Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards a more balanced, peaceful, and fulfilling life. Book your personalized
              holistic therapy session today.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeZMmTnBnXvEx86B3K_aUfscQ0h7WAtWAAXurrYfwAcDeCeoQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-white text-[#49225B] hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg">
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
