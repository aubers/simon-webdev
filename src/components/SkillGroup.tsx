interface SkillGroupProps {
  name: string;
  skills: string[];
}

export default function SkillGroup({ name, skills }: SkillGroupProps) {
  return (
    <article>
      <div className="flex items-center gap-x-1">
        <div className="h-1 w-14 bg-white"></div>
        <h3>{name}</h3>
      </div>
      <ul className="list-disc pl-4 text-sm opacity-80">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </article>
  );
}
