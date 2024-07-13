import { Button } from "@/components/ui/button";
import Image from "next/image";
import PatientForm from "@/components/ui/forms/PatientForm";
export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
        <Image 
          src="/assets/icons/logo-full.svg"
          alt="patient"
          width={1000}
          height={1000}
          className="mb-12 h-10 w-fit"/>
          <PatientForm/>
          <div className="text-14-regular mt-20 flex justify-between"><p>© 2024 Carepulse</p></div>
        </div>
      </section>   
      </div>
  );
}
