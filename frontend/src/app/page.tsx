import Image from 'next/image';

export default function Home() {
  return (


    <main className="min-h-screen pb-16 bg-[url('/green-robot.png')] bg-no-repeat bg-center bg-contain text-white p-10  z-10 grid grid-flow-col grid-cols-4  gap-2">

      <div className='hover:bg-tertiary rounded-md h-20 w-20 justify-center flex flex-col items-center cursor-pointer'>
        <Image src="/icons/folder.png" alt="Folder" width={50} height={50} />
        <h3>Games</h3>


      </div>

      <div className='hover:bg-tertiary rounded-md h-20 w-20 justify-center flex flex-col items-center cursor-pointer'>
        <Image src="/icons/text_file.png" alt="Text file" width={50} height={50} />
        <h3 className='text-sm'>README.txt</h3>


      </div>



    </main>

  );
}