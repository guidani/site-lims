import Image from "next/image";

interface IProjectCard {
  img: string;
  title: string;
  shortDescription: string;
  linkTo: string;
}

export default function ProjectCard() {
  return (
    <div className="block rounded-lg bg-white dark:bg-neutral-700 max-w-fit">
      <Image
        src={"https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"}
        className="rounded-t-lg w-full"
        alt="imagem"
        width={"300"}
        height={"300"}
      />
      <div className="p-6 max-w-sm">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Card title
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
        <button
          type="button"
          className="bg-[--dark-primary] text-white inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:bg-primary-600 focus:bg-primary-600  focus:outline-none focus:ring-0 active:bg-primary-700 "
        >
          <a href="#">Ler mais...</a>
        </button>
      </div>
    </div>
  );
}
