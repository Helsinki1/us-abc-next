import Link from "next/link"
import Image from "next/image"

export default function Header() {
    return (
      <div className="bg-white fg-white flex items-center justify-between py-4" style={{padding: '0.5rem 4.5rem'}}>
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo-removebg.png"
            alt="logo"
            width={180}
            height={60}
            className="h-20 w-auto"
          />
        </Link>

        <div className="flex items-center space-x-8">
            <Link href="/">
                <button className="text-gray-700 hover:text-gray-900 hover:underline text-lg font-medium transition-colors px-4 py-2 rounded-xl">
                    首页
                </button>
            </Link>
            <Link href="/courses">
                <button className="text-gray-700 hover:text-gray-900 hover:underline text-lg font-medium transition-colors px-4 py-2 rounded-xl">
                    课程体系
                </button>
            </Link>
            <Link href="/aboutus">
                <button className="text-gray-700 hover:text-gray-900 hover:underline text-lg font-medium transition-colors px-4 py-2 rounded-xl">
                    外教团队
                </button>
            </Link>
            <Link href="/contactus">
                <button className="text-gray-700 hover:text-gray-900 hover:underline text-lg font-medium transition-colors px-4 py-2 rounded-xl">
                    联系我们
                </button>
            </Link>
        </div>
      </div>
    )
  }