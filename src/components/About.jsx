/* eslint-disable react/no-unescaped-entities */
import FileSaver from 'file-saver';

const About = () => {
  const downloadResume = () => {
    FileSaver.saveAs('/NelsonMorillo-Resume.pdf', 'NelsonMorillo-Resume.pdf');
  };

  return (
    <section className='my-14 text-center' id='about'>
      <h2 className='text-4xl font-light mb-10'>About me</h2>
      <div className='flex flex-col md:flex-row gap-6 sm:gap-14 items-center justify-center'>
        <img src='/Untitled design.png' alt='me' className='w-[200px]' />

        <div className='flex flex-col gap-2 justify-center items-start text-left md:max-w-[60%]'>
          <h3 className='text-lg font-light'>Hi! I'm Nelson,</h3>
          <p className='font-light'>
            an Industrial Engineer turned Full-Stack Developer.
          </p>
          <p className='font-light'>
            I learned how to build web applications from end to end using the
            full MERN Stack, but I have delved into other technologies like
            GraphQL, PostgreSQL and AWS. I'm always looking for new fun
            challenges and projects, like AI implementations and useful things
            for daily life.
          </p>
          <p className='font-light'>
            Besides work, I enjoy reading 📖, destroying and rebuilding my home
            server 👨🏻‍💻, Magic: The Gathering 🃏, and spending time with friends
            🤝.
          </p>
          <p className='font-light'>
            Below you can find my socials and download my resume. Let's get in
            touch to discuss new projects and collaborations!
          </p>
        </div>
      </div>
      <div className='my-10 flex gap-6 justify-center items-center flex-wrap'>
        <a
          href='https://www.linkedin.com/in/nelsonmorillof/'
          className='font-inter font-medium border border-indigo-100 hover:bg-indigo-100 py-2 px-4 rounded-xl w-fit flex gap-2'
        >
          <img src='/icons8-linkedin-50 copy.png' className='w-6' />
          LinkedIn
        </a>
        <a
          href='https://github.com/nel-thedev'
          className='font-inter font-medium border border-indigo-100 hover:bg-indigo-100 py-2 px-4 rounded-xl w-fit flex gap-2'
        >
          <img src='/icons8-github-50 copy.png' className='w-6' />
          Github
        </a>
        <button
          className='font-inter font-medium border border-indigo-100 hover:bg-indigo-100 py-2 px-4 rounded-xl w-fit flex gap-2 items-center'
          onClick={downloadResume}
        >
          <img src='/icons8-resume-64.png' className='w-6 h-6' />
          Resume
        </button>
      </div>
    </section>
  );
};

export default About;
