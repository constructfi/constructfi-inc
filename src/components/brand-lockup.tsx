import Image from "next/image";

export function BrandLockup({ priority = false }: { priority?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5 sm:gap-[11px]">
      <Image
        src="/brand/constructfi-emblem.svg"
        alt=""
        aria-hidden="true"
        width={30}
        height={30}
        className="h-6 w-auto shrink-0 sm:h-[30px]"
        priority={priority}
      />
      <span className="whitespace-nowrap text-[17px] font-bold leading-none tracking-[-0.02em] text-white sm:text-[19px]">
        Construct<span className="text-mint">Fi</span>
      </span>
    </span>
  );
}
