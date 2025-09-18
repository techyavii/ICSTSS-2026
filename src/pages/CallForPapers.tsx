import React from 'react';
import Layout from '../components/Layout';

const CallForPapers = () => {
  const tracks = [
    {
      title: "SMART TECHNOLOGIES",
      topics: [
        "Artificial Intelligence & Machine Learning",
        "Internet of Things (IoT) & Edge Computing",
        "Blockchain & Secure Distributed Systems",
        "Cloud & High-Performance Computing",
        "Robotics & Automation"
      ]
    },
    {
      title: "SUSTAINABLE SYSTEMS",
      topics: [
        "Renewable Energy Systems & Smart Grids",
        "Green and Sustainable Manufacturing",
        "Environmental Monitoring & Climate Technologies",
        "Sustainable Infrastructure & Smart Cities",
        "Circular Economy & Waste Management"
      ]
    },
    {
      title: "INTEGRATION & APPLICATIONS",
      topics: [
        "ICT for Sustainable Development",
        "Healthcare Technologies & Biomedical Systems",
        "Intelligent Transportation & Mobility Solutions",
        "Data-Driven Policy & E-Governance",
        "Cybersecurity for Sustainable Systems"
      ]
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="neo-h1 text-sustainable-green mb-4">Call for Papers</h1>
          <div className="w-24 h-1 bg-accent-blue mx-auto mb-6"></div>
        </div>

        {/* Intro Text */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
          <p className="neo-body text-slate-gray leading-relaxed mb-6">
            The Organizing Committee of <span className="font-semibold">ICSTSS 2026</span> invites original and unpublished research contributions from scholars, practitioners, and industry professionals. Submitted papers should demonstrate high-quality research, innovation, and practical applications in the following (but not limited to) thematic areas:
          </p>
        </div>

        {/* Conference Themes & Tracks */}
        {tracks.map((track, index) => (
          <div key={index} className="mb-8 bg-soft-sand p-8 rounded-lg">
            <h2 className="neo-h2 text-sustainable-green mb-6">{track.title}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {track.topics.map((topic, topicIndex) => (
                <div key={topicIndex} className="flex items-start">
                  <span className="text-accent-blue mr-2">•</span>
                  <span className="neo-body text-slate-gray">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Closing Note */}
        <div className="bg-sustainable-green text-white p-8 rounded-lg">
          <p className="neo-body leading-relaxed text-white">
            All papers will undergo a blind peer-review process and all accepted papers will be published in the conference proceedings. The conference organizer encourages submissions across multidisciplinary themes, and while the above tracks provide direction, other relevant topics are also welcome for consideration.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default CallForPapers;
