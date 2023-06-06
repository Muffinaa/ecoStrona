import Link from "next/link";

interface FooterLink {
    href: string;
    text: string;
}
const footerLinks: FooterLink[] = [
    {
        href: '/cart',
        text: 'Koszyk'
    },
    {
        href: '/profile',
        text: 'Profil'
    }
]

function Footer() {
    return (
        <footer className="border-border border-t p-3 gap-5 flex absolute bottom-0 w-full h-[10rem]">
            <div className="flex-1">
                <h3 className="font-bold">Przydatne Linki:</h3>
                <ul>
                    {footerLinks.map((a, index) => (
                        <Link href={a.href} key={index}>
                            <li className="list-disc ml-6 hover:underline ">{a.text}</li>
                        </Link>
                    ))
                    }
                </ul>
            </div>
            <div className="flex-1">
                <p className="text-center">Strona wykonana przez ...</p>
            </div>
            <div className="flex-1">
                <h1 className="font-bold select-none">GreenZone</h1>
                <p className="">nie jest prawdziwym sklepem ani marką, ale raczej prototypową witryną zaprojektowaną w celu wygrania konkursu.</p>
            </div>

        </footer>
    )
}

export default Footer