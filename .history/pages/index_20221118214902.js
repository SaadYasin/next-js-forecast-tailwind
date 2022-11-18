import Head from 'next/head';
import TopButtons from '../components/TopButtons';
import Input from '../components/Input';
import MainCard from '../components/MainCard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="bg-gradient-to-b from-cyan-400 to-blue-400 h-screen py-4">
        <div className="text-white w-[23rem] md:w-3/4 lg:w-[50rem] bg-cyan-600 h-32 mx-auto px-2 rounded-md shadow-xl">
          <TopButtons />

          <Input />

          <MainCard />
        </div>
      </div>
    </div>
  );
}
