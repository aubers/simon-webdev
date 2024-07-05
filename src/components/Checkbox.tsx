import clsx from "clsx";
import { AiOutlineCheck } from "react-icons/ai";
import { useId } from "react";

interface CheckboxProps {
  name: string;
  checked: boolean;
  onChange(value: boolean): void;
}

export default function Checkbox({ name, checked, onChange }: CheckboxProps) {
  const id = useId();

  const onClick = () => {
    onChange(!checked);
  };

  return (
    <>
      <input
        className="hidden"
        type="checkbox"
        id={id}
        checked={checked}
        readOnly
      />
      <button
        onClick={onClick}
        className={clsx(
          "flex h-3 w-3 items-center justify-center rounded-sm border text-black",
          checked ? "border-primary bg-primary" : "border-white",
        )}
        aria-checked="false"
        aria-controls={id}
      >
        {checked && <AiOutlineCheck className="text-black" />}
      </button>
      <span onClick={onClick} className="cursor-pointer text-sm">
        {name}
      </span>
    </>
  );
}
