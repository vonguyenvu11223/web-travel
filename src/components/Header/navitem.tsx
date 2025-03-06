"use client";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MenuItemProps } from "@/types";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
export interface INavItemProps {
  menuItem: MenuItemProps[];
}

export default function NavItem({ menuItem }: INavItemProps) {
  return (
    <div className="hidden items-center gap-x-2 lg:flex">
      <NavigationMenu>
        <NavigationMenuList className="p-0">
          {menuItem &&
            menuItem?.length > 0 &&
            menuItem?.map((item: MenuItemProps) => (
              <NavigationMenuItem
                key={item.id}
                className="menu-item relative mb-0"
              >
                {item.children && item.children.length > 0 ? (
                  <NavigationMenuTrigger className="z-50 bg-transparent px-4 py-2 text-base font-medium">
                    <Link
                      href={`${item.url ? item.url : "#"}`}
                      aria-label={item.title}
                      passHref
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuTrigger>
                ) : (
                  <Link
                    href={`${item.url ? item.url : "#"}`}
                    aria-label={item.title}
                    className={"bg-transparent px-4 py-2 text-base font-medium"}
                    passHref
                  >
                    {item.title}
                  </Link>
                )}

                {item.children && item.children.length > 0 && (
                  <ul className="submenu absolute left-0 top-full z-[10000] grid w-[100px] gap-3 rounded-lg bg-white p-4 text-text1 shadow-lg md:w-[200px] md:grid-cols-1 lg:w-[300px]">
                    {item.children &&
                      item.children.length > 0 &&
                      item.children.map((child) => (
                        <ListItem
                          key={child.title}
                          title={child.title}
                          href={child.url || ""}
                        ></ListItem>
                      ))}
                  </ul>
                )}
              </NavigationMenuItem>
            ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

interface ListItemProps {
  className?: string;
  title: string;
  children?: React.ReactNode;
  href: string;
  [key: string]: any;
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: ListItemProps) => {
  return (
    <li>
      <Link
        href={`${href}`}
        aria-label={title}
        className={cn(
          "mb-0 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary",
          className,
        )}
        {...props}
      >
        <div className="cursor-pointer">
          <div className="font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </div>
      </Link>
    </li>
  );
};
