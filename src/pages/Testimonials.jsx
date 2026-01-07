import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Lavanya",
      location: "Canada",
      rating: 5,
      text: "Dear Coach, I should say... Happiness Restorer. I cannot express how grateful I am for your guidance and support. Working with you has been life-changing. The small changes you suggested—positive affirmations, letting go of complaints, expectations and accepting others made a big shift in my mindset. I feel more at peace and in control of my emotions, and for the first time in a while, I am genuinely happy. It's like things around me started changing without me doing anything. It honestly feels like a kind of magic worked! I realize it's the power of mindset and self-awareness that you helped me unlock. Thanks a ton for helping me find my happiness again!",
      treatment: "Mindset & Happiness Coaching"
    },
    {
      id: 2,
      name: "Sasikala",
      location: "Sivakasi",
      rating: 5,
      text: "When I first attended healing sessions with Uma, I was in a state of deep depression and unable to face any problem without feeling overwhelmed by negativity. At that time, I was going through financial ruin, personal struggles, property disputes, and concerns about my children’s health. During one of our conversations, we spoke about coaching, and I decided to start it. From there, everything began to change — I started thinking positively, which led to major improvements in my life, including buying a new home and many other blessings. The most valuable lesson I learned was acceptance, and that opened new doors for me. Today, when I look at where I stand, I am amazed at what I have achieved. All of this became possible because of the coaching. Thank you, Uma!",
      treatment: "Life Transformation Coaching"
    },
    {
      id: 3,
      name: "Arjun",
      location: "Chennai",
      rating: 5,
      text: "Before attending the healing session, I was under a lot of pressure and anxiety. It was my 10th board exam, and I was worried that my low performance might stop me from getting my desired group. But after the healing, I felt a huge shift in my confidence. I faced the board exams calmly, achieved exactly what I had hoped for, and was overjoyed to see my 80% score. I was able to secure the Bio-Math group with flying colours — all thanks to Uma aunty.",
      treatment: "Student Confidence Building"
    },
    {
      id: 4,
      name: "Revathi",
      location: "Trichy",
      rating: 5,
      text: "I had been facing problems at home for a long time, and during that period, I even had suicidal thoughts. I felt cornered, filled with anger toward my husband—anger I couldn’t put into words. Then, a friend introduced me to Uma. Through her coaching, I began to feel positive energy and learned to recognize and correct my mistakes. Now, I’ve let go of negative thinking and found a smoother, happier life. The reason for this new beginning is Uma. Thank you, Uma.",
      treatment: "Emotional & Relationship Healing"
    },
    {
      id: 5,
      name: "Reshma",
      location: "Coimbatore",
      rating: 5,
      text: "Last year, I had irregular periods, and Uma's coaching helped me overcome the issue. I no longer face irregularities, and I feel better both physically and emotionally. Her guidance also contributed to my overall well-being and gave me a sense of mental peace during times when I used to feel overwhelmed.",
      treatment: "Women's Wellness Coaching"
    },
    {
      id: 6,
      name: "Amar lal",
      location: "Madurai",
      rating: 5,
      text: "I was struggling with loneliness, fear, and stomach pain when I first visited Uma. She patiently worked on finding the root cause and helped me solve each issue step by step. I’m an auto driver, but I had a strange fear of traveling outside my city. After her sessions, I was able to travel alone to Rameshwaram and overcome that fear. She regularly checks in and provides solutions. I also faced a delay in marriage until the age of 34, and Uma supported me through her treatment, easing my loneliness. I had an ulcer and tried many treatments, but with her consistent guidance and classes, my stomach pain healed. Today, I have a healthy body and mind. Thank you, Uma.",
      treatment: "Holistic Healing for Mind & Body"
    },
    {
      id: 7,
      name: "Sakti",
      location: "Tirunelveli",
      rating: 5,
      text: "I've been fearful since childhood, afraid of talking to people, seeing them, and worrying that bad things would happen to me if they happened to others. My father introduced me to Uma mam's coaching. As I spoke with her, she taught me many things, explaining that what I felt wasn't real fear. The coaching was very beneficial, and I now understand many things. My life feels different now; I can see how needlessly I used to be afraid. I'm clear-headed and feel there's no longer any need to be afraid. Thanks to Uma ma'am for transforming me. My family is happy to see me this way.",
      treatment: "Holistic Healing",
      audioSrc: "https://audio.jukehost.co.uk/wGAKYeq2hYHM4onOa64lghKLfZVOBTvM"
    },
    {
      id: 8,
      name: "Hema",
      location: "Dindugul",
      rating: 5,
      text: "Hi, this is Hema. I had heard about Uma's coaching a year and a half ago, but I took it lightly at the time. I'm from out of town and am currently staying with my parents. I knew she had coached a girl whose results were superb. I have struggled a lot and faced many challenges in my life. Now, she is coaching me, and I feel much better. I had significant financial difficulties, but since starting her coaching, I have been able to secure one order after another in my work. This has allowed me to become financially stable. I am now referring my husband to her as well. Thank you.",
      treatment: "Holistic Healing for Finance",
      audioSrc: "https://audio.jukehost.co.uk/oEAX1CpCG5ilqYBmrfcWuAon8P8UziJO"
    },
    {
      id: 9,
      name: "Kumaran",
      location: "Madurai",
      rating: 5,
      text: "A heartfelt message shared directly after our session:",
      treatment: "Personal Transformation",
      imageSrc: "https://i.ibb.co/dwDsB7K9/Whats-App-Image-2025-12-11-at-10-40-13-PM.jpg"
    },
    {
      id: 10,
      name: "Ratan",
      location: "Madurai",
      rating: 5,
      text: "Feedback shared via WhatsApp:",
      treatment: "Holistic Therapy",
      imageSrc: "https://i.ibb.co/TxsV74Vj/Whats-App-Image-2026-01-07-at-8-32-37-PM.jpg"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Client Testimonials - UmaPandian Holistic Therapy | Real Reviews</title>
        <meta name="description" content="Read genuine testimonials and listen to audio reviews from clients who have experienced transformation through UmaPandian's holistic therapy sessions." />
      </Helmet>

      <div className="min-h-screen py-20 font-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gradient mb-2">
              "Happiness Is Our Birth Right!"
            </h2>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-6">
              What Clients Say
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from those who have experienced transformation through holistic therapy.
              Their stories inspire and guide others on their healing journey.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F9EBF8] rounded-2xl p-8 shadow-lg hover-lift relative flex flex-col"
              >
                <div className="absolute top-4 right-4 text-accent-gold opacity-20">
                  <Quote className="w-8 h-8" />
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Conditional rendering for Image, Audio, or Text */}
                {testimonial.imageSrc ? (
                  <div className="flex-grow">
                    <p className="text-gray-700 mb-4 font-bold leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="rounded-lg overflow-hidden border-2 border-white shadow-sm">
                      <img 
                        src={testimonial.imageSrc} 
                        alt="Client WhatsApp Testimonial" 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                ) : testimonial.audioSrc ? (
                  <>
                    <p className="text-gray-700 mb-4 font-bold leading-relaxed flex-grow">
                      "{testimonial.text}"
                    </p>
                    <audio controls className="w-full">
                      <source src={testimonial.audioSrc} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </>
                ) : (
                  <p className="text-gray-700 mb-6 font-bold leading-relaxed flex-grow">
                    "{testimonial.text}"
                  </p>
                )}

                <div className="border-t pt-4 mt-4">
                  <div className="font-heading font-semibold text-[#49225B]">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 mb-2">{testimonial.location}</div>
                  <div className="text-sm text-[#B8860B] font-medium">
                    {testimonial.treatment}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
