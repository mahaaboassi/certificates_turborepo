"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Header = () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
  return (
    <header className="bg-danger gap-2 flex justify-end items-center h-[60px] px-8 shadow-md">
        <Avatar className="h-10 w-10">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{user.name ? user.name.charAt(0) : 'CN'}</AvatarFallback>
        </Avatar>
        <div className="leading-4 flex flex-col justify-center">
            <h3 className="text-md font-medium">{user.name || 'User'}</h3>
            <p className="text-xs text-muted-foreground">{user.role || ''}</p>
        </div>
    </header>
  );
};
export default Header;