import ContactForm from "../component/contact/contactForm";
import ContactHeader from "../component/contact/contactHeader";
import ContactInfo from "../component/contact/contactInfo";
import QuickConnect from "../component/contact/quickContact";

export default function ContactPage() {
  return(
    <>
    <ContactHeader/>
    <ContactInfo/>
    <QuickConnect/> 
    <ContactForm/>
    </>
  )
}
