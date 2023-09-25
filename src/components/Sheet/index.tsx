import {General} from "./General";
import {Attributes} from "./Attributes";
import {Statistics} from "./Statistics";
import {Resistance} from "./Resistance";

import "./index.css"

export function Sheet() {
  return (
    <div className={"charactersheet tab-pane charsheet"} style={{display: "block"}}>
      <General />
      <Attributes />
      <Statistics />
      <Resistance />
    </div>
  );
}