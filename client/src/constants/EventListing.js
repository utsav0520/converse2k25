import {
  logoHunt,
  bugBuzz,
  codathon,
  webWave,
  cyberSpy,
  itaiQuiz,
  promptHunt,
  aiMemes,
  pyIt,
  bgmi,
  reelCraft,
  iplAuction,
  escapeRoom,
  traitors,
  mysticMover,
  ffm,
  converse,
  graphics,
  web,
  marketing,
  dec,
  nontech,
  financial,
  CodeBridge,
  ezholiday,
} from "../constants/eventNames";

import LogoEscapeRoom from "../assets/eventLogo/nontech/escaperoom.png";

import {
  LogoAiMemes,
  LogoBugBuzz,
  LogoCodathon,
  LogoITAIQuiz,
  LogoLogoHunt,
  LogoPYIT,
  LogoWebWave,
  LogoPromptHunt,
  LogoCyber,
  LogoConverse,
  LogoWebTeam,
  LogoDecoration,
  LogononTEch,
  LogoMarketing,
  LogoGraphics,
  Logofinancial,
  LogoBGMI,
  LogoFFM,
  LogoIPLAuction,
  LogoMystic,
  LogoReelCraft,
  LogoTraitors,
  LogoEventCode,
  LogoAnchor,
  LogoEZholidayNONTECH,
} from "../assets";

export const TechEventListing = {
  [CodeBridge]: {
    name: "CodeBridge",
    slug: CodeBridge,
    image: LogoEventCode,
    slogan: "Test to Placement ",
  },
  [pyIt]: {
    name: "PY IT",
    slug: pyIt,
    image: LogoPYIT,
    slogan: "",
  },
  [itaiQuiz]: {
    name: "IT & AI Quiz",
    slug: itaiQuiz,
    image: LogoITAIQuiz,
    slogan: "",
  },
  [codathon]: {
    name: "Codathon",
    slug: codathon,
    image: LogoCodathon,
    slogan: "",
  },
  [cyberSpy]: {
    name: "Cyber Spy",
    slug: cyberSpy,
    image: LogoCyber,
    slogan: "",
  },
  [webWave]: {
    name: "Web Wave",
    slug: webWave,
    image: LogoWebWave,
    slogan: "",
  },
  [aiMemes]: {
    name: "AI Memes",
    slug: aiMemes,
    image: LogoAiMemes,
    slogan: "",
  },
  [logoHunt]: {
    name: "Logo Hunt",
    slug: logoHunt,
    image: LogoLogoHunt,
    slogan: "",
  },
  [bugBuzz]: {
    name: "Bug Buzz",
    slug: bugBuzz,
    image: LogoBugBuzz,
    slogan: "",
  },
  [promptHunt]: {
    name: "Prompt Hunt",
    slug: promptHunt,
    image: LogoPromptHunt,
    slogan: "",
  },
};

export const NonTechEventListing = {
  [ezholiday]: {
    name: "ezholiday",
    slug: ezholiday,
    image: LogoEZholidayNONTECH,
    slogan: " Answer Right, Travel Bright!",
  },
  [bgmi]: {
    name: "BGMI",
    slug: bgmi,
    image: LogoBGMI,
    slogan: "Survive. Shoot. Win.",
  },
  [reelCraft]: {
    name: "Reel Craft",
    slug: reelCraft,
    image: LogoReelCraft,
    slogan: "Create. Captivate. Repeat.",
  },
  [iplAuction]: {
    name: "IPL Auction",
    slug: iplAuction,
    image: LogoIPLAuction,
    slogan: "Bid Big. Win Bigger!",
  },
  [escapeRoom]: {
    name: "Escape Room",
    slug: escapeRoom,
    image: LogoEscapeRoom,
    slogan: "Solve. Escape. Survive.",
  },
  [traitors]: {
    name: "TRAITORS",
    slug: traitors,
    image: LogoTraitors,
    slogan: "Deceive or Be Deceived!",
  },
  [mysticMover]: {
    name: "Mystic Mover",
    slug: mysticMover,
    image: LogoMystic,
    slogan: "Move with Mystery!",
  },
  [ffm]: {
    name: "FFM",
    slug: ffm,
    image: LogoFFM,
    slogan: "Fun-Filled Mayhem!",
  },
};

export const eventWhatsappLinks = {
  pyIt: "https://chat.whatsapp.com/EjYeaXCeESgFrrx1AQQoUU",
  bugBuzz: "https://chat.whatsapp.com/E4d0Sn6twiMFkT2AVg2IAS",
  codathon: "https://chat.whatsapp.com/BgQhx4QJXhzHTTxGys5Feb",
  promptHunt: "https://chat.whatsapp.com/GtASUTOW26dIqLajqoZd0J",
  aiMemes: "https://chat.whatsapp.com/JDevZVP8J36Jv4W180ZF0o",
  itaiQuiz: "https://chat.whatsapp.com/I4PjEHEiztHH15xemQZwGl",
  webWave: "https://chat.whatsapp.com/GLhjaS2uGs78OMjn0a0OAp",
  cyberSpy: "https://chat.whatsapp.com/BUNOtIdePwGEmzxJXWu4uS",
  logoHunt: "https://chat.whatsapp.com/JMVUUR8J7zo2pVWSlGXT8a",
};

export const TeamListing = {
  [converse]: {
    name: "Converse Team",
    slug: converse,
    image: LogoConverse,
  },
  [financial]: {
    name: "Financial Team",
    slug: financial,
    image: Logofinancial,
  },
  [web]: {
    name: "Web Team",
    slug: web,
    image: LogoWebTeam,
  },
  [graphics]: {
    name: "Graphics Team",
    slug: graphics,
    image: LogoGraphics,
  },
  [marketing]: {
    name: "Marketing Team",
    slug: marketing,
    image: LogoMarketing,
  },
  [dec]: {
    name: "Decoration Team",
    slug: dec,
    image: LogoDecoration,
  },
  [nontech]: {
    name: "Non-Tech Team",
    slug: nontech,
    image: LogononTEch,
  },
  [pyIt]: {
    name: "PY IT",
    slug: pyIt,
    image: LogoPYIT,
  },
  [itaiQuiz]: {
    name: "IT & AI Quiz",
    slug: itaiQuiz,
    image: LogoITAIQuiz,
  },
  [codathon]: {
    name: "Codathon",
    slug: codathon,
    image: LogoCodathon,
  },
  [cyberSpy]: {
    name: "Cyber Spy",
    slug: cyberSpy,
    image: LogoCyber,
  },
  [webWave]: {
    name: "Web Wave",
    slug: webWave,
    image: LogoWebWave,
  },
  [aiMemes]: {
    name: "AI Memes",
    slug: aiMemes,
    image: LogoAiMemes,
  },
  [logoHunt]: {
    name: "Logo Hunt",
    slug: logoHunt,
    image: LogoLogoHunt,
  },
  [bugBuzz]: {
    name: "Bug Buzz",
    slug: bugBuzz,
    image: LogoBugBuzz,
  },
  [promptHunt]: {
    name: "Prompt Hunt",
    slug: promptHunt,
    image: LogoPromptHunt,
  },
  [LogoAnchor]: {
    name: "Anchor Team",
    slug: "anchore",
    image: LogoAnchor,
  },
};
