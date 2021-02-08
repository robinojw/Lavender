import { Cta } from "../content";

interface Social {
  image: string;
  link: string;
}

interface FooterContent {
  social: Array<Social>;
  links: Array<Cta>;
  contact: Array<string>;
}

interface FooterProps {
  footer: FooterContent;
}

export const Footer = ({ footer }: FooterProps) => {
  return <div />;
};
