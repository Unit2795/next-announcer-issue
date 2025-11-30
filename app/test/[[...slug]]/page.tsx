import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Test',
};

const Page = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold">Test Page</h1>
    </main>
  );
};

export default Page;