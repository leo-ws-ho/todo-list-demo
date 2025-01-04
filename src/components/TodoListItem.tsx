export default function TotoListItem({
  item,
}: {
  item: { id: number; content: string; status: string };
}) {
  return <div>{item.id}</div>;
}
