import React from 'react';
import { Github, Instagram, Linkedin, Youtube } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500/40 via-purple-500/40 to-pink-500/40">
      {/* Glassmorphism background circles */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[calc(100vh-6rem)]">
          <div className="flex-1 space-y-8">
            <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                Transforming Creativity with AI Tools
              </h1>
              <p className="text-xl text-white/80">
                Digital creator and AI enthusiast exploring the intersection of technology and creativity
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#portfolio" className="px-8 py-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-full border border-white/20 transition">
                View Portfolio
              </a>
              <a href="#contact" className="px-8 py-3 bg-white text-purple-600 rounded-full hover:bg-white/90 transition">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800"
                alt="Profile"
                className="rounded-2xl object-cover w-full h-full"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-500/20 to-transparent"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-white/80">
                <p>
                  A passionate digital creator with a focus on AI-powered tools and creative workflows. 
                  Proud recipient of the NMMS scholarship and winner of multiple hackathons.
                </p>
                <p>
                  My mission is to inspire others by showcasing how AI tools can enhance creative processes 
                  and transform ideas into reality.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-full bg-white/20 rounded-full h-4">
                    <div className="bg-white w-[90%] h-full rounded-full"></div>
                  </div>
                  <span className="text-white min-w-[100px]">AI Tools</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-full bg-white/20 rounded-full h-4">
                    <div className="bg-white w-[85%] h-full rounded-full"></div>
                  </div>
                  <span className="text-white min-w-[100px]">Design</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-full bg-white/20 rounded-full h-4">
                    <div className="bg-white w-[80%] h-full rounded-full"></div>
                  </div>
                  <span className="text-white min-w-[100px]">Development</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-20">
          <h2 className="text-3xl font-bold text-white mb-12">Featured Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-2xl">
                <img 
                  src={`https://images.unsplash.com/photo-167${item}586431-efdf89bbab${item}b?auto=format&fit=crop&w=600`}
                  alt={`Project ${item}`}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-purple-900/20 translate-y-full group-hover:translate-y-0 transition-transform">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Project Title</h3>
                    <p className="text-white/80">Brief project description showcasing the use of AI tools.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="backdrop-blur-md bg-white/10 p-8 rounded-2xl border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-white/80 mb-8">
                  Let's collaborate on your next project or discuss how AI tools can enhance your creative workflow.
                </p>
                <div className="flex gap-6">
                  <a href="#" className="text-white/80 hover:text-white"><Instagram size={24} /></a>
                  <a href="#" className="text-white/80 hover:text-white"><Linkedin size={24} /></a>
                  <a href="#" className="text-white/80 hover:text-white"><Github size={24} /></a>
                  <a href="#" className="text-white/80 hover:text-white"><Youtube size={24} /></a>
                </div>
              </div>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
                />
                <textarea 
                  placeholder="Message" 
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-white/40"
                ></textarea>
                <button className="px-8 py-3 bg-white text-purple-600 rounded-lg hover:bg-white/90 transition">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;