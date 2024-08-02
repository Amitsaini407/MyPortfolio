import React from 'react';

function About() {
    return (
        <>
        <div 
        name="About"
        className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 text-justify'>
            <h1 className='text-3xl font-bold mb-5'>About</h1>
            <p>
               Hello, I'm Amit, a passionate Web developer with a keen eye for the MERN stack.
               With a background in IT, I strive to create impactful and visually stunning software solutions that leave a lasting impression.
            </p>
            <br />
            <section>
                <h2 className='text-green-600 font-semibold text-xl'>Education & Training</h2>
                <p>
                    [Degree/Certification], [Institution], [Year]
                    [Degree/Certification], [Institution], [Year]
                    [Relevant Course], [Platform/Institution], [Year]
                </p>
            </section>
            <br />
            <section>
                <h2 className='text-green-600 font-semibold text-xl'>Skills & Expertise</h2>
                <p>
                    Proficient in [Programming Languages]
                    Experienced with [Software Tools/Technologies]
                    Strong grasp of [Design Principles/Concepts]
                    Excellent problem-solving skills
                    Effective communicator and collaborator
                </p>
            </section>
            <br />
            <section>
                <h2 className="text-green-600 font-semibold text-xl">Professional Experience</h2>
                <p>
                    [Job Title], [Company/Organization], [Dates]
                    [Brief description of responsibilities and achievements]
                    [Job Title], [Company/Organization], [Dates]
                    [Brief description of responsibilities and achievements]
                    [Freelance/Contract Work], [Client/Organization], [Dates]
                    [Brief description of projects and contributions]
                </p>
            </section>
            <br />
            <section>
                <h2 className="text-green-600 font-semibold text-xl">Achievements & Awards</h2>
                <p>
                    [Award/Recognition], [Organization/Institution], [Year]
                    [Achievement], [Organization/Platform], [Year]
                </p>
            </section>
            <br />
            <section>
                <h2 className="text-green-600 font-semibold text-xl">Mission Statement</h2>
                <p>
                    My mission is to leverage my skills and creativity to deliver innovative [Your Field] solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
                </p>
            </section>
           
        </div>
        <hr/>
        </>
    );
}

export default About;
