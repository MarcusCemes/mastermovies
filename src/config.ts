export interface ILink {
  text: string;
  link: string;
}

export interface ISocialLink extends ILink {
  icon: string;
}

export const navLinks: ILink[] = [
  { text: "Home", link: "/" },
  { text: "Glacier", link: "/glacier" },
  { text: "API", link: "/docs" },
  { text: "Contact", link: "/contact" },
];

export const footerLinks: ILink[] = [
  { text: "Home", link: "/" },
  { text: "Glacier", link: "/glacier" },
  { text: "API", link: "/docs" },
  { text: "Blog", link: "https://blog.mastermovies.uk" },
  { text: "Contact", link: "/contact" },
];

export const socialLinks: ISocialLink[] = [
  {
    text: "Facebook",
    icon: "facebook",
    link: "https://facebook.com/MarcusCemes",
  },
  { text: "Twitter", icon: "twitter", link: "https://twitter.com/MarcusCemes" },
  {
    text: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/marcus_cemes",
  },
  {
    text: "YouTube",
    icon: "youtube",
    link: "https://www.youtube.com/channel/UCRx9M5nYJfW9F5hsFcklwKQ",
  },
];
