import React from 'react';

const Testimonials = () => {
  return (
    <article
      id="testimonials"
      className="py-6 mt-12 text-center text-black bg-gold"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold uppercase font-display">
          Testimonials
        </h2>
        <blockquote className="mt-12">
          <p>
            Dodge and Benji loved their photo session I am so thankful for the
            amazing photos JJF photography did.
          </p>
          <p>
            He really managed to capture both my dogs personalities. Very
            professional and wonderful service.
          </p>
          <p className="mt-12 font-bold">— Emily P</p>
        </blockquote>
      </div>
    </article>
  );
};

export default Testimonials;
