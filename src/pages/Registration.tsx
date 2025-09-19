// import React from 'react';
// import Layout from '../components/Layout';

// const Registration = () => {
//   const registrationFees = [
//     {
//       category: "Research Scholar/Student from INDIA",
//       early: "INR 4000",
//       late: "INR 5000"
//     },
//     {
//       category: "Academician from INDIA",
//       early: "INR 5000",
//       late: "INR 6000"
//     },
//     {
//       category: "Industrial Participants from INDIA",
//       early: "INR 6000",
//       late: "INR 7000"
//     },
//     {
//       category: "Foreigner Research Scholar/Student (Outside India)",
//       early: "USD 100",
//       late: "USD 120"
//     },
//     {
//       category: "Foreigner Academician (Outside India)",
//       early: "USD 120",
//       late: "USD 150"
//     },
//     {
//       category: "Foreigner Industrial Participant (Outside India)",
//       early: "USD 150",
//       late: "USD 180"
//     }
//   ];

//   const benefits = [
//     "Access to Keynote talks",
//     "Access to paper presentation sessions",
//     "Networking Sessions",
//     "Conference lunch and refreshment*",
//     "Tea and Coffee Breaks*",
//     "Conference Kit*",
//     "Pre-Proceeding (collection of Abstracts only)*",
//     "Participation Certificate"
//   ];

//   return (
//     <Layout>
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="text-center mb-12">
//           <h1 className="neo-h1 text-sustainable-green mb-4">Registration</h1>
//           <div className="w-24 h-1 bg-accent-blue mx-auto mb-6"></div>
//         </div>

//         <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
//           <h2 className="neo-h2 text-sustainable-green mb-6">Registration Process</h2>
//           <div className="grid md:grid-cols-2 gap-8 items-start">
//             <div>
//               <p className="neo-body text-slate-gray leading-relaxed mb-4">
//                 <strong>Step 1 – Registration Fee:</strong> It is mandatory for at least one author of an accepted paper to register in order for the paper to appear in the proceedings and included in the Technical Program. Fee includes listing the papers online in the International Journal/Conference Proceedings.
//               </p>
//               <p className="neo-body text-slate-gray leading-relaxed">
//                 Kindly pay the registration fees through online transaction only and mail us the receipt/transaction number along with your paper id and registered author id card.
//               </p>
//             </div>
//             <div className="text-center">
//               <h3 className="neo-h3 text-sustainable-green mb-4">Quick Registration</h3>
//               <img 
//                 src="/lovable-uploads/007f3735-c7aa-4913-93fa-08c32237041d.png" 
//                 alt="Registration QR Code" 
//                 className="w-48 h-48 mx-auto mb-4 border-2 border-gray-200 rounded-lg p-2"
//               />
//               <p className="neo-caption text-slate-gray">Scan QR code for quick registration</p>
//             </div>
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8 mb-8">
//           <div className="bg-soft-sand p-8 rounded-lg">
//             <h2 className="neo-h2 text-sustainable-green mb-6">Registration Benefits</h2>
//             <p className="neo-body text-slate-gray mb-4">
//               <strong>Author/Co-Author Registration Fee Includes:</strong>
//             </p>
//             <ul className="space-y-2">
//               {benefits.map((benefit, index) => (
//                 <li key={index} className="flex items-start">
//                   <span className="text-accent-blue mr-2">•</span>
//                   <span className="neo-body text-slate-gray">{benefit}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="bg-sustainable-green text-white p-8 rounded-lg">
//             <h2 className="neo-h2 mb-6 text-white">Important Note</h2>
//             <p className="neo-body mb-4 text-white">
//               **The Conference will be in Hybrid mode
//             </p>
//             <p className="neo-body text-white">
//               <strong>Conference Venue:</strong> ONLINE MODE via ZOOM Platform
//             </p>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
//           <div className="bg-sustainable-green text-white p-6">
//             <h2 className="neo-h2 text-center text-white">Registration Fee For ICSTSS-2026</h2>
//           </div>
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead className="bg-soft-sand">
//                 <tr>
//                   <th className="px-6 py-4 text-left neo-h3 text-sustainable-green">Category</th>
//                   <th className="px-6 py-4 text-center neo-h3 text-sustainable-green">Early Registration<br/>(Before 30th August 2025)</th>
//                   <th className="px-6 py-4 text-center neo-h3 text-sustainable-green">Late Registration<br/>(After 30th August 2025)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {registrationFees.map((fee, index) => (
//                   <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
//                     <td className="px-6 py-4 neo-body text-slate-gray">{fee.category}</td>
//                     <td className="px-6 py-4 text-center neo-body font-semibold text-accent-blue">{fee.early}</td>
//                     <td className="px-6 py-4 text-center neo-body font-semibold text-accent-blue">{fee.late}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         <div className="text-center bg-soft-sand p-8 rounded-lg">
//           <h2 className="neo-h2 text-sustainable-green mb-4">Ready to Register?</h2>
//           <p className="neo-body text-slate-gray mb-6">
//             Contact us for payment details and registration process
//           </p>
//           <a 
//             href="mailto:ICSTSS.conference@gmail.com"
//             className="inline-block bg-accent-blue text-white px-8 py-3 rounded-lg neo-button hover:bg-blue-600 transition-colors"
//           >
//             Contact for Registration
//           </a>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Registration;

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Calendar, Users, Award } from "lucide-react";
import Layout from '@/components/Layout';


const Registration = () => {
   const paperRegistrationFees = [
    {
      category: "Research Scholar/Student from INDIA",
      early: "INR 4000",
      late: "INR 5000"
    },
    {
      category: "Academician from INDIA",
      early: "INR 5000",
      late: "INR 6000"
    },
    {
      category: "Industrial Participants from INDIA",
      early: "INR 6000",
      late: "INR 7000"
    },
    {
      category: "Foreigner Research Scholar/Student (Outside India)",
      early: "USD 100",
      late: "USD 120"
    },
    {
      category: "Foreigner Academician (Outside India)",
      early: "USD 120",
      late: "USD 150"
    },
    {
      category: "Foreigner Industrial Participant (Outside India)",
      early: "USD 150",
      late: "USD 180"
    }
  ];

  // const participantRegistrationFees = [
  //   {
  //     category: "Research Student Participants",
  //     early: "GBP £200",
  //     late: "GBP £250"
  //   },
  //   {
  //     category: "Standard Participants",
  //     early: "GBP £250",
  //     late: "GBP £300"
  //   }
  // ];

  const benefits = [
    "Access to Keynote talks",
    "Access to paper presentation sessions",
    "Networking sessions",
    "Conference lunch and refreshment*",
    "Tea and Coffee Breaks*",
    "Conference kit*",
    "Participation Certificate"
  ];

  const importantDates = [
    { event: "Paper Submission Deadline", date: "30th December 2025" },
    { event: "Acceptance Notification Due", date: "30th December 2025" },
    { event: "Registration Due", date: "30th December 2025" },
    { event: "Camera Ready Submission", date: "20th March 2026" },
    { event: "Conference Date", date: "5-6th June 2026" }
  ];

  return (
    <Layout>
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Registration</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">ICSSTS Registration Information</p>
        </div>

        {/* Important Dates Section */}
        {/* <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
            <Calendar className="mr-3 h-6 w-6" />
            Important Dates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {importantDates.map((item, index) => (
              <div key={index} className="bg-green-50 p-4 rounded-lg border-l-4 border-green-800">
                <h3 className="font-semibold text-green-800 text-sm mb-1">{item.event}</h3>
                <p className="text-blue-600 font-bold">{item.date}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Registration Process */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Registration Process</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Registration Requirements:</strong> It is mandatory for at least one author of an accepted paper to register in order for the paper to appear in the proceedings and be included in the Technical Program.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Payment:</strong> Please complete payment through the available online payment options and send us the receipt/transaction number along with your paper ID.
              </p>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Standard Paper size – 8 pages. Over length of paper charges £30 per extra page.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold text-green-800 mb-4">Early Bird Registration</h3>
              <div className="text-3xl font-bold text-blue-600 mb-2">OPEN NOW!</div>
              <p className="text-gray-700">Register before 30th October 2025 for discounted rates</p>
            </div>
          </div>
        </div>

        {/* Benefits and Payment Options */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-yellow-50 p-8 rounded-lg border border-yellow-200">
            <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <Award className="mr-3 h-6 w-6" />
              Registration Benefits
            </h2>
            <p className="text-gray-700 mb-4">
              <strong>Registration includes:</strong>
            </p>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2 font-bold">•</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mt-4">
              *Physical attendees only. The conference is non-residential and delegates are requested to make their own accommodation arrangements.
            </p>
          </div>

          <div className="bg-green-800 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
              <Users className="mr-3 h-6 w-6" />
              Conference Modes
            </h2>
            <div className="space-y-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Physical Mode</h3>
                <p>In-person attendance with full conference experience including meals and materials</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Online Mode</h3>
                <p>Virtual participation via online platform with access to all sessions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Paper Registration Fees */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="bg-green-800 text-white p-6">
            <h2 className="text-2xl font-bold text-center text-white">Conference Accepted Paper Registration</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-yellow-50">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-bold text-green-800">Category</th>
                  <th className="px-6 py-4 text-center text-lg font-bold text-green-800">Early Registration<br/>(Before 30th Oct 2025)</th>
                  <th className="px-6 py-4 text-center text-lg font-bold text-green-800">Late Registration<br/>(After 30th Oct 2025)</th>
                </tr>
              </thead>
              <tbody>
                {paperRegistrationFees.map((fee, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 text-gray-700">{fee.category}</td>
                    <td className="px-6 py-4 text-center font-bold text-blue-600">{fee.early}</td>
                    <td className="px-6 py-4 text-center font-bold text-blue-600">{fee.late}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Participant Registration Fees */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="bg-blue-600 text-white p-6">
            <h2 className="text-2xl font-bold text-center text-white">Conference Participant Registration</h2>
          </div>
          <div className="overflow-x-auto">
            {/* <table className="w-full">
              <thead className="bg-yellow-50">
                <tr>
                  <th className="px-6 py-4 text-left text-lg font-bold text-green-800">Category</th>
                  <th className="px-6 py-4 text-center text-lg font-bold text-green-800">Early Registration<br/>(Before 30th Oct 2025)</th>
                  <th className="px-6 py-4 text-center text-lg font-bold text-green-800">Late Registration<br/>(After 30th Oct 2025)</th>
                </tr>
              </thead>
              <tbody>
                {participantRegistrationFees.map((fee, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 text-gray-700">{fee.category}</td>
                    <td className="px-6 py-4 text-center font-bold text-blue-600">{fee.early}</td>
                    <td className="px-6 py-4 text-center font-bold text-blue-600">{fee.late}</td>
                  </tr>
                ))}
              </tbody>
            </table> */}
          </div>
        </div>

        {/* Payment Options */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Registration Payment Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <CreditCard className="h-12 w-12 mb-4 text-green-800" />
                <h3 className="font-bold text-lg mb-2 text-center">Registration via Stripe</h3>
                <p className="text-sm text-center text-gray-600 mb-4">Secure international payment processing</p>
                <a href="/checkout">
                  <Button className="w-full bg-green-800 hover:bg-green-900 text-white">
                    Pay with Stripe
                  </Button>
                </a>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <CreditCard className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="font-bold text-lg mb-2 text-center">Registration via Razorpay</h3>
                <p className="text-sm text-center text-gray-600 mb-2">(SAARC Nations only)</p>
                <p className="text-xs text-center text-gray-500 mb-4">India, Pakistan, Bangladesh, etc.</p>
                <a href='https://rzp.io/rzp/UTwHWlmV' className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Pay with Razorpay
                  </Button>
                </a>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <CreditCard className="h-12 w-12 mb-4 text-yellow-600" />
                <h3 className="font-bold text-lg mb-2 text-center">Registration via PayPal</h3>
                <p className="text-sm text-center text-gray-600 mb-4">Trusted global payment solution</p>
                <a href='https://paypal.me/adroidconference?country.x=IN&locale.x=en_GB' className="w-full">
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white">
                    Pay with PayPal
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center bg-yellow-50 p-8 rounded-lg border border-yellow-200">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Need Help with Registration?</h2>
          <p className="text-gray-700 mb-6">
            If you have any concerns regarding the registration policy or fees, please feel free to contact us.
          </p>
          <a 
            href="mailto:dasgri.congress@gmail.com"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Registration Support
          </a>
          <p className="text-sm text-gray-600 mt-4">
            All participants and authors must abide by the organization's guidelines.
          </p>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Registration;