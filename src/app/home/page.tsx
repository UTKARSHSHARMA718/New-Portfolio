import PageTransition from "@/modules/common/components/PageTransition";
import Hero from "@/modules/home/components/Hero";

const page = () => {
  return (
    <PageTransition>
      <Hero />
    </PageTransition>
  );
};

export default page;
