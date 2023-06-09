import { Button } from '@/components/ui/button'
import CoolSVG from '@/assets/undraw_heartbroken_cble.svg'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className="flex justify-between gap-4">
        <section className="flex-1 bg-primary text-primary-foreground p-4 mx-3 mt-2 rounded-md shadow-md flex flex-col items-center md:block">
          <h2 className="text-bold text-2xl mb-2 text-center md:text-left">Kupuj ekologiczne</h2>
          <div className="md:flex mb-2 ">
            <p className="text-bold flex-1  text-sm text-justify md:text-left">W Green Zone wierzymy, że zrównoważony rozwój zaczyna się od drobnych zmian w naszym codziennym życiu. Nasz sklep internetowy oferuje ekologiczne produkty dla Twojego domu i stylu życia, w tym materiały pochodzące z recyklingu i biodegradowalne, produkty organiczne i pochodzące ze sprawiedliwego handlu oraz panele słoneczne i rozwiązania w zakresie energii odnawialnej.</p>
          </div>
          <Link href={"/products"}><Button size={'lg'} variant={'outline'}>Odkryj produkty</Button></Link>
        </section>
        <div className="hidden md:flex justify-center  md:flex-1 ">
          <Image src={CoolSVG} width={300} alt="Funny picture" />
        </div>
      </div>
    </>
  )
}

// 