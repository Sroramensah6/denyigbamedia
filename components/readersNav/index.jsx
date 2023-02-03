// Icons
import Image from 'next/image'
import { FiBell } from 'react-icons/fi'
import { BiBookmarks } from 'react-icons/bi'
import { RiArticleLine } from 'react-icons/ri'
import { BsPencilSquare } from 'react-icons/bs'
import { HiOutlineHome } from 'react-icons/hi'

// img
import Qazi from '../../images/qazi.jpeg'
import smallLogo from '../../images/smallLogo.png'
import Link from 'next/link'

const styles = {
    wrapper: `w-[5rem] h-screen flex flex-col justify-between items-center p-[1rem]`,
    logoContainer: `cursor-pointer`,
    iconContainer: `flex-1 flex flex-col justify-center gap-[1.4rem] text-2xl text-[#787878] items-center`,
    divider: `border-b w-[1px] h-[1px] bg-gray-20`,
    profileImage: `object-cover`,
    profileImageContainer: `rounded-full w-[2.4rem] h-[2.4rem] overflow-hidden place-items`,
}

export default function ReadersNav() {
    return (
        <div className={styles.wrapper}>
            <Link href={'/'}>
                <div className={styles.logoContainer}>
                    <Image
                        src={smallLogo}
                        alt='small'
                    />
                </div>
            </Link>
            <div className={styles.iconContainer}>
                <HiOutlineHome />
                <FiBell />
                <BiBookmarks />
                <RiArticleLine />
                <div className={styles.divider} />
                <BsPencilSquare />
            </div>
            <div className={styles.profileImageContainer}>
                <Image
                    alt='qazi'
                    src={Qazi}
                    className={styles.profileImage}
                />
            </div>
        </div>
    )
}
