// icons
import { AiOutlineSearch } from 'react-icons/ai'

const styles = {
    searchBar: 'flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full justify-center',
    searchInput: 'border-none outline-none bg-none flex-grow w-full h-10 px-2',
}

export default function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <AiOutlineSearch />
            <input className={styles.searchInput} type="text" placeholder="Search" />
        </div>
    )
}
