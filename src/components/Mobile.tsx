import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface MobProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}
const Mobile = ({ imgSrc, className, dark = false, ...props }: MobProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hiden",
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        className="pointer-events-none z-50 select-none"
        alt="phone image"
      />

      <div className="absolute -z-10 inset-0">
        <img
          className="object-cover min-w-full min-h-full"
          src={imgSrc}
          alt="Overlaying Image"
        />
      </div>
    </div>
  );
};

export default Mobile;
