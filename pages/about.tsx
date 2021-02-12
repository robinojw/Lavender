import { AboutComponent } from "../components/about-component/about-component";

const about = {
  title:
    "I'm an English teacher from Richmond Virginia. Phil is love, Phil is life. #livingmybestlife",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt euismod enim, fringilla elementum tortor tristique et. Sed rutrum sapien vel elit lobortis suscipit.",
  subDes:
    " Nunc mollis tortor lorem, sed ornare erat blandit eu. Morbi rhoncus ornare neque, in pulvinar tellus placerat non. Pellentesque quam tortor, volutpat at est ac",
  email: "grace@lavenderenglish.com",
  phone: "01284726036"
};

export default function About() {
  return (
    <>
      <AboutComponent about={about} />
    </>
  );
}
