import {
  GraduationCap,
  FlaskConical,
  Stethoscope,
  Users,
  Building2,
  Bus,
  HeartPulse,
  Bone,
  Home as HomeIcon,
  Apple,
  Baby,
  Microscope,
  MonitorPlay,
  Target,
  Eye,
  BookOpen,
  MapPin,
  Mail,
  Phone,
  MessageCircle,
  type LucideProps,
} from "lucide-react";

const registry = {
  GraduationCap,
  FlaskConical,
  Stethoscope,
  Users,
  Building2,
  Bus,
  HeartPulse,
  Bone,
  HomeIcon,
  Apple,
  Baby,
  Microscope,
  MonitorPlay,
  Target,
  Eye,
  BookOpen,
  MapPin,
  Mail,
  Phone,
  MessageCircle,
};

export type IconName = keyof typeof registry;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = registry[name];
  if (!Component) return null;
  return <Component {...props} />;
}
