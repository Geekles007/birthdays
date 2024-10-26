import dynamic from "next/dynamic";

const Birthdays = dynamic(() => import('@/components/birthdays'));

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className='flex h-full w-full items-center justify-center bg-black'>
        <Birthdays />
      </div>
    </div>
  );
}
