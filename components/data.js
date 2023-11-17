import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Personalized Guidance",
      desc: "Taleem.Options provides individualized support, offering personalized guidance to students as they navigate the complexities of their educational journey.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Predictive University Selection",
      desc: "Leveraging advanced algorithms, Taleem.Options assists students in making informed decisions by predicting optimal university choices based on individual aspirations and goals.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Transformative Education",
      desc: "Beyond a conventional service, Taleem.Options acts as a transformative force, aiming to shape academic futures and empower the next generation with innovative educational solutions.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Commitment to Excellence",
      desc: "Taleem.Options is committed to excellence, dedicating itself to fostering a culture of learning, growth, and success for students by providing reliable and comprehensive support.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Holistic Support",
      desc: "Taleem.Options embraces a holistic approach, offering comprehensive support that extends beyond academic guidance to encompass personal and career development.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Cutting-edge Technology",
      desc: "Employing cutting-edge technology, Taleem.Options ensures a seamless and user-friendly experience for students, making educational decision-making a streamlined and efficient process. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
