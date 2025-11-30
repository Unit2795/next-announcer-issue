import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold">Homepage</h1>
    </main>
  );
}
