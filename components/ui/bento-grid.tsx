"use client"
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./background-gradient-animation";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  img,
  imgClassName,
  titleClassName,
  key,
  id
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?:string;
  imgClassName?:string;
  titleClassName?:string;
  key:string;
  id:string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1  rounded-xl group/bento relative  hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 mb-7",
        className
      )}
      style={{
        background:' rgb(66,0,0)' , backgroundColor:' linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(105,7,7,1) 100%, rgba(0,0,0,1) 100%)'
      }}
    >
      <div className={cn(className,'bg-black-200 h-full justify-center')}>
        <div className="w-full h-full absolute">
          {img && (
            <img
            src={img}
            alt="{img}"
            className={cn(imgClassName, 'object-cover object-center')}
            ></img>
          )}
        </div>
        

      </div>
      {id === "3" && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-40 inset-0 flex items-center justify-center  text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">

            </div>
          </BackgroundGradientAnimation>
        )}
      
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold z-50 text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
