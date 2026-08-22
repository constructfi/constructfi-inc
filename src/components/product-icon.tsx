import {
  Blocks,
  Boxes,
  Briefcase,
  Building2,
  FileCheck2,
  Gamepad2,
  Gem,
  GraduationCap,
  HandCoins,
  Landmark,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

// Products store an icon *key* rather than a component so src/lib/products.ts
// stays plain serializable data usable from both server and client trees.
const PRODUCT_ICONS: Record<string, LucideIcon> = {
  hub: Briefcase,
  house: Landmark,
  contract: FileCheck2,
  megaphone: Megaphone,
  "cap-arrow": GraduationCap,
  bag: HandCoins,
  cube: Boxes,
  gamepad: Gamepad2,
  skyline: Building2,
  brick: Blocks,
  gem: Gem,
};

export function ProductIcon({
  icon,
  size = 20,
}: {
  icon: string;
  size?: number;
}) {
  const Icon = PRODUCT_ICONS[icon] ?? Boxes;
  return <Icon width={size} height={size} strokeWidth={1.7} aria-hidden />;
}
