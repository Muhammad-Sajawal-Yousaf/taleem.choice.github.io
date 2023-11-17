import Navbar from './navbar';
import Footer from './footer';
import React from 'react';

const blogPosts = [

  {
    title: 'Mastering the Art of Public Speaking',
    date: 'February 20, 2023',
    author: 'Emma Johnson',
    content: `
      <p>Public speaking is a valuable skill that can boost your confidence and career opportunities. In this post, we will explore techniques to become a more effective and engaging public speaker.</p>
      <p>Learn how to overcome nervousness, structure your speeches, and captivate your audience with compelling presentations.</p>
    `,
  },
  {
    title: 'Navigating the Job Search Landscape',
    date: 'February 15, 2023',
    author: 'Daniel Brown',
    content: `
      <p>Searching for a new job can be a challenging process. This post provides practical tips on how to navigate the job search landscape successfully.</p>
      <p>Discover strategies for creating an outstanding resume, preparing for interviews, and leveraging online platforms to find the right job opportunities.</p>
    `,
  },
  


{
  title: 'The Power of Continuous Learning',
  date: 'February 10, 2023',
  author: 'Olivia White',
  content: `
    <p>Continuous learning is key to personal and professional development. Explore the benefits of adopting a mindset of lifelong learning and discover accessible resources to expand your knowledge.</p>
    <p>Whether you're looking to acquire new skills for your current job or explore new interests, this post has insights to fuel your learning journey.</p>
  `,
},
{
  title: 'Building Strong Professional Relationships',
  date: 'February 5, 2023',
  author: 'Michael Clark',
  content: `
    <p>Building and maintaining strong professional relationships is crucial for career success. Learn effective networking strategies, communication skills, and how to nurture connections within your industry.</p>
    <p>Discover the art of relationship-building and how authentic connections can contribute to your professional growth and opportunities.</p>
  `,
},
{
  title: 'Exploring Artificial Intelligence in Today\'s World',
  date: 'January 30, 2023',
  author: 'Sophia Martinez',
  content: `
    <p>Artificial Intelligence (AI) is reshaping industries and daily life. In this post, we delve into the fascinating world of AI, discussing its applications, potential impact, and ethical considerations.</p>
    <p>Stay informed about the latest developments in AI and gain insights into how this transformative technology is influencing various sectors.</p>
  `,
},
{
  title: 'Achieving Work-Life Balance in a Fast-Paced World',
  date: 'January 25, 2023',
  author: 'David Miller',
  content: `
    <p>Maintaining a healthy work-life balance is essential for well-being. This post provides practical tips on how to juggle professional responsibilities and personal life, fostering a more fulfilling and sustainable lifestyle.</p>
    <p>Explore strategies for time management, stress reduction, and creating boundaries to achieve a harmonious balance between work and leisure.</p>
  `,
},
{
  title: 'Unveiling the Secrets of Successful Entrepreneurs',
  date: 'January 20, 2023',
  author: 'Amanda Carter',
  content: `
    <p>Entrepreneurship is a journey filled with challenges and triumphs. Learn from the experiences of successful entrepreneurs as they share insights into starting, growing, and sustaining a thriving business.</p>
    <p>Discover key principles, valuable lessons, and practical advice to inspire and guide aspiring entrepreneurs on their path to success.</p>
  `,
},
{
  title: 'The Impact of Climate Change on Global Economies',
  date: 'January 15, 2023',
  author: 'Elijah Turner',
  content: `
    <p>Climate change is a pressing global issue with far-reaching consequences. In this post, we examine the impact of climate change on economies worldwide, discussing the challenges and opportunities for sustainable practices.</p>
    <p>Stay informed about the role businesses and individuals can play in addressing climate change and contributing to a more sustainable future.</p>
  `,
},
{
  title: 'Demystifying Cryptocurrencies: A Beginner\'s Guide',
  date: 'January 10, 2023',
  author: 'Sophie Adams',
  content: `
    <p>Cryptocurrencies have gained significant attention in recent years. This beginner's guide provides a clear overview of what cryptocurrencies are, how they work, and their potential implications on finance and technology.</p>
    <p>Whether you're curious about Bitcoin, Ethereum, or other digital currencies, this post aims to demystify the world of cryptocurrencies for beginners.</p>
  `,
},
{
  title: 'Embracing Diversity in the Workplace',
  date: 'January 5, 2023',
  author: 'Marcus Williams',
  content: `
    <p>Creating an inclusive workplace is crucial for fostering innovation and employee well-being. This post explores the importance of diversity and inclusion, offering actionable insights for organizations to build diverse and equitable cultures.</p>
    <p>Learn about the benefits of diverse teams, best practices for promoting inclusion, and how embracing diversity positively impacts organizational success.</p>
  `,
},
{
  title: 'The Impact of Artificial Intelligence on Education',
  date: 'March 5, 2023',
  author: 'Alex Rodriguez',
  content: `
    <p>Artificial Intelligence (AI) is transforming various industries, including education. Explore the profound impact of AI on classrooms, learning methodologies, and the future of education.</p>
    <p>Learn about the opportunities and challenges posed by AI in education and how educators can adapt to this technological evolution.</p>
  `,
},
{
  title: 'Healthy Work-Life Balance in a Remote Environment',
  date: 'March 10, 2023',
  author: 'Sophia Williams',
  content: `
    <p>With the rise of remote work, maintaining a healthy work-life balance has become more challenging. This post provides practical tips for achieving equilibrium while working from home.</p>
    <p>Discover strategies to set boundaries, manage time effectively, and prioritize well-being in a remote work environment.</p>
  `,
},
{
  title: 'Exploring the Wonders of Space Tourism',
  date: 'March 15, 2023',
  author: 'Michael Turner',
  content: `
    <p>Space tourism is no longer a concept of the future—it's becoming a reality. Delve into the exciting world of space tourism, its current state, and the potential for civilians to travel beyond Earth's atmosphere.</p>
    <p>Learn about upcoming space tourism projects and the implications of making space travel accessible to the public.</p>
  `,
},
{
  title: 'The Art of Mindful Leadership',
  date: 'March 20, 2023',
  author: 'Jessica Bennett',
  content: `
    <p>Mindful leadership involves a holistic approach to decision-making and team management. This post explores the principles of mindful leadership and its positive impact on organizational success.</p>
    <p>Discover how practicing mindfulness can enhance leadership skills, foster a positive workplace culture, and improve overall team performance.</p>
  `,
},
{
  title: 'Unlocking Creativity: The Power of Divergent Thinking',
  date: 'March 25, 2023',
  author: 'Christopher Lee',
  content: `
    <p>Divergent thinking is a key element of creativity. This post delves into the concept of divergent thinking, its importance in problem-solving, and how to cultivate a creative mindset.</p>
    <p>Explore practical exercises to unlock your creativity, whether you're a student, professional, or anyone seeking to tap into their innovative potential.</p>
  `,
},
{
  title: 'The Future of Sustainable Fashion',
  date: 'March 30, 2023',
  author: 'Isabella Garcia',
  content: `
    <p>Sustainable fashion is gaining momentum as consumers and brands prioritize environmental consciousness. This post examines the future of sustainable fashion, innovations in eco-friendly materials, and the role of consumers in driving positive change.</p>
    <p>Learn about sustainable fashion practices and how the fashion industry is evolving towards a more environmentally friendly and ethical approach.</p>
  `,
},



  
];


function Blog() {
  return (
<div>
      <Navbar/>
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {blogPosts.map((post, index) => (
          <div key={index} className=" p-6 rounded-md shadow-md bg-gray-100 dark:bg-gray-800">
            <h2 className="text-xl font-bold mb-4">{post.title}</h2>
            <p className="text-sm  mb-2">
              {post.date} | By {post.author}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        ))}
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </div>
  );
}

export default Blog;
