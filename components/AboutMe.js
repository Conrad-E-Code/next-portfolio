
//     Hello! I'm Conrad Etherington, a passionate Full Stack Software Engineer based in Seattle, WA. You can reach me at (385) 227-2616 or via email at conrad.etherington@gmail.com. Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/conrad-etherington) and check out my coding endeavors on [GitHub](https://github.com/conrad-etherington). I also share my insights and experiences on my [Blog](#) and showcase my work in my [Portfolio](#).
    
//     I specialize in developing innovative software solutions that enhance the user experience. My expertise spans a wide range of technologies, including React Native, iOS Development, GIS, React, Next.js, Ruby, Rails, and JavaScript. With a solid foundation in Full Stack development, I'm well-versed in both front-end and back-end technologies, allowing me to create cohesive and efficient applications.
    
//     **Professional Summary**
    
//     I thrive in collaborative environments, leveraging my excellent communication skills to work seamlessly with cross-functional teams. Over the years, I've honed my adaptability, making me comfortable navigating the dynamic landscape of startup cycles while also excelling in established professional settings.
    
//     **Technical Expertise**
    
//     My technical toolkit includes a variety of technologies such as React, React Native, iOS, Android, Next.js, Ruby, Rails, JavaScript, HTML, CSS, and more. I practice Object-Oriented Programming (OOP) and am proficient in using Git/GitHub for version control. My experience extends to database management with tools like ActiveRecord, MongoDB, SQL, and PostgreSQL. Additionally, I have a strong foundation in GIS, Integration, and Test-Driven Development (TDD).
    
//     **Professional Experience**
    
//     *Contract Software Developer at Placomatic, Seattle, WA - April 2023 - Present*
//     - I've been actively involved in Placomatic's startup journey, gaining valuable insights into idea validation, development, launch, and adaptation phases.
//     - My entrepreneurial mindset has fueled creativity and problem-solving, enabling me to lead iOS development using React Native and contribute to mobile app excellence.
//     - I showcase agility by swiftly acquiring new skills and technologies to meet evolving project requirements.
    
//     *Mobile Mechanic at Conrad Fixes, Seattle, WA - April 2022 - Present*
//     - My technical expertise extends beyond software engineering. As a mobile mechanic, I diagnose and repair mechanical issues, ensuring customer satisfaction and timely repairs.
//     - I've established strong relationships within supplier and partner networks, ensuring consistent access to materials and services.
    
//     *Lab Analyst II at Nelson Laboratories, Salt Lake City, UT - September 2015 - June 2019*
//     - In my earlier role, I demonstrated attention to detail and problem-solving skills by detecting test protocol inconsistencies and suggesting improvements.
//     - I actively collaborated across departments to optimize testing processes and reduce downtime.
    
//     **Technical Projects**
    
//     *Placomatic - [GitHub](#) | [Demo](#)*
//     - Led the development of a transformative mobile app that incorporates web service integrations and offers a robust geofence capability with background notifications for enhanced user engagement.
//     - Achieved seamless rendering of polygons on the native map API using the geoJSON standard.
//     - Implemented secure background location data logging and storage, ensuring the encryption of sensitive user information.
    
//     *DO_BER - [GitHub](#) | [Demo](#)*
//     - Developed an online marketplace that facilitates temporary equipment sharing. I prioritized security by creating a bcrypt-based authentication solution and integrated ActionMailer for real-time notifications during exchanges.
//     - The project involved meticulous integration of React and Rails to optimize the user experience.
    
//     *Burger-Shop - [GitHub](#) | [Demo](#)*
//     - Designed a user-friendly food ordering system allowing customers to explore menus, add items to their cart, and complete transactions seamlessly.
//     - Employed Rails API routing for efficient server-client communication and integrated bcrypt authentication for user security.
    
//     **Education**
    
//     *Flatiron School, Seattle, WA - October 2022 - January 2023*
//     - I completed a comprehensive Full Stack Web Development program focused on Ruby on Rails and JavaScript. This training provided me with a strong foundation for my software engineering journey.
    
//     I'm excited about the future of technology and the opportunities it presents for innovation. Whether it's crafting elegant code, collaborating with teams, or contributing to impactful projects, I'm dedicated to creating meaningful software solutions that enhance the user experience. If you're interested in collaborating or learning more about my work, please don't hesitate to get in touch!</div>
//   )
// }

// export default AboutMe

import React from 'react';

const AboutMe = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 id="about-me" className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          About Me
        </h1>
        <div className="mt-6 border-t-2 border-indigo-600 border-dashed pt-6">
          <p className="text-lg text-gray-700">
            Hello! I'm Conrad Etherington, a passionate Full Stack Software Engineer based in Seattle, WA. You can reach me at{' '}
            <a href="tel:(385) 227-2616" className="text-indigo-600 underline">
              (385) 227-2616
            </a>{' '}
            or via email at{' '}
            <a
              href="mailto:conrad.etherington@gmail.com"
              className="text-indigo-600 underline"
            >
              conrad.etherington@gmail.com
            </a>
            . Feel free to connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/conrad-etherington"
              className="text-indigo-600 underline"
            >
              LinkedIn
            </a>{' '}
            and check out my coding endeavors on{' '}
            <a
              href="https://github.com/conrad-e-code"
              className="text-indigo-600 underline"
            >
              GitHub
            </a>
            . I also share my insights and experiences on my{' '}
            <a href="https://medium.com/@conrad.etherington" className="text-indigo-600 underline">
              Blog
            </a>{' '}
            and showcase my work in my{' '}
            <a href="#" className="text-indigo-600 underline">
              Portfolio
            </a>
            .
          </p>
          <div className="mt-8 text-left">
            <h2 className="text-xl font-semibold text-gray-800">
              Professional Summary
            </h2>
            <p className="mt-2 text-gray-600">
              I thrive in collaborative environments, leveraging my excellent communication skills to work seamlessly with cross-functional teams. Over the years, I've honed my adaptability, making me comfortable navigating the dynamic landscape of startup cycles while also excelling in established professional settings.
            </p>
          </div>
          <div className="mt-8 text-left">
            <h2 className="text-xl font-semibold text-gray-800">
               Technical Expertise
            </h2>
            <p className="mt-2 text-gray-600">
                My technical toolkit includes a variety of technologies such as React, React Native, iOS, Android, Next.js, Ruby, Rails, JavaScript, HTML, CSS, and more. I practice Object-Oriented Programming (OOP) and am proficient in using Git/GitHub for version control. My experience extends to database management with tools like ActiveRecord, MongoDB, SQL, and PostgreSQL. Additionally, I have a strong foundation in GIS, Integration, and Test-Driven Development (TDD).
            </p>
          </div>
          <div className="mt-8 text-left">
  <h2 className="text-xl font-semibold text-gray-800">
    Professional Experience
  </h2>
  <div className="mt-4">
    <p className="text-lg font-semibold text-gray-700">
      Contract Software Developer at Placomatic, Seattle, WA - April 2023 - Present
    </p>
    <ul className="list-disc list-inside mt-2 text-gray-600">
      <li>Gained comprehensive exposure to the complete startup cycle, fostering a deep understanding of idea validation, development, launch, and adaptation phases.</li>
      <li>Cultivated a strong entrepreneurial mindset, fueling creativity, initiative, and problem-solving capabilities.</li>
      <li>Led iOS development using React Native, quickly acquiring expertise in mobile app development.</li>
      <li>Demonstrated agility by swiftly acquiring new skills and technologies to meet evolving project requirements.</li>
    </ul>
  </div>
  <div className="mt-4">
    <p className="text-lg font-semibold text-gray-700">
      Mobile Mechanic at Conrad Fixes, Seattle, WA - April 2022 - Present
    </p>
    <ul className="list-disc list-inside mt-2 text-gray-600">
    <li> My technical expertise extends beyond software engineering. As a mobile mechanic, I diagnose and repair mechanical issues, ensuring customer satisfaction and timely repairs.</li>
      <li>Utilize technical expertise to diagnose and repair a wide range of mechanical issues, ensuring customer satisfaction and timely completion of repairs.</li>
      <li>I've established strong relationships within supplier and partner networks, ensuring consistent access to materials and services.</li>
    </ul>
  </div>
  <div className="mt-4">
    <p className="text-lg font-semibold text-gray-700">
      Lab Analyst II at Nelson Laboratories, Salt Lake City, UT - September 2015 - June 2019
    </p>
    <ul className="list-disc list-inside mt-2 text-gray-600">
  <li>Test Preparation: Composed the highest quality comprehensive testing checklists to be utilized by others throughout many complex and unique test procedures. Detected test protocol inconsistencies or errors by thorough preemptive review of intricate written protocols. Assisted with protocol amendments and provided the best solutions to problems with haste. Coordinated supply orders with purchasing dept. Assisted with scheduling of workflow. Set up lab spaces for other analysts to perform GLP/non-GLP non-clinical laboratory studies. Trained others to perform test procedures. Sterilized testing supplies using steam sterilizer. Maintained stock of petri-dishes, needed testing chemicals, supplies, etc.</li>
  <li>Thermocouple Setup/Verification/Use: Created temperature profiles using a 20-channel temperature scanner by placing probes in critical areas. Copied raw data into spreadsheets and forwarded to Study Director. Outfitted temperature scanner unit to suit test parameters: probe size, program setup, repaired/replaced non-functional probes. Instrument setup pre/post verification by profiling high precision oil bath standard before and after testing to ensure test accuracy.</li>
  <li>Culture Maintenance: Created and maintained isolated broth cultures of 5 microorganisms. Monitored concentration of cultures by serial dilution and subsequent plating of culture samples onto petri dishes.</li>
  <li>Lab Media and Reagent Formulation: Followed established media/reagent recipes to prepare necessary items/solutions for department-wide testing. Ensured proper documentation during the formulation process.</li>
  <li>Validation Testing: Evaluated cleaning and disinfection procedures for reusable medical equipment using many test methods unique to each device following written protocols. Performed extractions of test and control devices per standard test procedures. Transferred aliquots to markers lab for analysis. Analyzed microbiological content of extractions and inoculums. Incubated Petri dishes and Evaluated Results. Followed good documentation practices. Ensured test compliance with federal regulations and international standards.</li>

</ul>
  </div>
  <div className="mt-8 text-left">
  <h2 className="text-xl font-semibold text-gray-800">
    Technical Projects
  </h2>
  <div className="mt-4">
    <p className="text-lg font-semibold text-gray-700">
        View my projects in interactive format <a href="/projects" className="text-indigo-600 underline">here</a>.
    </p>
    <p className='text-lg font-semibold text-gray-700'> Feel free to explore my site. If you log in to the public login you can view the CI/CD pipeline and see new features before they are released! <a className='text-indigo-600 underline' href="/about-me">Log In</a></p>

</div>
</div>
</div>
          {/* ... rest of the content ... */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
