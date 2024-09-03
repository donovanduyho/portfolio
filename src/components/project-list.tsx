import { Separator } from "./ui/separator";
import React from "react";

type ProjectListProps = {
  category: string;
};

export default function ProjectList({ category }: ProjectListProps) {
  return (
    <div className="text-sm">
      <h1 className="capitalize text-[#808080]">{category}</h1>
      <Separator className="my-3" />
    </div>
  );
}
