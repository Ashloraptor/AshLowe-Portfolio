import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
// This is a static page mocking an "About Us" section for our fake user data
export default function About() {
    return (
      <div className="container pt-4">
        <p>
            I started out with a "McJob" in 2013, working every possible shift while going to school online.
        </p>
        <p>
            A door opened for me, and I was able to work under Pace/Arris from 2014 to 2016 as customer support/tech
            support until
            AT&T ended their contract prematurely, and all American call centers under vendors were closed out. At that
            point I went
            to JPM Chase where I worked in Fraud Protection and then Tech Support for a total of 7 years.
        </p>
        <p>
            While the use of AI had rendered my position redundant, I took the opportunity to return to school to
            reskill for my true
            passion: coding. Aiming to be flexible in the world of coding, be it for video games or web design or
            software support, I
            look forward to the many opportunities ahead of me.
        </p>
      </div>
    );
  }
  