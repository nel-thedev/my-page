import Main from '../components/Main';
import ProjectsSect from '../components/ProjectsSect';
import Skills from '../components/Skills';
import About from '../components/About';

const Home = () => {
  return (
    <main className='w-full flex flex-col items-center justify-center px-6 sm:px-10'>
      <Main />
      <ProjectsSect />
      <Skills />
      <About />
    </main>
  );
};

export default Home;
