
import { Footer } from "@/components/ui/footer";
import { Facebook } from "lucide-react";

export const FooterSection = () => {
  return (
    <Footer
      logo=""
      brandName="Vibio"
      socialLinks={[
        {
          icon: <Facebook className="h-5 w-5" />,
          href: "https://www.facebook.com/profile.php?id=61573206923428",
          label: "Facebook",
        },
      ]}
      mainLinks={[{ href: "/", label: "Inicio" }]}
      legalLinks={[{ href: "/terminos", label: "Terminos y condiciones" }]}
      copyright={{
        text: "",
        license: "",
      }}
    />
  );
};
