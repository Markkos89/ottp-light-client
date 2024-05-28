import GraphLayout from "../page";

const Attest = () => {
  return (
    <GraphLayout>
        <p className="mb-4">By attesting, you are confirming onchain.</p>
        <button type="submit" className="bg-black text-white p-2 w-full flex items-center justify-center space-x-2">
            <i className="fas fa-plus"></i> <span>Add</span>
        </button>      
    </GraphLayout>
  );
};

export default Attest;
