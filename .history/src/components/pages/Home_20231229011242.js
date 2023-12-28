import Books from "../Books/Books";
import Filter from "../Filter/Filter";
import Navbar from "../Navbar/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="py-12 px-6 2xl:px-6 container">
                <div className="order-2 xl:-order-1">
                    <Filter />
                    <Books />
                </div>
            </main>
        </>

    );
}
