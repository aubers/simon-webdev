interface TagProps {
  tag: string;
}

export default function Tag({ tag }: TagProps) {
  return <li className="rounded bg-lightgray px-2 py-1">{tag}</li>;
}
