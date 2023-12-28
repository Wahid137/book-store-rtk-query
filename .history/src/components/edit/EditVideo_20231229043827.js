import { useParams } from "react-router-dom";
import Form from "./Form";

export default function EditVideo() {
    const { bookId } = useParams();
    return (
        <div className="container">
            <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
                <Form />
            </div>
        </div>
    );
}
