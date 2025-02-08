import { FacebookIcon } from "../assets/icons/FacebookIcon";
import { InstagramIcon } from "../assets/icons/InstagramIcon";
import { TailcastLogo } from "../assets/logos/TailcastLogo";
import { TwitterIcon } from "../assets/icons/TwitterIcon";

const footerData = [
  {
    title: "Products",
    items: ["Services", "About Us", "News and Stories", "Roadmap"],
  },
  {
    title: "Important Links",
    items: [
      "Organization Team",
      "Our Journeys",
      "Pricing Plans",
      "Roadmap",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Company",
    items: ["About Us", "Jobs", "Press", "Contact Us"],
  },
];

export const Footer = () => {
  return (
    

<footer class="rounded-lg shadow-sm h-full">
    <div class="w-fulll mp-4 md:py-8">
      
        <hr class="my-6 border-gray-200  dark:border-gray-700 " />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025. All Rights Reserved.</span>
    </div>
</footer>


  );
};
