import Image from 'next/image';

export default function Home() {
  return (
    

    <main className = "min-h-screen text-white flex items-center justify-center">
      <div>
        <Image src="/green-robot.png" alt="Background Image" width={800} height={800} />
      </div>

    </main>

  );
}