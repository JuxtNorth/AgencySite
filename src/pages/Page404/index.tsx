import { FC } from 'react';

export const Page404: FC = () => {
	return <main className="h-screen w-screen flex items-center justify-center">
    <div className='text-center'>
      <h1 className='font-extrabold text-7xl md:text-9xl'>404</h1>
      <p className='text-sm md:text-lg'>Page not found</p>
    </div>
  </main>;
};
