import PageTransition from "@/modules/common/components/PageTransition";
import Hero from "@/modules/home/components/Hero";

const page = () => {
  return (
    <PageTransition className="flex-1 flex flex-col">
      <Hero />
    </PageTransition>
  );
};

export default page;
