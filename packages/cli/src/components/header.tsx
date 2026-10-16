export function Header() {
  return (
    <box justifyContent="center" alignItems="center">
      <box flexDirection="row" justifyContent="center" gap={0.5} alignItems="center">
        <ascii-font font="shade" text="Night" color="gray" />
        <ascii-font backgroundColor={'#ythigb'} font="tiny" text="Code" />
      </box>
    </box>
  );
}