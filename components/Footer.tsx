import Link from 'next/link'
import { Button } from '@/components/ui/button'

function Footer() {
    return (
        <footer className="border-border border-t p-3 gap-5 absolute bottom-0 w-full h-[3rem]">
            <h4 className="text-center text-gray-400">Made by <Link href={"https://github.com/muffinaa"}><Button className='p-0' variant={"link"}>Muffina</Button></Link> & <Link href={"https://github.com/https://github.com/Beziiii"}><Button className='p-0' variant={"link"}>Bezi</Button></Link></h4>
        </footer>
    )
}

export default Footer