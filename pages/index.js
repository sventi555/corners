import Head from 'next/head';

import Cube from '../components/cube';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sventi&apos;s Corner</title>
      </Head>
      <main className='min-h-screen'>
        <h1 className='font-hamma text-6xl p-5'>Sventi&apos;s Corner</h1>
        <div className='mx-auto w-1/2 max-w-xl py-10 grid gap-20 grid-cols-2'>
          <Cube
            title='Thoughts'
            href='/'
            filepath='/images/cube1.png'
          />
          <Cube
            title='Resumé'
            href='/resume'
            filepath='/images/cube2.png'
            transition={{ delay: 0.3 }}
          />
          <Cube
            title='Musics'
            href='/'
            filepath='/images/cube3.png'
            transition={{ delay: 0.6 }}
          />
          <Cube
            title='Animations'
            href='/'
            filepath='/images/cube4.png'
            transition={{ delay: 0.9 }}
          />
        </div>
      </main>
    </div>
  );
}
