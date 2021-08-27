import Head from 'next/head';

import ResumeContact from '../components/resume/contact';
import ResumeEducation from '../components/resume/education';
import ResumeExperience from '../components/resume/experience';
import ResumeProject from '../components/resume/project';

function formatPhoneNumber(number) {
  return `(${number.substring(0, 3)}) ${number.substring(3, 6)}-${number.substring(6)}`;
}

export default function Resume({ data }) {
  return (
    <div>
      <Head>
        <title>Resumé</title>
      </Head>

      <main>
        <div className='flex h-32 justify-between items-center border-b-2 border-gray-300'>
          <div className='p-4'>
            <h1 className='tracking-widest text-4xl'>{ data.name }</h1>
            <p className='ml-0.5'>{ data.role }</p>
          </div>
          <div className='flex flex-col h-5/6 mr-4'>
            <ResumeContact iconPath='/images/envelope.ico' link='mailto:stephen.edwards705@gmail.com' text={ data.email } />
            <ResumeContact iconPath='/images/phone.ico' link={ 'tel:' + data.phone } text={ formatPhoneNumber(data.phone) } />
            <ResumeContact iconPath='/images/linkedin.ico' link={ data.linkedin } text={ new URL(data.linkedin).pathname } />
            <ResumeContact iconPath='/images/github.jpg' link={ data.github } text={ new URL(data.github).pathname } />
          </div>
        </div>
        <div className='flex'>
          <div className='w-1/4 max-w-xs border-r-2 border-gray-300 divide-y-2 divide-gray-400 divide-opacity-5'>
            <div className='mx-4 py-2.5'>
              <h4 className='mb-1 text-xl'>Languages</h4>
              <ul className='text-sm ml-4 list-disc'>
                {
                  data.languages.map((lang, index) => {
                    return <li key={ index }>{ lang.name }</li>;
                  })
                }
              </ul>
            </div>
            <div className='mx-4 py-2.5'>
              <h4 className='mb-1 text-xl'>Technologies</h4>
              <ul className='text-sm ml-4 list-disc'>
                {
                  data.technologies.map((tech, index) => {
                    return <li key={ index }>{ tech.name }</li>;
                  })
                }
              </ul>
            </div>
            <div className='mx-4 py-2.5'>
              <h4 className='mb-1 text-xl'>Interests</h4>
              <ul className='text-sm ml-4 list-disc'>
                {
                  data.interests.map((interest, index) => {
                    return <li key={ index }>{ interest.name }</li>;
                  })
                }
              </ul>
            </div>
          </div>
          <div className='w-4/5 divide-y-2 divide-gray-400 divide-opacity-5'>
            <div className='py-2.5 mx-6'>
              <p className='text-xl tracking-widest mb-1.5'>Experience</p>
              {
                data.experiences.map((experience, index) => {
                  return <ResumeExperience key={ index } data={ experience } />;
                })
              }
            </div>
            <div className='py-2.5 mx-6'>
              <p className='text-xl tracking-widest mb-1.5'>Projects</p>
              {
                data.projects.map((project, index) => {
                  return <ResumeProject key={ index } data={ project } />;
                })
              }
            </div>
            <div className='py-2.5 mx-6'>
              <p className='text-xl tracking-widest mb-1.5'>Education</p>
              {
                data.educations.map((education, index) => {
                  return <ResumeEducation key={ index } data={ education } />;
                })
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const API_URL = process.env.API_URL;
  const res = await fetch(`${API_URL}/resume`);
  let data = await res.json();

  if (!data) return { notFound: true };

  data = data[0];

  data.experiences.sort((e1, e2) => {
    return new Date(e2.start) - new Date(e1.start);
  });
  data.projects.sort((p1, p2) => {
    return new Date(p2.start) - new Date(p1.start);
  });
  data.educations.sort((e1, e2) => {
    return new Date(e2.start) - new Date(e1.start);
  });
  return {
    props: { data: data }
  };
}
