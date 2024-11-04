"use client";
import { useEffect } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import Image from "next/image";
import example from "../../public/heropic.png";
import "./hero.css";
const Hero = () => {
  useEffect(() => {
    const words: NodeListOf<HTMLElement> = document.querySelectorAll(".word");
    words.forEach((word) => {
      const letters: string[] = word.textContent?.split("") || [];
      word.textContent = "";
      letters.forEach((letter) => {
        const span: HTMLElement = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
      });
    });

    let currentWordIndex: number = 0;
    const maxWordIndex: number = words.length - 1;
    words[currentWordIndex].style.opacity = "1";

    const changerText = (): void => {
      const currentWord: HTMLElement = words[currentWordIndex];
      const nextWord: HTMLElement =
        currentWordIndex === maxWordIndex
          ? words[0]
          : words[currentWordIndex + 1];

      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          (letter as HTMLElement).className = "letter out";
        }, i * 80);
      });

      nextWord.style.opacity = "1";
      Array.from(nextWord.children).forEach((letter, i) => {
        (letter as HTMLElement).className = "letter behind";
        setTimeout(() => {
          (letter as HTMLElement).className = "letter in";
        }, 340 + i * 80);
      });

      currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    changerText();
    const interval = setInterval(changerText, 3000); // 3 seconds interval
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section id="home" className="home">
        <div className="home-content">
          <h1>Hi! I am Alishba</h1>
          <div className="change-text">
            <h3>and i&apos;m</h3>
            <h3>
              <span className="word">Frontend&nbsp;developer</span>
              <span className="word">website&nbsp; creater</span>{" "}
              <span className="word">ui/ux&nbsp; developer</span>
              <span className="word">web&nbsp; developer</span>
            </h3>
          </div>
          <p>
            I am a web developer, creating responsive and user-friendly websites
            using modern technologies.
          </p>
          <div className="info-box">
            <div className="emai-info">
              <h5>Email:</h5>
              <span>alishbarehman526@gmail.com</span>
            </div>
            <div className="behance-info">
              <h5>behance:</h5>
              <span>behance:Good</span>
            </div>
          </div>
          <div className="btn-box">
            <a
              href="https://alishbarehmanportfolio-pegw.vercel.app/"
              className="btn"
            >
              Download CV
            </a>
            <a
              href="https://www.linkedin.com/in/alishba-rehman-29074821a/"
              className="btn"
            >
              Hire Me Now!
            </a>
          </div>

          <div className="social-icons ">
            <a href="#">
              <FaFacebookSquare />
            </a>
            <a href="https://www.linkedin.com/in/alishba-rehman-29074821a/">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@alishbarehman1905">
              <IoLogoYoutube />
            </a>
          </div>
        </div>
        <div className="home-image">
          <div className="image-box">
            <Image src={example} alt="alishba" height={280} width={280} />
          </div>
          <div className="liquid-shape">
            <svg
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              id="blobSvg"
            >
              <path
                id="blob"
                d="M409,345Q402,440,302.5,448.5Q203,457,150,390.5Q97,324,94,249Q91,174,148,112.5Q205,51,304,55Q403,59,409.5,154.5Q416,250,409,345Z"
                fill="#12f7ff"
              >
                <animate
                  attributeName="d"
                  dur="10000ms"
                  repeatCount="indefinite"
                  values="
                  M434,277Q390,304,380.5,332Q371,360,360,404.5Q349,449,309,451.5Q269,454,229.5,457.5Q190,461,168.5,424Q147,387,103,377.5Q59,368,50.5,328.5Q42,289,56,252.5Q70,216,69,176.5Q68,137,98.5,113.5Q129,90,163,77.5Q197,65,232.5,59Q268,53,313.5,42Q359,31,389,63.5Q419,96,439,132.5Q459,169,468.5,209.5Q478,250,434,277Z
                  
                  M442,282Q416,314,406,348.5Q396,383,370.5,411.5Q345,440,308,456Q271,472,230.5,466.5Q190,461,150,448Q110,435,96.5,394.5Q83,354,75.5,319Q68,284,60.5,248.5Q53,213,65,178Q77,143,98,109.5Q119,76,152,48.5Q185,21,225.5,47Q266,73,309,59.5Q352,46,387,69.5Q422,93,448.5,128Q475,163,471.5,206.5Q468,250,442,282Z
                  M480,302.5Q468,355,430,391.5Q392,428,348.5,458.5Q305,489,251.5,483Q198,477,147,460Q96,443,66,398Q36,353,18.5,301.5Q1,250,23,200.5Q45,151,73.5,108Q102,65,151,47Q200,29,251.5,23Q303,17,347,45Q391,73,429,109.5Q467,146,479.5,198Q492,250,480,302.5ZM409,345Q402,440,302.5,448.5Q203,457,150,390.5Q97,324,94,249Q91,174,148,112.5Q205,51,304,55Q403,59,409.5,154.5Q416,250,409,345Z
                          M431.5,328Q374,406,291.5,418Q209,430,142,382Q75,334,58.5,242Q42,150,126.5,113.5Q211,77,272.5,110.5Q334,144,411.5,197Q489,250,431.5,328Z;
                          M398.5,277.5Q421,305,420.5,339.5Q420,374,404.5,408Q389,442,343,418Q297,394,273.5,439.5Q250,485,217,469Q184,453,160,430Q136,407,97,398.5Q58,390,51.5,353.5Q45,317,51,283.5Q57,250,49,216Q41,182,83,170.5Q125,159,123,116Q121,73,164,95.5Q207,118,228.5,93.5Q250,69,279,69.5Q308,70,318,106.5Q328,143,388,124.5Q448,106,467,139.5Q486,173,431,211.5Q376,250,398.5,277.5Z
                          M409,345Q402,440,302.5,448.5Q203,457,150,390.5Q97,324,94,249Q91,174,148,112.5Q205,51,304,55Q403,59,409.5,154.5Q416,250,409,345Z;
                          M422,346Q403,442,309.5,420.5Q216,399,149.5,365Q83,331,92.5,255Q102,179,159.5,142Q217,105,297,97.5Q377,90,409,170Q441,250,422,346Z;
                          M385,311Q348,372,276.5,409.5Q205,447,159.5,381Q114,315,70.5,228.5Q27,142,114.5,90.5Q202,39,276,82Q350,125,386,187.5Q422,250,385,311Z;
                          M378,307Q341,364,268,427Q195,490,156.5,402Q118,314,100,241.5Q82,169,148.5,132.5Q215,96,302,86Q389,76,402,163Q415,250,378,307Z;
                          M449.5,297Q445,344,389.5,350Q334,356,308.5,376.5Q283,397,240.5,437Q198,477,176.5,423Q155,369,123.5,347.5Q92,326,47,288Q2,250,62.5,219.5Q123,189,116,131Q109,73,155.5,55.5Q202,38,246,56.5Q290,75,328,90Q366,105,412,127.5Q458,150,456,200Q454,250,449.5,297Z;
                          M472,301.5Q463,353,420,381.5Q377,410,337,432.5Q297,455,246.5,471Q196,487,157,451Q118,415,85,380.5Q52,346,26.5,298Q1,250,32.5,205.5Q64,161,82,111.5Q100,62,148.5,40.5Q197,19,248,26.5Q299,34,344.5,54.5Q390,75,429,110Q468,145,474.5,197.5Q481,250,472,301.5Z
                          M413,317Q327,384,228,421.5Q129,459,69.5,354.5Q10,250,90,180.5Q170,111,259.5,94.5Q349,78,424,164Q499,250,413,317Z
                          M408.5,336Q349,422,238,443Q127,464,68.5,357Q10,250,80,163Q150,76,260.5,58.5Q371,41,419.5,145.5Q468,250,408.5,336Z
                          M459.5,338Q426,426,338,463Q250,500,164.5,460.5Q79,421,47,335.5Q15,250,49,166.5Q83,83,166.5,49Q250,15,333,49.5Q416,84,454.5,167Q493,250,459.5,338Z
                          M454,336Q422,422,336,452.5Q250,483,170.5,446Q91,409,48,329.5Q5,250,39,161.5Q73,73,161.5,41Q250,9,330.5,49Q411,89,448.5,169.5Q486,250,454,336Z
                          M459.5,337.5Q425,425,337.5,450.5Q250,476,163,450Q76,424,39,337Q2,250,39,163Q76,76,163,40.5Q250,5,330,47.5Q410,90,452,170Q494,250,459.5,337.5Z
                        M445,279.5Q401,309,408,354.5Q415,400,385.5,431Q356,462,312.5,456.5Q269,451,236.5,431Q204,411,152.5,429.5Q101,448,106.5,391.5Q112,335,71.5,313Q31,291,26.5,249Q22,207,41.5,170Q61,133,97,114Q133,95,166.5,85Q200,75,235,55.5Q270,36,314,34Q358,32,385.5,67Q413,102,406,147Q399,192,444,221Q489,250,445,279.5Z
                        M434,279Q428,308,435.5,349Q443,390,409.5,407Q376,424,336.5,409.5Q297,395,273.5,421Q250,447,215,456.5Q180,466,145.5,453.5Q111,441,93,409Q75,377,48,350.5Q21,324,55.5,287Q90,250,89,223.5Q88,197,107.5,178.5Q127,160,118.5,108.5Q110,57,145.5,47Q181,37,215.5,34.5Q250,32,279.5,49.5Q309,67,327,93Q345,119,382,123Q419,127,407,165Q395,203,417.5,226.5Q440,250,434,279Z
                        M418,275.5Q406,301,420.5,342.5Q435,384,408,407Q381,430,345.5,432.5Q310,435,280,433.5Q250,432,215,448.5Q180,465,149.5,447.5Q119,430,117.5,388.5Q116,347,91,328.5Q66,310,38,280Q10,250,11.5,211.5Q13,173,40,145Q67,117,106,111.5Q145,106,170.5,95Q196,84,223,80.5Q250,77,285,55.5Q320,34,344.5,60.5Q369,87,387.5,112Q406,137,405.5,168.5Q405,200,417.5,225Q430,250,418,275.5Z
                        M484.5,286.5Q474,323,460,357.5Q446,392,398,390Q350,388,336,429.5Q322,471,286,480Q250,489,223.5,451Q197,413,152,430Q107,447,103.5,403Q100,359,98.5,329.5Q97,300,92.5,275Q88,250,64.5,216Q41,182,46.5,144Q52,106,82.5,83.5Q113,61,146.5,47.5Q180,34,215,19Q250,4,285.5,18Q321,32,330,80Q339,128,365,138Q391,148,428.5,164Q466,180,480.5,215Q495,250,484.5,286.5Z
                        M468,287Q479,324,449.5,348.5Q420,373,403.5,405.5Q387,438,338,403.5Q289,369,269.5,425Q250,481,213,478.5Q176,476,163.5,431.5Q151,387,106.5,387Q62,387,52.5,352Q43,317,66,283.5Q89,250,78,220.5Q67,191,85,167Q103,143,110,105Q117,67,160,86.5Q203,106,226.5,76Q250,46,287.5,32Q325,18,358,37Q391,56,389,103Q387,150,387,178Q387,206,422,228Q457,250,468,287Z
                        M419,276.5Q413,303,426.5,345.5Q440,388,405.5,402.5Q371,417,330,394Q289,371,269.5,402.5Q250,434,216,447Q182,460,147.5,449Q113,438,97,405.5Q81,373,52.5,348.5Q24,324,68.5,287Q113,250,110,227Q107,204,126.5,189.5Q146,175,129,117.5Q112,60,147.5,52Q183,44,216.5,42Q250,40,277.5,60.5Q305,81,318.5,109Q332,137,371.5,135Q411,133,391.5,171.5Q372,210,398.5,230Q425,250,419,276.5Z"
                ></animate>
              </path>
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
