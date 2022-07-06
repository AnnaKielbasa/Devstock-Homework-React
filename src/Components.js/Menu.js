import MenuItem from "./MenuItem";
import Image from "./Image/Image";
import Text from "./Text";

export default function Menu() {
  const texts = ["About me", "Gallery", "Contact"];
  const personalData = { name: "Anka", lastName: "Skakanka", age: 29 };
  return (
    <>
      {texts.map((item) => (
        <MenuItem key={item}>{item}</MenuItem>
      ))}
      <Image />
      <Text {...personalData} />
    </>
  );
}
