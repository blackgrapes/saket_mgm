import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Reach Out to Us</h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {/* Address */}
          <div className="bg-gray-50 rounded-xl shadow-sm p-8 text-center">
            <MapPin className="w-10 h-10 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Our Address</h3>
            <p className="text-gray-600">
              Saket MGM Senior Secondary School, <br />
              123 School Lane, Education City, <br />
              Bhopal, India - 462001
            </p>
          </div>

          {/* Phone Numbers */}
          <div className="bg-gray-50 rounded-xl shadow-sm p-8 text-center">
            <Phone className="w-10 h-10 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Phone Numbers</h3>
            <p className="text-gray-600">+91 123 456 7890 (Reception)</p>
            <p className="text-gray-600">+91 987 654 3210 (Admissions)</p>
          </div>

          {/* Email Addresses */}
          <div className="bg-gray-50 rounded-xl shadow-sm p-8 text-center">
            <Mail className="w-10 h-10 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Email Addresses</h3>
            <p className="text-gray-600">info@saketmgmschool.com</p>
            <p className="text-gray-600">admissions@saketmgmschool.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
