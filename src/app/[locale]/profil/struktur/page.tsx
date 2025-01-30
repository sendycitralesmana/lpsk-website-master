import Flow from "@/components/feature/flow";
import { AppContainer } from "@/components/ui/app-container";
import Image from "next/image";

const PejabatPage = () => {
  return (
    <div className='flex flex-col gap-10'>
    <div className=' h-[400px] w-full bg-background'>
        <div className=' flex w-full h-full justify-center place-items-center relative'>
            <div className='h-full w-full absolute bg-slate-800'>
                <Image src={'/images/fondasi.png'} fill alt='' sizes='100vh' className=' object-cover opacity-50' />
            </div>
            <div className=' absolute left-0 top-0 right-0 bottom-0 h-full w-full flex flex-col gap-2 justify-center place-items-center'>
                <h1 className=' text-3xl font-bold text-slate-100'>Struktur Organisasi</h1>
                <h1 className=' text-2xl font-bold text-slate-100'>Lembaga Perlindungan Saksi dan Korban</h1>
            </div>
        </div>
    </div>
    <div className='w-full relative md:h-[450px]'>
        <AppContainer className='relative'>
            <Flow />
        </AppContainer>
    </div> 
</div>
  );
};

export default PejabatPage;
