import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Props {
  name: string;
  className?: string;
  fallbackClassName?: string;
  isAdmin: boolean;
}

export const MemberAvatar = ({
  className,
  name,
  fallbackClassName,
  isAdmin,
}: Props) => {
  return (
    <Avatar
      className={cn(
        "size-5 transition border border-neutral-300 rounded-full",
        className,
        isAdmin && "border-orange-600"
      )}
    >
      <AvatarFallback
        className={cn(
          "bg-neutral-200 font-medium text-neutral-500 flex items-center justify-center",
          fallbackClassName
        )}
      >
        {name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
};
