import fdeyes from "./images/fdeyes.jpg";
import deyes from "./images/deyes.jpg";
import fdevsor from "./images/fdevsor.jpg";
import devsor from "./images/devsor.jpg";
import fboldlu from "./images/fboldlu.jpg";
import boldlu from "./images/boldlu.jpg";
import fadmag from "./images/fadmag.jpg";
import admag from "./images/admag.jpg";
import fpolitik from "./images/fpolitik.jpg";
import politik from "./images/politik.jpg";
import fembassy from "./images/fembassy.jpg";
import embassy from "./images/embassy.jpg";
import fkewiko from "./images/fkewiko.jpg";
import kewiko from "./images/kewiko.jpg";

const data_socials = {
  linkedin: "https://www.linkedin.com/in/ganzorig-ganbat/",
  github: "https://github.com/ganzorig-ganbat",
  web: "https://ganzorig.me"
};

const data_home = {
  title: "A frontend developor focusing on modern & clean user interfaces.",
  subtitle:
    "I'm a frontend developer that has been specialising in web design and development for the past 5 years. I'm very passionate about to build pixel perfect web applications using latest frameworks, web services, and design patterns."
};

const data_about = {
  title: "About Me",
  content:
    "I'm a frontend developer that has been specialising in web design and development for the past 5 years. I'm very passionate about to build pixel perfect web applications using latest frameworks, web services, and design patterns.",
  skills: [
    "JavaScript",
    "React",
    "NodeJS",
    "ExpressJS",
    "HTML5",
    "MongoDB",
    "Wordpress",
    "JSON",
    "jQuery",
    "PHP",
    "Sass",
    "Gulp",
    "Webpack",
    "BEM",
    "Git",
    "XML",
    "VueJS",
    "RESTful API",
    "MySQL",
    "Ajax",
    "Angular",
    "Laravel",
    "CSS3"
  ]
};

const data_work = {
  title: "Work",
  description:
    "I have built about 30 websites for Mongolian Top-100 companies and led every lifecycle including planning, prototyping, designing, development, deployment and customer service.",
  portfolios: [
    {
      id: 1,
      slug: "devsor",
      title: "Devsor.com",
      featured_img: fdevsor,
      link: "https://www.devsor.com/",
      img: devsor,
      tags: [
        "laravel",
        "gulp",
        "sass",
        "jquery",
        "responsive",
        "html5",
        "css3",
        "LAMP"
      ],
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ad ducimus dolore tenetur quaerat ipsum enim aliquid repellat repellendus dolorem vero voluptatem, harum adipisci obcaecati! Voluptatem natus accusantium hic voluptates."
    },
    {
      id: 2,
      slug: "admag",
      title: "Admag - Responsive Blog & Magazine Theme",
      featured_img: fadmag,
      link: "http://digitaltheme.co/admag/",
      img: admag,
      tags: ["wordpress", "html5", "css3", "jquery", "responsive", "PHP MVC"],
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ad ducimus dolore tenetur quaerat ipsum enim aliquid repellat repellendus dolorem vero voluptatem, harum adipisci obcaecati! Voluptatem natus accusantium hic voluptates."
    },
    {
      id: 3,
      slug: "embassy",
      title: "Embassy of Mongolia to the USA",
      featured_img: fembassy,
      link: "http://mongolianembassy.us/",
      img: embassy,
      tags: ["wordpress", "html5", "css3", "jquery"],
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ad ducimus dolore tenetur quaerat ipsum enim aliquid repellat repellendus dolorem vero voluptatem, harum adipisci obcaecati! Voluptatem natus accusantium hic voluptates."
    },
    {
      id: 4,
      slug: "boldlu",
      title: "Bold Luvsanvandan - Personal website",
      featured_img: fboldlu,
      link: "http://boldlu.mn/",
      img: boldlu,
      tags: ["wordpress", "html5", "css3", "jquery", "responsive"],
      content: "Member of the State Great Hural (Parliament) of Mongolia"
    },
    {
      id: 5,
      slug: "kewiko",
      title: "Kewiko - Wifi Mongolia",
      featured_img: fkewiko,
      link: "http://digitaltheme.co/admag/",
      img: kewiko,
      tags: ["wordpress", "html5", "css3", "jquery", "responsive", "PHP MVC"],
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ad ducimus dolore tenetur quaerat ipsum enim aliquid repellat repellendus dolorem vero voluptatem, harum adipisci obcaecati! Voluptatem natus accusantium hic voluptates."
    },
    {
      id: 6,
      slug: "politik",
      title: "Mongolian politic news portal website",
      featured_img: fpolitik,
      link: "http://politik.mn/",
      img: politik,
      tags: ["wordpress", "html5", "css3", "jquery", "responsive"],
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ad ducimus dolore tenetur quaerat ipsum enim aliquid repellat repellendus dolorem vero voluptatem, harum adipisci obcaecati! Voluptatem natus accusantium hic voluptates."
    },
    {
      id: 7,
      slug: "digitaleyes",
      title: "Digitaleyes Agency Web",
      featured_img: fdeyes,
      link: "https://web.archive.org/web/20140517050802/http://digitaleyes.mn/",
      img: deyes,
      tags: ["wordpress", "html5", "css3", "jquery", "responsive"],
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ad ducimus dolore tenetur quaerat ipsum enim aliquid repellat repellendus dolorem vero voluptatem, harum adipisci obcaecati! Voluptatem natus accusantium hic voluptates."
    }
  ]
};

export { data_about, data_home, data_work, data_socials };
