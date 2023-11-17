import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Review from "../components/review";
import Paid from "../components/paid";
import Qdata from "../components/Qdata";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  
  return (
    <>
      <Head>
        <title>Taleem.choice</title>
        <meta
          name="description"
          content="Taleem.Options is powered by a dynamic and dedicated team committed to shaping educational success stories."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="taleem.choice"
        title=" Why should you use taleem.choice">
        In redefining educational empowerment, Taleem.Options offers comprehensive support, global perspectives, tech innovation, and community engagement for students' success.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        Unlock the path to academic success, acquiring essential skills to meet and exceed your educational aspirations confidently.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Review"
        title="Here's what our students said">
        A transformative platform, providing precise guidance and excellence in educational pursuits, truly exceeding expectations.
      </SectionTitle>
      <Review />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
      What are the common questions students often ask about Taleem.Choice and its impact on their educational journey?
      </SectionTitle>
      <Qdata />
      <Paid />
      <Footer />
      <PopupWidget />

    </>
  );
}

export default Home;