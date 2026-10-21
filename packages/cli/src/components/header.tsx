export function Header() {
  return (
    <box justifyContent="center" alignItems="center">
      <box flexDirection="row" justifyContent="center" gap={0.5} alignItems="center">
        <ascii-font font="shade" text="Clod" color="gray" />
        <text></text>
        <ascii-font backgroundColor={'#122133'} font="tiny" text="Code" />
      </box>
    </box>
  );
}