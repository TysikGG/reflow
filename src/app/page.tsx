import Chats from "@/UI/chats";
import Main from "@/UI/main";
import Panel from "@/UI/panel";

export default function Home() {
  return (
    <div className="home">
      <Panel />
      <Chats />
      <Main />
    </div>
  );
}
