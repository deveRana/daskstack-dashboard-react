import React, { useState } from "react";

const AddContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    position: "",
    gender: "",
    userImg: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="mt-10">
      <h2 className="text-3xl font-bold">Add New Contact</h2>

      <form
        onSubmit={handleSubmit}
        className="mt-10 bg-white flex flex-col items-center justify-center rounded-3xl border px-6 py-16 "
      >
        <div className="mb-10">
          <label
            htmlFor="userImg"
            className="flex flex-col items-center justify-center text-sm font-semibold text-gray-700 cursor-pointer"
          >
            <span className="bg-[#ECECEE] p-5 rounded-full mb-3">
              <i class="fa-solid fa-camera w-8 h-8 flex items-center justify-center text-2xl"></i>
            </span>
            Upload Photo
          </label>
          <input
            type="file"
            name="userImg"
            id="userImg"
            onChange={handleChange}
            className="w-fullw-[300px] px-3 py-2 mt-2 border border-gray-300 rounded-md bg-[#f5f6fa] hidden"
          />
        </div>

        <div className="flex flex-row mb-5">
          <div className="mx-10">
            <label className="block text-sm font-semibold text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="w-[300px] px-3 py-2 mt-2 border border-gray-300 rounded-md bg-[#f5f6fa]"
              placeholder="Enter first Name"
            />
          </div>

          <div className="mx-10">
            <label className="block text-sm font-semibold text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="w-[300px] px-3 py-2 mt-2 border border-gray-300 rounded-md bg-[#f5f6fa]"
              placeholder="Enter last Name"
            />
          </div>
        </div>

        <div className="flex flex-row mb-5">
          <div className="mx-10">
            <label className="block text-sm font-semibold text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-[300px] px-3 py-2 mt-2 border border-gray-300 rounded-md bg-[#f5f6fa]"
              placeholder="Enter your Email"
            />
          </div>

          <div className="mx-10">
            <label className="block text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <input
              type="number"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              className="w-[300px] px-3 py-2 mt-2 border border-gray-300 rounded-md bg-[#f5f6fa]"
              placeholder="Enter Phone Number"
            />
          </div>
        </div>

        <div className="flex flex-row mb-5">
          <div className="mx-10">
            <label className="block text-sm font-semibold text-gray-700">
              Position
            </label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-[300px] px-3 py-2 mt-2 border border-gray-300 rounded-md bg-[#f5f6fa]"
              placeholder="Enter your Position"
            />
          </div>

          <div className="mx-10">
            <label className="block text-sm font-semibold text-gray-700">
              Phone Number
            </label>
            <select
              name=""
              id=""
              className=" w-[300px] px-3 py-2 mt-2 border border-gray-300 rounded-md bg-[#f5f6fa]"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="mt-20 bg-blue-500 text-white py-2 px-20 rounded-md hover:bg-blue-600 transition"
        >
          Add Now
        </button>
      </form>
    </div>
  );
};

export default AddContactForm;
