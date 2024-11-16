import { StarsCanvas } from './canvas';

const BackgroundStars = () => {
  return (
    <div className='w-full h-full fixed inset-0 z-[-1]'>
      <StarsCanvas />
    </div>
  );
};

export default BackgroundStars;