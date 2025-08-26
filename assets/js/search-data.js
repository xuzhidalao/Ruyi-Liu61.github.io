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
  },{id: "nav-presentations",
          title: "Presentations",
          description: "A list of talks and poster presentations that I gave.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/presentations/";
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
          description: "CV, Teaching and professional service.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/vitae/";
          },
        },{id: "news-",
          title: '',
          description: "",
          section: "News",},{id: "news-our-work-data-driven-interval-robust-optimization-method-of-vpp-bidding-strategy-in-spot-market-under-multiple-uncertainties-is-published-by-applied-energy",
          title: 'Our work “Data-Driven interval robust optimization method of VPP Bidding strategy in spot...',
          description: "",
          section: "News",},{id: "news-our-work-vulnerable-european-and-american-options-in-a-market-model-with-optional-hazard-process-is-accepted-by-finance-and-stochastics",
          title: 'Our work “Vulnerable European and American options in a market model with optional...',
          description: "",
          section: "News",},{id: "news-officially-started-the-lecturer-role-at-math-amp-amp-stats-school-unsw",
          title: 'Officially started the Lecturer role at Math &amp;amp;amp; Stats School @ UNSW.',
          description: "",
          section: "News",},{id: "news-our-work-optimal-information-disclosure-in-a-stackelberg-game-is-accessible-online",
          title: 'Our work “Optimal Information Disclosure In A Stackelberg Game” is accessible online',
          description: "",
          section: "News",},{id: "news-our-work-pairs-trading-an-optimal-selling-rule-with-constraints-is-published-online-by-communications-in-mathematical-sciences",
          title: 'Our work “Pairs trading: An optimal selling rule with constraints” is published online...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%75%79%69.%6C%69%75%32@%75%6E%73%77.%65%64%75.%61%75", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7435-857X", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Ruyi-Liu/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=YnEu5FgAAAAJ", "_blank");
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
