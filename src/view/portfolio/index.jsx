
// styles: 
import useStyles from "./index.styles";

// components: 
import Header from "../../components/header";
import HeroSection from "../../components/hero-section";
import AboutMe from "../../components/about-me";
import Experiences from "../../components/experiences";
import Certifications from "../../components/certifications";
import Skills from "../../components/skills";
import Projects from "../../components/projects";
import GithubHeatmap from "../../components/github-heatmap";
// import LeetcodeHeatmap from "../../components/leetcode-heatmap";
import Contact from "../../components/contact";
import Footer from "../../components/footer";

const Portfolio = () => {

  const classes = useStyles();

  return (
    <div className={`${classes.portfolioWrapper} scrollbar`}>
      <Header />
      <HeroSection />
      <AboutMe />
      <Experiences />
      <Certifications />
      <Skills />
      <Projects />
      <GithubHeatmap />
      {/* <LeetcodeHeatmap /> */}
      <Contact />
      <Footer />
    </div>
  )
};

export default Portfolio;