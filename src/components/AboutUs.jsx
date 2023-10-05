// App.js

import React from "react";

function AboutUs (){
  return (
    <div className="bg-gray-100">
     
      <div className="container  w-full bg-gray-100">
        <section className="bg-white rounded shadow-md mb-8">
          <h2 className="text-4xl font-bold mb-4 text-center">
            About Nourish Now
          </h2>
          <div className="mb-8 flex justify-center items-center">
            <img
              src="/images/7.jpeg"
              alt="Story 2"
              className="w-full h-64 object-cover rounded fade-in-image"
            />
          </div>
          <div className="text-gray-700 mb-6">
            <p>
              Nourish Now is a non-profit organization dedicated to creating a
              better future for children in need. Our mission is to provide
              essential support to children and families, offering them the
              tools and resources they need to build a brighter tomorrow.
            </p>
          </div>
          <div className="text-gray-700 mb-6">
            <p>
              At Nourish Now, we believe in the power of education, health, and
              community. Through generous donations and the support of our
              volunteers, we aim to make a positive impact on the lives of those
              we serve.
            </p>
          </div>
        </section>

        <section className="bg-white rounded shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Programs</h2>
          <div className="text-gray-700 mb-6">
            <p>
              Our programs focus on education, healthcare, and community
              development. We work closely with schools, healthcare providers,
              and local communities to identify the needs of children and
              implement targeted solutions.
            </p>
            <div className="flex justify-center items-center">
              <img
                src="/images/1.webp"
                alt="Story 1"
                className="w-full h-64 object-cover rounded mb-2 fade-in-image"
              />
            </div>
          </div>
        </section>

        <section className="bg-white rounded shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Where to Find Us</h2>
          <div className="text-gray-700 mb-6">
  <p>
    Nourish Now has offices and outreach programs in various locations. Check the list below to find a Nourish Now presence near you:
  </p>
  <ul className="list-none pl-3 mt-4 custom-list">
    <li>Nairobi</li>
    <li>Kisumu</li>
    <li>Isiolo</li>
    <li>Turkana</li>
    <li>Mombasa</li>

  </ul>
</div>

        </section>

        <section className="bg-white rounded shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Journey</h2>
          <div className="text-gray-700 mb-6">
            <p>
              Our team dedicated to continuous improvement collaborates closely
              with other organizations to thoroughly understand your objectives
              and supporter community. Through in-depth research and valuable
              insights into the broader nonprofit and web industry, Nourish Now
              is well-equipped to assist you in outlining a donor journey.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;