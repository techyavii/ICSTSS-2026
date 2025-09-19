
import React from 'react';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel';
import Marquee from '../components/Marquee';
import { Calendar, Users, FileText } from 'lucide-react';

const Index = () => {
  const importantDates = [
    { event: "Paper Submission Deadline", date: "10th September 2025" },
    { event: "Acceptance Notification Due", date: "25th September 2025" },
    { event: "Registration Due", date: "30th August 2025" },
    { event: "Camera Ready Submission", date: "30th September 2025" },
    { event: "Conference Date", date: "25th October 2025" }
  ];

  return (
    <Layout>
      <div className="mb-8">
        <Carousel />
      </div>
      <Marquee />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Conference Info Section */}
        <section className="mb-16">
          <div className="bg-soft-sand rounded-lg p-8">
            <h2 className="text-3xl font-inter font-bold text-sustainable-green mb-4 text-center">ICSTSS-2026 will be organised in Hybrid Mode</h2>
            {/* <p className="text-2xl text-slate-gray font-ibm-plex text-center">
              Organized by Jaypee University Anoopshahr, UP, India in association with SAGE University, Indore, India
            </p> */}
          </div>
        </section>

        {/* About Section - Centered */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-inter font-bold text-sustainable-green mb-6">About the Conference</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 max-w-5xl mx-auto">
            <p className="text-lg text-slate-gray font-ibm-plex leading-relaxed text-left">
              The International Conference on Smart Technologies & Sustainable Systems (ICSTSS 2026) aims to bring together leading academicians, researchers, innovators, and industry experts to explore cutting-edge advancements in smart technologies and their role in building sustainable systems for the future.
              <br />
              In today’s rapidly evolving digital landscape, the convergence of Artificial Intelligence (AI), Internet of Things (IoT), Smart Grids, Green Energy, Blockchain, Cloud Computing, and Data Analytics plays a transformative role in shaping sustainable societies. This conference serves as a premier platform to exchange ideas, present novel research, and discuss innovative solutions that address global challenges such as climate change, energy efficiency, smart cities, sustainable manufacturing, and digital governance.
              <br />
              ICSTSS 2026 will feature keynote lectures from eminent speakers, technical paper presentations, panel discussions, industry sessions, and workshops designed to foster collaboration between academia and industry.

            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="bg-sustainable-green text-white p-8 rounded-lg">
            <h2 className="text-3xl font-inter font-bold mb-4 text-white">Ready to Submit Your Paper?</h2>
            <p className="text-lg mb-6 font-ibm-plex text-white">Join researchers from around the world at ICSTSS-2026</p>
            <a 
              href="https://www.adroidcms.com/submit-paper/ICSTSS2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent-blue text-white px-8 py-3 rounded-lg font-inter font-semibold hover:bg-blue-600 transition-colors"
            >
              Submit Your Paper
            </a>
          </div>
        </section>

        {/* Important Dates */}
        <section className="">
          <h2 className="text-3xl font-inter font-bold text-sustainable-green mb-6 text-center">Important Dates</h2>
          <div className="bg-soft-sand p-8 rounded-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {importantDates.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                  <h3 className="text-lg font-inter font-semibold text-sustainable-green mb-2">{item.event}</h3>
                  <p className="text-accent-blue font-ibm-plex font-semibold">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
