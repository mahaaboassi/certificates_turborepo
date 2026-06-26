import { RoutesProps } from "@/constants/schema";
import {
  LayoutDashboard,
  Users,
  Building2,
  GraduationCap,
  Plus,
  List,
} from "lucide-react";


export const Routes: RoutesProps[] = [
  {
    name: "Dashboard",
    key: "dashboard",
    link: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Users",
    key: "users",
    link: "/users",
    icon: Users,
    children: [
      {
        name: "List Users",
        key: "users-list",
        link: "/users",
        icon: List,
      },
      {
        name: "Add User",
        key: "users-add",
        link: "/users/add",
        icon: Plus,
      },
    ],
  },
  {
    name: "Institutions",
    key: "institutions",
    link: "/institutions",
    icon: Building2,
    children: [
      {
        name: "List Institutions",
        key: "institutions-list",
        link: "/institutions",
        icon: List,
      },
      {
        name: "Add Institution",
        key: "institutions-add",
        link: "/institutions/add",
        icon: Plus,
      },
    ],
  },
  {
    name: "Certificates",
    key: "certificates",
    link: "/certificates",
    icon: GraduationCap,
    children: [
      {
        name: "All Certificates",
        key: "certificates-list",
        link: "/certificates",
        icon: List,
      },
      {
        name: "Create Certificate",
        key: "certificates-add",
        link: "/certificates/add",
        icon: Plus,
      },
    ],
  },
];