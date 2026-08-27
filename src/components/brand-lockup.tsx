import Image from "next/image";

const variants = {
  header: {
    gap: "gap-[11px]",
    emblem: "h-[30px]",
    wordmark: "text-[19px]",
  },
  footer: {
    gap: "gap-[10px]",
    emblem: "h-[26px]",
    wordmark: "text-[17px]",
  },
} as const;

type BrandLockupProps = {
  variant: keyof typeof variants;
  priority?: boolean;
};

export function BrandLockup({ variant, priority = false }: BrandLockupProps) {
  const styles = variants[variant];

  return (
    <span className={`inline-flex items-center ${styles.gap}`}>
      <Image
        src="/brand/constructfi-emblem.svg"
        alt=""
        aria-hidden="true"
        width={variant === "header" ? 30 : 26}
        height={variant === "header" ? 30 : 26}
        className={`${styles.emblem} w-auto shrink-0`}
        priority={priority}
      />
      <span className={`${styles.wordmark} font-bold leading-none tracking-[-0.02em] text-white`}>
        Construct<span className="text-mint">Fi</span>
      </span>
    </span>
  );
}
