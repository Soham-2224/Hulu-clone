import  Image from 'next/image';
import HeaderItem from './HeaderItem';
import { 
    HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
 } from '@heroicons/react/outline'

function Header() {

    return (
        <header className="flex flex-col sm:flex-row justify-between items-center m-5">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem  title="HOME" Icon={HomeIcon}/>
                <HeaderItem  title="HOME" Icon={BadgeCheckIcon}/>
                <HeaderItem  title="HOME" Icon={CollectionIcon}/>
                <HeaderItem  title="HOME" Icon={LightningBoltIcon}/>
                <HeaderItem  title="SEARCH" Icon={SearchIcon}/>
                <HeaderItem  title="ME" Icon={UserIcon}/>
            </div>
            <Image className="object-contain" src="https://links.papareact.com/ua6" width={200} height={100}/>
        </header>
    )
}

export default Header
