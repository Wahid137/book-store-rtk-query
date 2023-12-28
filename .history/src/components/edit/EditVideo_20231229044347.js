import { useParams } from "react-router-dom";
import Form from "./Form";
import { useGetBookQuery } from "../../features/api/apiSlice";

export default function EditVideo() {
    const { bookId } = useParams();
    const { data: book, isLoading, isError } = useGetBookQuery(bookId);

    return (
        <div className="container">
            <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
                <Form />
            </div>
        </div>
    );
}
