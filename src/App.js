import { useState, useCallback, useMemo } from "react";
import "./styles.css";
import { ChildArea } from "./components/ChildArea";

export const App = () => {
  console.log("最初");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  //inputはeventの引数を取得する
  const onChangeText = (e) => setText(e.target.value);

  //!〇〇でSwitchできるようになる
  const onClickOpen = () => setOpen(!open);

  //useCallback で囲う
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  //変数のmemo化
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
};
