'use client';

import { useState } from 'react';

export default function AdmissionForm() {
  const classOptions = ['Nursery', 'LKG', 'UKG', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  const casteOptions = ['General', 'OBC', 'SC', 'ST', 'Other'];

  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    className: '',
    caste: '',
    fatherName: '',
    mobile: '',
    email: '',
    occupation: '',
    address: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [Failed, setFailed] = useState('');
  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.dob) newErrors.dob = 'Date of Birth is required';
    if (!formData.gender) newErrors.gender = 'Please select gender';
    if (!formData.className) newErrors.className = 'Please select class';
    if (!formData.caste) newErrors.caste = 'Please select caste';
    if (!formData.fatherName.trim()) newErrors.fatherName = 'Father/Guardian Name is required';
    if (!/^[0-9]{10}$/.test(formData.mobile)) newErrors.mobile = 'Enter valid 10-digit mobile number';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter valid email address';
    if (!formData.address.trim()) newErrors.address = 'Address is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSuccess('');
    setFailed("")

    try {
      const res = await fetch('/api/admission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error('Failed to submit form');

      setSuccess('Form submitted successfully!');
      setFormData({
        fullName: '',
        dob: '',
        gender: '',
        className: '',
        caste: '',
        fatherName: '',
        mobile: '',
        email: '',
        occupation: '',
        address: ''
      });
    } catch (error) {
        console.log(error)
      setFailed('Failed to submit. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white rounded-lg space-y-6"
    >
      <h2 className="text-2xl font-bold text-[#f82f53] mb-4">Student Information</h2>

      {/* Student Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block font-medium mb-1">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            title="Enter student's full name"
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

        {/* DOB */}
        <div>
          <label htmlFor="dob" className="block font-medium mb-1">Date of Birth</label>
          <input
            id="dob"
            name="dob"
            type="date"
            title="Select date of birth"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
        </div>

        {/* Gender */}
        <div>
          <label htmlFor="gender" className="block font-medium mb-1">Gender</label>
          <select
            id="gender"
            name="gender"
            title="Select gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
        </div>

        {/* Class */}
        <div>
          <label htmlFor="className" className="block font-medium mb-1">Class</label>
          <select
            id="className"
            name="className"
            title="Select class"
            value={formData.className}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select Class</option>
            {classOptions.map((cls) => (
              <option key={cls} value={cls}>{cls}</option>
            ))}
          </select>
          {errors.className && <p className="text-red-500 text-sm">{errors.className}</p>}
        </div>

        {/* Caste */}
        <div>
          <label htmlFor="caste" className="block font-medium mb-1">Caste</label>
          <select
            id="caste"
            name="caste"
            title="Select caste"
            value={formData.caste}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select Caste</option>
            {casteOptions.map((cst) => (
              <option key={cst} value={cst}>{cst}</option>
            ))}
          </select>
          {errors.caste && <p className="text-red-500 text-sm">{errors.caste}</p>}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#f82f53] mt-6">Father Information</h2>

      {/* Father Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Father Name */}
        <div>
          <label htmlFor="fatherName" className="block font-medium mb-1">Father/Guardian Name</label>
          <input
            id="fatherName"
            name="fatherName"
            type="text"
            title="Enter father's or guardian's name"
            placeholder="Enter father's name"
            value={formData.fatherName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.fatherName && <p className="text-red-500 text-sm">{errors.fatherName}</p>}
        </div>

        {/* Mobile */}
        <div>
          <label htmlFor="mobile" className="block font-medium mb-1">Mobile</label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            title="Enter 10-digit mobile number"
            placeholder="Enter mobile number"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            title="Enter email address"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Occupation */}
        <div>
          <label htmlFor="occupation" className="block font-medium mb-1">Occupation</label>
          <input
            id="occupation"
            name="occupation"
            type="text"
            title="Enter occupation"
            placeholder="Enter occupation"
            value={formData.occupation}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Address */}
        <div className="md:col-span-2">
          <label htmlFor="address" className="block font-medium mb-1">Correspondence Address</label>
          <input
            id="address"
            name="address"
            type="text"
            title="Enter correspondence address"
            placeholder="Enter address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
          {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="bg-[#f82f53] text-white px-6 py-2 rounded hover:bg-pink-700 disabled:opacity-50"
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>

      {success && <p className="text-green-500 mt-3">{success}</p>}
      {Failed&& <p className="text-red-500 mt-3">{Failed}</p>}
    </form>
  );
}
