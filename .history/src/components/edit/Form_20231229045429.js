import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Success from "../ui/Success";
import Error from "../ui/Error";

export default function Form({ book }) {
    const { id, name: initialName, author: initialAuthor, thumbnail: initialThumbnail, price: initialPrice, rating: initialRating, featured: initialFeatured } = book;
    const navigate = useNavigate();

    const [name, setName] = useState(initialName)
    const [author, setAuthor] = useState(initialAuthor)
    const [thumbnail, setThumbnail] = useState(initialThumbnail)
    const [price, setPrice] = useState(initialPrice)
    const [rating, setRating] = useState(initialRating)
    const [featured, setFeatured] = useState(initialFeatured)


    const handleUpdate = (e) => {
        e.preventDefault();

        navigate('/');
    }
    return (
        <form onSubmit={handleUpdate} className="book-form">
            <div className="space-y-2">
                <label htmlFor="lws-bookName">Book Name</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="text-input"
                    type="text"
                    id="lws-bookName"
                    name="name" />
            </div>

            <div className="space-y-2">
                <label htmlFor="lws-author">Author</label>
                <input value={author} onChange={(e) => setAuthor(e.target.value)} required className="text-input" type="text" id="lws-author" name="author" />
            </div>

            <div className="space-y-2">
                <label htmlFor="lws-thumbnail">Image Url</label>
                <input value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} required className="text-input" type="text" id="lws-thumbnail" name="thumbnail" />
            </div>

            <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                    <label htmlFor="lws-price">Price</label>
                    <input value={price} onChange={(e) => setPrice(e.target.value)} required className="text-input" type="number" id="lws-price" name="price" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="lws-rating">Rating</label>
                    <input value={rating} onChange={(e) => setRating(e.target.value)} required className="text-input" type="number" id="lws-rating" name="rating" min="1"
                        max="5" />
                </div>
            </div>

            <div className="flex items-center">
                <input
                    checked={featured}
                    onClick={() => setFeatured(!featured)}
                    id="lws-featured" type="checkbox"
                    name="featured"
                    className="w-4 h-4"
                />
                <label htmlFor="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
            </div>

            <button type="submit" className="submit" id="lws-submit">Edit Book</button>
            {isSuccess && <Success message="Book Added Successfully!"></Success>}
            {isError && <Error message="An Error Occured!"></Error>}
        </form>
    );
}
