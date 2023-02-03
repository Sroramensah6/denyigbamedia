import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Logo from '../images/logo1.png'

import { main_link } from '../route'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

const styles = {
    text: 'hover:opacity-50 hover:border-b',
    logoContainer: 'flex items-center flex-start',
    wrapper: 'flex justify-center gap-10 p-5 bg-[#0e2b19]',
    content: 'max-w-7xl flex flex-1 justify-between gap-10',
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full',
    logo_sm: 'cursor-pointer object-contain block h-20 w-auto lg:hidden',
    logo_lg: 'cursor-pointer object-contain hidden h-20 w-auto lg:block',
    bannerNav: 'flex cursor-pointer items-center space-x-5 text-[#F2F3F2] font-mediumSerif',
}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')   
}

export default function Example() {
    const router = useRouter()

    return (
        <Disclosure as="nav" className="bg-[#0e2b19]">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-20 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-[#F2F3F2] hover:bg-[#F2F3F2] hover:text-[#0e2b19] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link href="/">
                                        <Image 
                                            alt="logo"
                                            src={Logo}
                                            height={40}
                                            width={200}
                                            className={styles.logo_sm}
                                        />
                                    </Link>
                                    <Link href="/">
                                        <Image 
                                            alt="logo"
                                            src={Logo}
                                            height={40}
                                            width={200}
                                            className={styles.logo_lg}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 lg:block">
                                <div className="flex space-x-2">
                                    {main_link.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.route}
                                            className={classNames(
                                                router.pathname == item.route ? 'bg-[#F2F3F2] text-[#0e2b19]' : 'text-[#F2F3F2] hover:bg-[#F2F3F2] hover:text-[#0e2b19]',
                                            'px-3 py-2 rounded-md text-sm font-medium font-mediumSerif'
                                            )}
                                            aria-current={router.pathname == item.route ? 'page' : undefined}
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="lg:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {main_link.map((item) => (
                                <Disclosure.Button
                                    key={item.title}
                                    as={Link}
                                    href={item.route}
                                    className={classNames(
                                        router.pathname == item.route ?  'bg-[#F2F3F2] text-[#0e2b19]' : 'text-[#F2F3F2] hover:bg-[#F2F3F2] hover:text-[#0e2b19]',
                                        'block px-3 py-2 rounded-md text-base font-medium font-mediumSerif'
                                    )}
                                    aria-current={router.pathname == item.route ?  'page' : undefined}
                                >
                                    {item.title}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
