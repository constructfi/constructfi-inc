import {
  Boxes,
  Briefcase,
  Building2,
  FileText,
  Gamepad2,
  Gauge,
  Gem,
  GraduationCap,
  HardHat,
  Layers,
  MapPin,
  Package,
  Ruler,
  Target,
  Wallet,
  type LucideIcon,
} from "lucide-react";

// Products store an icon *key* rather than a component so src/lib/products.ts
// stays plain serializable data usable from both server and client trees.
const PRODUCT_ICONS: Record<string, LucideIcon> = {
  gauge: Gauge,
  ruler: Ruler,
  target: Target,
  wallet: Wallet,
  gamepad: Gamepad2,
  boxes: Boxes,
  gem: Gem,
  briefcase: Briefcase,
  graduation: GraduationCap,
  package: Package,
  "file-contract": FileText,
  "hard-hat": HardHat,
  pathway: MapPin,
  city: Building2,
  blocks: Layers,
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
