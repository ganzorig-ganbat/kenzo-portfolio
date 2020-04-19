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
  email: "ganzorig.ganbat42@gmail.com",
};

const data_home = {
  title:
    "A full-stack developer focusing on modern & pixel perfect web applications.",
  subtitle:
    "I'm a full-stack developer that has been specialising in web development for the past 7 years. I'm very passionate about to build pixel perfect web applications using latest frameworks, web services, and design patterns.",
};

const data_about = {
  title: "About Me",
  content:
    "I'm a full-stack developer that has 7 plus years of industry experience. I have received my BS in Information System at the Mongolian University of Science and Technology and I took my masters degree in US. In addition to develop web applications, I enjoy volunteering, dancing, and running.",
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
    "Magento 1 & 2",
    "Wordpress",
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
    "CSS3",
  ],
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
      link:
        "https://web.archive.org/web/20180827115733/https://www.devsor.com/",
      img: devsor,
      tags: [
        "laravel",
        "gulp",
        "sass",
        "jquery",
        "responsive",
        "html5",
        "css3",
        "LAMP",
      ],
      content:
        'Devsor is an international team made up of experienced entrepreneurs and highly skilled developers, all passionate about creating extraordinary customer experiences and serious about revolutionizing e-commerce.\n\nI have built Devsor.com from design to development using Laravel PHP framework, SASS, GULP and jQuery.\n\n![Devsor](https://www.devsor.com/images/workplace.png "Devsor")\n',
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
        'ADMAG is a Blog & Magazine template for Lifestyle, Fashion, Technology, Business or Entertainment websites. It adopts fully responsive design that will look stunning on any device.\n\nADMAG comes with 5 different pre-made demos, 5 different layout options, custom review system, auto load posts, 4 different article templates, powerful ajax mega menu, unlimited color options, 600+ Google Fonts, responsive Google Ads system, and much more!\n\n![ADMAG - 100% reponsive](https://i.imgur.com/1H4kgv5.jpg "ADMAG - 100 % responsive")\n![ADMAG - 100% reponsive](https://i.imgur.com/NCFNhLu.jpg "ADMAG - 100 % responsive")\n![ADMAG - 100% reponsive](https://i.imgur.com/0rgz8m9.jpg "ADMAG - 100 % responsive")\n',
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
        'Mongolianembassy.us is the Embassy of Mongolia to the Unites States of America. The previous version of this website design was very old and we researched a lot and built very clean and modern design with random header image when reload a page.\n\n![Mongolian Embassy to the USA](https://i.imgur.com/2CTlETF.png "Mongolian Embassy to the USA")',
    },
    {
      id: 4,
      slug: "boldlu",
      title: "Bold Luvsanvandan - Personal website",
      featured_img: fboldlu,
      link: "https://web.archive.org/web/20180924035416/http://boldlu.mn:80/",
      img: boldlu,
      tags: ["wordpress", "html5", "css3", "jquery", "responsive"],
      content:
        'Bold Luvsanvandan is a Member of the State Great Hural (Parliament) of Mongolia. I have built his multilanguage website with clean design and responsive design.\n\n![Boldlu](https://i.imgur.com/FOLn47Q.png "Boldlu")\n',
    },
    {
      id: 5,
      slug: "kewiko",
      title: "Kewiko - Wifi Mongolia",
      featured_img: fkewiko,
      link: "https://web.archive.org/web/20191011040031/http://kewiko.mn/",
      img: kewiko,
      tags: ["wordpress", "html5", "css3", "jquery"],
      content:
        'Kewiko is one of the biggest internet provider in Mongolia. I have built their official website and frontend part of the wifi login pages.\n\n![Kewiko](https://i.imgur.com/mmQIrJU.png "Kewiko")',
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
        "Politik.mn is one of the biggest politic portal website in Mongolia. I have built their official website using wordpress and optimized it for the large ammount of traffic.",
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
        'Digitaleyes Agency is the marketing agency in Mongolia. I have built their official website for the Awwward.com to get price. It is a responsive and smooth website.\n\n![Digitaleyes](https://i.imgur.com/YltX730.png "Digitaleyes")',
    },
  ],
};

export { data_about, data_home, data_work, data_socials };
