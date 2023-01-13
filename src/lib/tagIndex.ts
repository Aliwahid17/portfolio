import type { Blog } from "src/app";

export const tagIndex = (post: Blog[] , title: string) : number => {
    return post.findIndex((position : Blog ) => position.postTitle === title);
};

const colors = [
    "bg-cyan-700 text-white",
    "bg-slate-700 text-white",
    "bg-yellow-700 text-white",
    "bg-[#FEE715FF] text-[#101820FF]",
    "bg-[#ADD8E6] text-[#00008b]",
    "bg-[#2C5F2DFF] text-[#FFE77AFF]",
    "bg-[#234E70] text-[#FBF8BE]",
    "bg-[#ADEFD1FF] text-[#00203FFF]",
    "bg-[#990011FF] text-[#FCF6F5FF]",
    "bg-[#F2EDD7FF] text-[#755139FF]",
    "bg-[#422057FF] text-[#FCF951FF] ",
    "bg-[#606060FF] text-[#D6ED17FF]",
    "bg-[#F2AA4CFF] text-[#101820FF] ",
    "bg-[#00539CFF] text-[#FFD662FF] ",
];

export const color = () => {
    return colors[Math.floor(Math.random() * 14)]
}