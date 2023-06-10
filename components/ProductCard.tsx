import Image from "next/image";
import { Badge, badgeVariants } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    type: "Ubranie" | "Buty" |
    "Kuchnia" | "Elektronika" |
    "Meble" | "Ogród" |
    "Nawóz" | "Rosliny"|
    "Dla zwierząt" |
    "Kosmetyki" | "Inne";
    description: string;
}

function ProductCard(props: Product) {
    return (
        <div className="shadow-md w-full  md:w-[350px] inline rounded-md">
            <Image className="w-full
            md:w-[350px] h-[200px] object-cover relative" src={props.image} alt={props.title} width={200} height={200} />
            <div className="relative bottom-0 p-2 bg-background">
                <div className="text-xl font-bold text-foreground">{props.title}</div>
                <div className="text-muted-foreground overflow-hidden whitespace-pre text-ellipsis mb-2 max-h-[calc(1.5em*3)]">{props.description}</div>
                <Link href={`/products/${props.id}`}><Button variant={"default"} className="absolute top-[-20px] right-[10px] hover:bg-muted-foreground">Zobacz</Button></Link>
                <div className="flex justify-between">
                    <div className="text-xl font-bold text-foreground">{props.price} zł</div>
                    <Badge className="select-none" variant={'outline'}>{props.type}</Badge>
                </div>

            </div>
        </div>
    )
}

export default ProductCard