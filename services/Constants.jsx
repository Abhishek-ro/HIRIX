"use client";

import {
  LayoutDashboard,
  WalletCards,
  Calendar,
  List,
  Settings,
  BriefcaseBusiness,
  User2Icon,
  Code2Icon,
  Puzzle,
  Trophy,
} from "lucide-react";

export const SideBarOptions = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Scheduled Interview",
    icon: Calendar,
    path: "/scheduled-interview",
  },
  {
    name: "All Interview",
    icon: List,
    path: "/all-interview",
  },
  // {
  //   name: "Billing",
  //   icon: WalletCards,
  //   path: "/billing",
  // },
  // {
  //   name: "Settings",
  //   icon: Settings,
  //   path: "/settings",
  // },
];

export const InterviewTypes = [
  {
    title: "Technical",
    icon: Code2Icon,
  },
  {
    title: "Behavioral",
    icon: User2Icon,
  },
  {
    title: "Experience",
    icon: BriefcaseBusiness,
  },
  {
    title: "Problem Solving",
    icon: Puzzle,
  },
  {
    title: "Leadership",
    icon: Trophy,
  },
];

