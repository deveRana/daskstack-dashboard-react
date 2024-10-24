import React from "react";

const AllContacts = () => {
  const Card = ({ imageSrc, title, email }) => {
    return (
      <div className="rounded-lg overflow-hidden bg-white flex flex-col items-center ">
        <img className="w-full h-72 object-cover " src={imageSrc} alt={title} />
        <div className="p-4 text-center">
          <h2 className="text-base font-bold mt-3 mb-1">{title}</h2>
          <p className="text-gray-700 text-sm">{email}</p>
          <button className="mt-3 text-sm text-gray-700 font-bold border px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white hover:border-transparent">
            <i class="fa-regular fa-envelope mr-3"></i>
            Message
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="w-full flex flex-row justify-between">
        <h2 className="text-3xl font-bold">Contact</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md ml-2">
          Add New Contact
        </button>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-8">
        {Array.from({ length: 9 }, () => {
          return (
            <Card
              imageSrc="https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              title="Professional Man"
              email="professionalman@gmail.com"
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllContacts;
