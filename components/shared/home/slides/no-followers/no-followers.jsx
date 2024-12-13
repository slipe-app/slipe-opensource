export default function NoFollowers() {
    return(
        <div className="w-full h-full flex justify-center items-center gap-4">
            <div className="flex flex-col gap-2">
                <img src="./static/states-assets/nothing.png"/>
                <span className='text-3xl text-foreground font-semibold'>You have no follows</span>
            </div>
        </div>
    )
}