import { TabNav } from "@radix-ui/themes";

const NavbarMain = () => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/2">
        <img
          alt="Your Company"
          src="https://media.discordapp.net/attachments/1274988572679864412/1289996431712845905/Logo.png?ex=6744ae4c&is=67435ccc&hm=3ffde792c371b6988f6b0f7f2dfebbb4da9a785bf5b47629c3787eb349ca9da7&=&format=webp&quality=lossless"
          className="flex justify-center items-center h-14 mx-8"
        />
      </div>
      <div className="basis-1/2 flex flex-row-reverse p-2 mx-2">
        <TabNav.Root>
          <TabNav.Link href="#">
            Home
          </TabNav.Link>
          <TabNav.Link href="#">Monitor</TabNav.Link>
          <TabNav.Link href="Msproduct">Report Product</TabNav.Link>
          <TabNav.Link href="Msbox">Report Box</TabNav.Link>
          <TabNav.Link href="#">Calculation</TabNav.Link>
          <TabNav.Link href="#">Export</TabNav.Link>
          <TabNav.Link href="login">Log Out</TabNav.Link>
        </TabNav.Root>
      </div>
    </div>
  );
};

export default NavbarMain;
