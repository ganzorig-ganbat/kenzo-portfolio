import fdeyes from "./images/fdeyes.jpg";
import deyes from "./images/deyes.jpg";

const data_socials = {
  linkedin: "https://www.linkedin.com/in/ganzorig-ganbat/",
  github: "https://github.com/ganzorig-ganbat",
  web: "https://ganzorig-ganbat.github.io"
};

const data_home = {
  title: "A frontend developor focusing on modern & clean user interfaces.",
  subtitle:
    "I'm a frontend developer that has been specialising in web design and development for the past 5 years."
};

const data_about = {
  title: "About Me",
  content:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ad ducimus dolore tenetur quaerat ipsum enim aliquid repellat repellendus dolorem vero voluptatem, harum adipisci obcaecati! Voluptatem natus accusantium hic voluptates.",
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
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ad ducimus dolore tenetur quaerat ipsum enim aliquid repellat repellendus dolorem vero voluptatem, harum adipisci obcaecati! Voluptatem natus accusantium hic voluptates.",
  portfolios: [
    {
      id: 1,
      slug: "digitaleyes",
      title: "Digitaleyes Agency Web",
      featured_img: fdeyes,
      link: "https://web.archive.org/web/20140517050802/http://digitaleyes.mn/",
      img: deyes,
      tags: ["wordpress", "html5", "css3", "jquery", "responsive"],
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ad ducimus dolore tenetur quaerat ipsum enim aliquid repellat repellendus dolorem vero voluptatem, harum adipisci obcaecati! Voluptatem natus accusantium hic voluptates."
    },
    {
      id: 2,
      slug: "devsor",
      title: "Devsor Web",
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
