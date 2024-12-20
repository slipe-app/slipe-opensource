import { cn } from "@/lib/utils";

export default function Publication({ className, ...props}) {
    return(
        <div className={cn("w-full aspect-[37/57] overflow-hidden relative flex items-end rounded-[1.125rem]", className)} {...props}>
            <img src="./static/test-assets/blur.png" loading="lazy" className="w-full h-full object-cover absolute -z-10"/>
            <div className="p-4 flex flex-col text-white">
                <span className="font-medium text-xl">Mango</span>
                <span className="opacity-75">23.6K views</span>
            </div>
        </div>
    )
}