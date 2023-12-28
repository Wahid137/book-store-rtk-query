import Books from "../Books/Books";
import Filter from "../Filter/Filter";

export default function Home() {
    const [filter, setFilter] = useState('all');

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <>
            <main className="py-12 px-6 2xl:px-6 container">
                <div className="order-2 xl:-order-1">
                    <Filter onFilterChange={handleFilterChange} />
                    <Books filter={filter} />
                </div>
            </main>
        </>

    );
}
