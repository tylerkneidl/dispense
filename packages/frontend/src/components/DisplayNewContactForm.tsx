import "react-toastify/dist/ReactToastify.css";
import NewContactForm from "./NewContactForm";


const DisplayNewContactForm = () => {
  return (
    <div className="flex flex-col">
      <h2 className="font-bold ml-5 text-2xl text-white">Add New Contact</h2>
        <NewContactForm />
    </div>
  );
};

export default DisplayNewContactForm;

