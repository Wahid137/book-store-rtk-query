import { useState } from "react";
import { useAddBookMutation } from "../../features/api/apiSlice";


export default function Form() {
    const [addBook, { isLoading, isSuccess, isError }] = useAddBookMutation();

    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const [price, setPrice] = useState("")
    const [rating, setRating] = useState("")
    const [featured, setFeatured] = useState(false)




    const handleSubmit = (e) => {
        e.preventDefault();
        addBook({
            name,
            author,
            thumbnail,
            price,
            rating,
            featured
        })
    }

    return (
        <form onSubmit={handleSubmit} className="book-form">
            <div className="space-y-2">
                <label htmlFor="lws-bookName">Book Name</label>
                <input onChange={(e) => setName(e.target.value)} required className="text-input" type="text" id="lws-bookName" name="name" />
            </div>

            <div className="space-y-2">
                <label htmlFor="lws-author">Author</label>
                <input onChange={(e) => setAuthor(e.target.value)} required className="text-input" type="text" id="lws-author" name="author" />
            </div>

            <div className="space-y-2">
                <label htmlFor="lws-thumbnail">Image Url</label>
                <input onChange={(e) => setThumbnail(e.target.value)} required className="text-input" type="text" id="lws-thumbnail" name="thumbnail" />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                    <label htmlFor="lws-price">Price</label>
                    <input onChange={(e) => setPrice(e.target.value)} required className="text-input" type="number" id="lws-price" name="price" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="lws-rating">Rating</label>
                    <input required className="text-input" type="number" id="lws-rating" name="rating" min="1"
                        max="5" />
                </div>
            </div>

            <div className="flex items-center">
                <input id="lws-featured" type="checkbox" name="featured" className="w-4 h-4" />
                <label htmlFor="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
            </div>

            <button type="submit" className="submit" id="lws-submit">Add Book</button>
        </form>
    );
}
