import { TextAttributes } from "@opentui/core"

export default function StatusBar() {
  return (
    <box
    flexDirection='row'gap={1}>
    <text fg="cyan">BUILD</text>
    <text attributes={TextAttributes.BOLD} fg="grey">
    ›
    </text>
    <text>Opus 4.6</text>
    </box>
  );
}
