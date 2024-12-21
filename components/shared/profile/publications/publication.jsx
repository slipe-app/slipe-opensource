import cdn from "@/constants/cdn";
import { cn } from "@/lib/utils";

export default function Publication({ className, post, ...props}) {
    return(
        <div className={cn("w-full aspect-[37/57] overflow-hidden relative flex items-end rounded-[1.125rem]", className)} {...props}>
            <img src={cdn + "/posts/" + post?.image} loading="lazy" className="w-full h-full object-cover absolute -z-10"/>
            <span className='w-full h-full absolute bg-gradient-to-t from-[#00000040] to-50% to-[#00000000] block' />
            <div className="p-4 flex flex-col text-white">
                <span className="font-medium text-xl">{post?.in_search || "No name."}</span>
                <span className="opacity-75">{post?.views || 0} views</span>
            </div>
        </div>
    )
}