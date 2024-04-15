'use client'

import Link from 'next/link'
import { AiFillBug } from "react-icons/ai";
import { usePathname } from 'next/navigation'
import React from 'react'
import classNames from 'classnames'
const Navbar = () => {

    const currentPath = usePathname()

    const links = [
        { label: 'Dashboard', href: '/' },
        { label: 'Issues', href: '/issues' },
    ]

    return (
        <nav className='flex space-x-6 border-b border-zinc-700 mb-5 px-5 h-14 items-center'>
            <Link href='/'><AiFillBug size={24} /></Link>
            <ul className='flex space-x-6'>
                {links.map(link =>
                    <Link
                        key={link.href}
                        className={classNames({
                            'font-medium text-neutral-100': link.href === currentPath,
                            'text-neutral-400': link.href !== currentPath,
                            'hover:text-neutral-300 transition-colors': true
                        })}
                        href={link.href}>
                        {link.label}
                    </Link>
                )}
            </ul>
        </nav>
    )
}

export default Navbar