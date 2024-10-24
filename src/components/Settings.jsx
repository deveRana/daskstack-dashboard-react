import React, { useState } from "react";

const Settings = () => {
  const [formData, setFormData] = useState({
    siteName: "Bright Web",
    copyright: "All rights Reserved@brightweb",
    seoTitle: "Bright web is a hybrid dashboard",
    seoDescription: "Bright web is a hybrid dashboard",
    seoKeywords: "CEO",
    siteLogo: null,
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
    <div>
      <h2 className="text-3xl font-bold">General Settings</h2>

      <form
        onSubmit={handleSubmit}
        className="mt-10 bg-white flex flex-col items-center justify-center rounded-3xl border px-6 py-16 "
      >
        <div className="mb-10">
          <label
            htmlFor="siteLogo"
            className="flex flex-col items-center justify-center text-sm font-semibold text-gray-700 cursor-pointer"
          >
            <span className="bg-[#ECECEE] p-5 rounded-full mb-3">
              <i class="fa-solid fa-camera w-8 h-8 flex items-center justify-center text-2xl"></i>
            </span>
            Upload Photo
          </label>
          <input
            type="file"
            name="siteLogo"
            id="siteLogo"
            onChange={handleChange}
            className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md bg-[#f5f6fa] hidden"
          />
        </div>

        <div className="flex flex-row mb-5">
          <div className="mx-10">
            <label className="block text-sm font-semibold text-gray-700">
              Site Name
            </label>
            <input
              type="text"
              name="siteName"
              value={formData.siteName}
              onChange={handleChange}
              className=" px-3 py-2 mt-2 border border-gray-300 rounded-md bg-[#f5f6fa]"
              placeholder="Enter site name"
            />
          </div>

          <div className="mx-10">
            <label className="block text-sm font-semibold text-gray-700">
              Copyright
            </label>
            <input
              type="text"
              name="copyright"
              value={formData.copyright}
              onChange={handleChange}
              className=" px-3 py-2 mt-2 border border-gray-300 rounded-md bg-[#f5f6fa]"
              placeholder="Enter copyright info"
            />
          </div>
        </div>

        <div className="flex flex-row mb-10">
          <div className=" mx-10">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                SEO Title
              </label>
              <input
                type="text"
                name="seoTitle"
                value={formData.seoTitle}
                onChange={handleChange}
                className=" px-3 py-2 mt-2 border border-gray-300 rounded-md bg-[#f5f6fa]"
                placeholder="Enter SEO title"
              />
            </div>

            <div className="mt-10">
              <label className="block text-sm font-semibold text-gray-700">
                SEO Keywords
              </label>
              <input
                type="text"
                name="seoKeywords"
                value={formData.seoKeywords}
                onChange={handleChange}
                className=" px-3 py-2 mt-2 border border-gray-300 rounded-md bg-[#f5f6fa]"
                placeholder="Enter SEO keywords (comma-separated)"
              />
            </div>
          </div>

          <div className="mx-10">
            <label className="block text-sm font-semibold text-gray-700">
              SEO Description
            </label>
            <textarea
              name="seoDescription"
              value={formData.seoDescription}
              onChange={handleChange}
              className="  mt-2 px-3 py-2 border border-gray-300 rounded-md bg-[#f5f6fa]"
              placeholder="Enter SEO description"
              rows="3"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className=" bg-blue-500 text-white py-2 px-20 rounded-md hover:bg-blue-600 transition"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Settings;
