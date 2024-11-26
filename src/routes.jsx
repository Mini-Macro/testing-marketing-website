import HomePage from "./components/home/HomePage";
import AboutUs from "./components/about us/AboutUs";
import ContactUs from "./components/contact us/ContactUs";
import Offerings from "./components/offerings/Offerings";
import CharteredAccountants from "./components/home/read more/CharteredAccountants";
import BusinessOwner from "./components/home/read more/BusinessOwner";
import AccountingFirm from "./components/home/read more/AccountingFirm";
import ProfessionalAffiliates from "./components/home/read more/ProfessionalAffiliates";

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/offerings", element: <Offerings /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "/chartered-accountant", element: <CharteredAccountants /> },
  { path: "/business-owners", element: <BusinessOwner /> },
  { path: "/accounting-firm", element: <AccountingFirm /> },
  { path: "/professional-affiliates", element: <ProfessionalAffiliates /> },
];
