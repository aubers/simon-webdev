import { Project } from "../../lib/Project";

export const example2: Project = {
  icon: "https://placehold.co/64x64/pink/black",
  title: "Example 2",
  description: "An example project number 2.",
  url: "https://example-2.com/",
  text: (
    <>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. <strong>Richard McClintock</strong>, a Latin
        professor at Hampden-Sydney College in Virginia, looked up one of the
        more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
        going through the cites of the word in classical literature, discovered
        the undoubtable source.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to <strong>make a type</strong> specimen book. It has
        survived not only five centuries, but also the leap into electronic
        typesetting, remaining essentially unchanged. It was popularised in the
        1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </p>
    </>
  ),
  images: ["https://placehold.co/800x600/yellow/black"],
  tags: ["Tag 1", "Tag 3"],
};
