import MenuItem from "./MenuItem";
import Image from "./Image/Image";
import Text from "./Text";
import List from "./List";

export default function Menu() {
  const texts = ["About me", "Gallery", "Contact"];
  const personalData = { name: "Anka", lastName: "Skakanka", age: 29 };
  return (
    <>
      {/* nadawanie właścwości komponentom funkcyjnym  4*/}
      {texts.map((item) => (
        <MenuItem key={item} text={item} />
      ))}
      <Image />
      {/* nadawanie właścwości komponentom funkcyjnym 5 */}
      <Text {...personalData} personalData={personalData} />
      {/* nadawanie właścwości komponentom funkcyjnym 6 */}
      <List>
        {texts.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </List>
    </>
  );
}
