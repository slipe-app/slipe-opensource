import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export { default as fetcher } from "@/lib/utils/fetcher";
export { default as ReactionClicked } from "@/lib/utils/set-reactions";
export { default as TimePassedFromDate } from "@/lib/utils/time-from-date";
