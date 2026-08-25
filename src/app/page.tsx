import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { About } from "@/components/sections/About";
import { DirectorMessage } from "@/components/sections/DirectorMessage";
import { MissionVision } from "@/components/sections/MissionVision";
import { Courses } from "@/components/sections/Courses";
import { ParentalHospital } from "@/components/sections/ParentalHospital";
import { Labs } from "@/components/sections/Labs";
import { AcademicExcellence } from "@/components/sections/AcademicExcellence";
import { Library } from "@/components/sections/Library";
import { Transport } from "@/components/sections/Transport";
import { Achievers } from "@/components/sections/Achievers";
import { CampusLife } from "@/components/sections/CampusLife";
import { Gallery } from "@/components/sections/Gallery";
import { AdmissionsCTA } from "@/components/sections/AdmissionsCTA";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { Contact } from "@/components/sections/Contact";
import { VitalsDivider } from "@/components/ui/VitalsDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <VitalsDivider tone="gold" />
        <DirectorMessage />
        <MissionVision />
        <Courses />
        <ParentalHospital />
        <Labs />
        <AcademicExcellence />
        <Library />
        <Transport />
        <VitalsDivider tone="gold" />
        <Achievers />
        <CampusLife />
        <Gallery />
        <AdmissionsCTA />
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
