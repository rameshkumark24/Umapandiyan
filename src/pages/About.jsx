import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const About = () => {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title>About Uma Pandiyan - Holistic Therapist | My Journey & Philosophy</title>
        <meta name="description" content="Learn about Uma Pandiyan's journey as a holistic therapist, her philosophy on healing, and her mission to transform lives through compassionate, personalized therapy." />
      </Helmet>

      <div className="min-h-screen py-20 font-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-6 max-w-4xl mx-auto leading-relaxed tracking-normal">"Pain isn't the end — it's the beginning of evolution."</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Uma Pandiyan —   Life Coach & Healer</p>
          </motion.div>

          {/* Personal Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }}>
              <motion.img 
                whileHover={{
                  scale: 1.05,
                  y: -5
                }} 
                transition={{
                  type: "spring",
                  stiffness: 300
                }} 
                className="w-full h-auto rounded-2xl shadow-2xl" 
                alt="Uma Pandiyan, a professional and welcoming holistic therapist" 
                src="https://horizons-cdn.hostinger.com/06855022-5e70-4926-b448-1972a4aa9d6a/5d118f1464dc85e2ec88d29acde2d254.jpg" 
                onContextMenu={handleContextMenu}
              />
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.8
          }} viewport={{
            once: true
          }} className="space-y-6">
              <h2 className="text-3xl font-heading font-bold text-[#49225B]">My Journey</h2>
              <div className="space-y-4 text-gray-650">
                <p>I wasn’t born a coach. I was shaped into one — by life, by pain, and by relentless determination.</p>
                <p>As a child, I was called names that no child should hear — “dull-headed”, “dusky”, “unfit for anything.” I grew up hearing what I couldn’t do. But somewhere deep within, I knew I was more. I didn’t have anyone telling me that — I had to prove it to myself.</p>
                <p>I fought my way through labels and low expectations and went on to complete my Master’s degree. But the real tests came after that. Marriage brought with it many challenges — emotionally, physically, and financially. I faced unexpected storms — one of the most severe being retinal detachment in both eyes, I underwent surgery. But I didn’t stop there. I refused to live in darkness — both physically and emotionally. That was the turning point. I rebuilt. I healed. And more importantly, I learned how to guide others to heal themselves.</p>
                <p>Today, I am not just a certified life coach and healer — I am someone who has lived every shade of struggle — and found light on the other side. I’ve helped people rise above: Chronic health conditions, Broken relationships, Deep-rooted financial fears, Identity loss, Career blocks, Emotional and spiritual crises. If there’s one thing I know to be true, it’s this: You are not your situation. Your illness, your finances, your broken past — none of them can stop you when your inner "yes" is strong enough.</p>
                <p>This space — my coaching and healing — is not about motivation. It’s about transformation. It’s not about quick fixes. It’s about lasting shifts. And most importantly — it’s not theory. It’s truth, lived and tested.</p>
                <p>If you feel stuck, I’ve been there. If you’re tired of trying, I know the feeling. But if you’re willing to believe there’s another way — then I’m here to help you find it. Let’s begin.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
