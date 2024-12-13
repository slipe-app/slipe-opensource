export default function NoFollowers() {
    return(
        <div className="w-full h-full flex justify-center animate-[fadeIn_0.3s_ease-out] items-center gap-4">
            <div className="flex flex-col gap-2 items-center">
                <img src="./static/states-assets/nothing.png" className="w-40 h-40"/>
                <span className='text-3xl text-foreground font-semibold'>You have no follows</span>
            </div>
        </div>
    )
}