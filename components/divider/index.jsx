
export default function Divider({ color }) {
    const styles = {
        divider: `h-1 flex-1 flex w-full bg-[${color}] lg:my-10 my-10`
    }
    return <span className={styles.divider} />
}
