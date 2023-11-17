// components/CareerGuidance.js
import Footer from './footer';
import Navbar from './navbar';
import React from 'react';
const CareerGuidance = () => {
      return (
        <div>
<Navbar/>
        <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
         
          <main className="container mx-auto mt-8 p-4">
            <p className="text-2xl ">
              Welcome to our Career Guidance page. Making decisions about your career can be a transformative journey.
              Whether you're a recent graduate exploring your options or a professional seeking a new direction, our
              comprehensive career guidance resources are designed to assist you at every step.
            </p>
    
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Why Career Guidance?</h2>
    
              <p>
                Career guidance is more than just choosing a job; it's about understanding your strengths, passions,
                and aligning them with the right opportunities. Our guidance aims to empower you with the knowledge and
                skills needed to navigate the dynamic landscape of the modern workplace successfully.
              </p>
    
              <p>
                From self-assessment tools to industry insights, our resources provide a holistic approach to career development,
                ensuring that you make informed decisions that align with your aspirations and goals.
              </p>
            </section>
    
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Featured Resources</h2>
    
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
                  <h3 className="text-xl font-semibold mb-2">Resume Building Workshop</h3>
                  <p>
                    Join our upcoming workshop to learn the art of crafting a compelling resume that stands out to recruiters.
                    A well-crafted resume is your ticket to securing interviews and advancing your career.
                  </p>
                </div>
    
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
                  <h3 className="text-xl font-semibold mb-2">Networking Strategies Webinar</h3>
                  <p>
                    Networking is a powerful tool in today's professional world. Discover effective networking strategies and
                    techniques to expand your professional connections and create opportunities for career growth.
                  </p>
                </div>
    
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md">
                  <h3 className="text-xl font-semibold mb-2">Career Exploration Guide</h3>
                  <p>
                    Unsure about your career path? Our comprehensive guide will help you explore various careers, industries,
                    and find a path that aligns with your interests and long-term goals.
                  </p>
                </div>
              </div>
            </section>
    
            {/* Additional sections and content can be added based on your requirements */}
    
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Upcoming Career Events</h2>
    
              <p>
                Stay informed about upcoming career events that can provide you with networking opportunities, industry insights,
                and valuable connections. Mark your calendar for these events:
              </p>
    
              <ul className="list-disc pl-6">
                <li>Career Workshop 1: Building a Successful Resume - Date: [Date]</li>
                <li>Career Seminar: Navigating Career Transitions - Date: [Date]</li>
                <li>Job Fair: Connect with Employers - Date: [Date]</li>
                <li>Networking Event: Building Professional Relationships - Date: [Date]</li>
                <li>Panel Discussion: Industry Insights - Date: [Date]</li>
                <li>Career Exploration Webinar: Finding Your Passion - Date: [Date]</li>
              </ul>
            </section>
    
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Career Resources</h2>
    
              <p>
                Explore our comprehensive collection of career resources designed to enhance your professional skills.
                Whether you're crafting a compelling resume, preparing for interviews, or planning your career development,
                our resources cover a wide range of topics to support your journey.
              </p>
    
              <p>
                Check out our blog for the latest articles on industry trends, career tips, and success stories from
                professionals who have navigated similar career paths.
              </p>
            </section>
    
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Career Counseling Services</h2>
    
              <p>
                Sometimes, personalized guidance is the key to unlocking your full potential. Our experienced career
                counselors are here to provide one-on-one support tailored to your unique needs. Schedule a counseling
                session to discuss your career goals, receive feedback on your job search strategy, and gain insights
                to help you move forward with confidence.
              </p>
    
              <p>
                Whether you're a recent graduate, mid-career professional, or someone considering a career transition,
                our counseling services are designed to support you at every stage of your career journey.
              </p>
            </section>
    
            <section className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Get Started on Your Career Journey</h2>
    
              <p>
                Ready to take the next step in your career? Explore our resources, attend upcoming events, and consider
                scheduling a career counseling session to gain personalized insights and guidance. Your success is our priority.
              </p>
            </section>
          </main>
    <div>
      <Footer/>
    </div>
         
        </div>
        </div>
      );
    };

export default CareerGuidance;
