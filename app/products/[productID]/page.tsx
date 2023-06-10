import { getProduct } from '@/api/prodcuts'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

type Params = {
    params: {
        productID: string
    }
}
async function page({ params: { productID } }: Params) {
    const product = await getProduct(productID)

    return (
        <div className='p2 flex flex-col items-center   md:flex-row gap-4 m-4'>
            <Image className='rounded-lg shadow-md w-[480px] h-[480px] object-contain'  src={product.image} alt={product.title} width={480} height={480} />
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold">{product.title}</h1>
                <div className="flex gap-2">
                    <p className="text-xl font-bold">{product.price} zł</p>
                    <Badge variant={'outline'}>{product.type}</Badge>
                </div>
                <p className="text-xl text-foreground-muted">{product.description}</p>
                <Button className='w-[250px]' size={'lg'} variant={'outline'}>Kup</Button>
                <p className='text-muted-foreground text-sm w-[350px]'>* Tylko w celach prototypu. Kupowanie jest niezaimplementowane</p>
            
            </div>
        </div>
    )
}

export default page

function useState(arg0: any): [any, any] {
    throw new Error('Function not implemented.')
}
