import PageTransition from "@/modules/common/components/PageTransition";
import ContactPreview from "@/modules/contact/components/ContactPreview";

const page = () => {
  return (
    <PageTransition>
      <ContactPreview />
    </PageTransition>
  );
};

export default page;
