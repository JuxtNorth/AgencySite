import { FC } from 'react';
export interface ResultProps {

}

export const Results: FC<ResultProps> = () => {
  return <section className='grid gap-snug grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    <div className='bg-rose-500 h-16 rounded-2xl'></div>
    <div className='bg-rose-500 h-16 rounded-2xl'></div>
    <div className='bg-rose-500 h-16 rounded-2xl'></div>
    <div className='bg-rose-500 h-16 rounded-2xl'></div>
    <div className='bg-rose-500 h-16 rounded-2xl'></div>
    <div className='bg-rose-500 h-16 rounded-2xl'></div>
  </section>
};
