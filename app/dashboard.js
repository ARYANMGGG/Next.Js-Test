import Head from 'next/head';

export default function DashboardPage() {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-purple-500">
        <h1 className="text-5xl font-bold text-white">Welcome to the Dashboard!</h1>
      </div>
    </div>
  );
}
