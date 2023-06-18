import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddExpensePage = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [expenseData, setExpenseData] = useState([""]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    // console.log(amount)
    // Perform form validation here
    if (!amount) {
      toast.error("Please enter the amount.");
      isValid = false;
    } else if (!description) {
      toast.error("Please enter the description.");
      isValid = false;
    } else if (!category) {
      toast.error("Please select a category.");
      isValid = false;
    }

    if (isValid) {
      if (!date) {
        const currentDate = new Date().toISOString().split("T")[0];
        setDate(currentDate);
      }
      setExpenseData(amount, description, category, date);
      toast.success("Expense added successfully!");
      // Clear form fields and show success message
      setAmount("");
      setDescription("");
      setCategory("");
      setDate("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
      <div className="w-full max-w-md p-6  rounded-lg shadow-md bg-[#268b8b] shadow-xl">
        <h2 className="text-2xl mb-4 text-white text-center">Add Expense</h2>
        <form onSubmit={handleSubmit} className="font-light">
          <div className="mb-4">
            <label
              className="block mb-2 text-white  font-medium"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              className="w-full appearance-none px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#268b8b]"
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount ..."
              style={{ appearance: "textfield" }} //To remove by default buttons on using number as type 
              
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-white  font-medium"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#268b8b]"
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description ..."
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-white  font-medium"
              htmlFor="category"
            >
              Category
            </label>
            <select
              className={
                !category
                  ? "w-full  px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-400 focus:outline-none focus:ring focus:ring-[#268b8b]"
                  : "w-full  px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#268b8b]"
              }
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Select Category"
            >
              <option value="" className="text-gray-800">
                Select category
              </option>
              {["Food", "Transportation", "Utilities", "Entertainment"].map(
                (i) => (
                  <option className="text-gray-800" value={i.toLowerCase()}>
                    {i}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-white  font-medium"
              htmlFor="date"
            >
              Date
            </label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#268b8b]"
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
              placeholder=" ..."
            />
            {!date && (
              <p className="text-white text-[12px] text-center mt-2">
                * Date field is optional. If left empty, it will be set to the
                current date.
              </p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              className="px-4 py-2 text-black bg-[#ffffff] rounded-md hover:bg-[#dadada]"
              type="submit"
            >
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddExpensePage;
