import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
        <header className="flex items-center bg-slate-300 px-4 py-4">
            <Link href="/">
                <Image
                    src="/logo-removebg.png"
                    alt="logo"
                    width={18}
                    height={6}
                />
            </Link>

            <div className= "flex ml-auto">
                <Link href="/" className="text-gray-700 hover:underline mr-11 text-lg"> 
                    首页
                </Link>
                <Link href="/courses" className="text-gray-700 hover:underline mr-11 text-lg"> 
                    课程体系
                </Link>
                <Link href="/aboutus" className="text-gray-700 hover:underline mr-11 text-lg">
                    外教团队
                </Link>
                <Link href="/contactus" className="text-gray-700 hover:underline mr-11 text-lg">
                    联系我们 
                </Link>
            </div>
        </header>
    )
}