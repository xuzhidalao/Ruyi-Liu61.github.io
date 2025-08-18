// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-vitae",
          title: "Vitae",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/vitae/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-received-and-accepted-the-offer-from-columbia-business-school",
          title: 'Received and accepted the offer from Columbia Business School.',
          description: "",
          section: "News",},{id: "news-officially-started-my-academic-endeavor-at-columbia-business-school",
          title: 'Officially started my academic endeavor at Columbia Business School.',
          description: "",
          section: "News",},{id: "news-passed-my-first-year-paper-departmental-presentation",
          title: 'Passed my first-year paper departmental presentation.',
          description: "",
          section: "News",},{id: "news-obtained-my-phd-candidacy-at-columbia-business-school",
          title: 'Obtained my PhD candidacy at Columbia Business School.',
          description: "",
          section: "News",},{id: "news-presented-my-paper-to-external-audiences-for-the-first-time-in-my-career",
          title: 'Presented my paper to external audiences for the first time in my career....',
          description: "",
          section: "News",},{id: "news-pairs-trading-an-optimal-selling-rule-with-constraints-is-published-online-by-communications-in-mathematical-sciences",
          title: '“Pairs trading: An optimal selling rule with constraints” is published online by Communications...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%6A%32%35%32%36@%63%6F%6C%75%6D%62%69%61.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/d-jiao", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/dian-jiao-dj2526", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0002-9599-0168", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=LFgnyyMAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
