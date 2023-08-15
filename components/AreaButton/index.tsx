interface Props {
  text: string;
}

export default function AreaButton({ text }: Props) {
  return (
    <button className="text-4xl px-6 py-4 border-4 border-[#40667C] text-[#003351] w-full hover:bg-[#40667C] hover:text-white">
      {text}
    </button>
  );
}
