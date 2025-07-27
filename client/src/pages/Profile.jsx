import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import formOptions from "../constants/formOptions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProfile } from "../auth/auth";


function Profile() {
  const auth = useSelector((state) => state.auth?.authData?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    enrollment: "",
    year: "",
    department: "",
    college: "SCET",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (auth) {
      setFormData((prev) => ({
        ...prev,
        ...auth,
        college: auth.college || "SCET",
      }));
    }
  }, [auth]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await dispatch(updateProfile(formData));

      if (res?.success) {
        toast.success("🎉 Your Profile updated successfully !!", {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
        });

        setTimeout(() => navigate("/profile"), 500);
      } else {
        toast.error(res?.message || "Profile Update Failed", {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
        });
      }
    } catch (err) {
      console.error("Error updating profile", err);
      toast.error("Something went wrong.", {
        position: "top-right",
        autoClose: 5000,
        theme: "dark",
      });
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 w-full max-w-2xl p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Profile</h2>

        {/* Text fields */}
        {[
          { name: "fullName", label: "Full Name" },
          { name: "email", label: "Email", disabled: true },
          {
            name: "enrollment",
            label: "Enrollment",
            placeholder: "ET22BTIT137",
          },
          {
            name: "mobileNumber",
            label: "Mobile Number",
            placeholder: "9512655868",
          },
        ].map(({ name, label, disabled = false, placeholder = "" }) => (
          <div key={name}>
            <label className="block mb-1">{label}:</label>
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              disabled={disabled}
              placeholder={placeholder}
              className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none"
            />
          </div>
        ))}

        {/* Reusable selects */}
        {[
          {
            name: "department",
            label: "Department",
            options: formOptions.departments,
          },
          { name: "year", label: "Year", options: formOptions.years },
          {
            name: "college",
            label: "College Name",
            options: formOptions.colleges,
          },
        ].map(({ name, label, options }) => (
          <div key={name}>
            <label className="block mb-1">{label}:</label>
            <select
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none"
              required
            >
              {options.map(({ value, label }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 transition rounded font-semibold"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}

export default Profile;
