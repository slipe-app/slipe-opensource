import { DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, NestedDrawer } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Svg from "@/components/ui/icons/svg";
import icons from "@/components/ui/icons/icons";

export default function ReportModal({ children, open, setOpen, post }) {
	return (
		<NestedDrawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>{children}</DrawerTrigger>
			<DrawerContent className='bg-modal border-0 overflow-hidden'>
            <DrawerHeader className='p-5'>
					<DrawerTitle className='font-medium'>Report post</DrawerTitle>
				</DrawerHeader>
				<div className='w-full h-[31.5rem] overflow-y-scroll flex flex-col gap-4'>
					<div className='relative w-full overflow-hidden aspect-[16/10] min-h-fit rounded-b-[1.25rem]'>
						<img src='./static/test-assets/mango.jpg' className='w-full absolute -z-10 h-full object-cover' />
						<span className='w-full h-full bg-gradient-to-b from-[#00000040] to-50% to-[#00000000] block' />
					</div>
					<div className='flex flex-col gap-1 px-5'>
						<span className='text-lg text-foreground/50'>Name</span>
						<span className='text-xl font-medium text-foreground'>ABCabc123567</span>
					</div>
					<div className='flex flex-col gap-1 px-5'>
						<span className='text-lg text-foreground/50'>Publish date</span>
						<span className='text-xl font-medium text-foreground'>14.12.2024 at 18:22</span>
					</div>
					<div className='flex flex-col gap-1 px-5'>
						<span className='text-lg text-foreground/50'>Views</span>
						<span className='text-xl font-medium text-foreground'>3,892,671</span>
					</div>
                    <div className='flex flex-col gap-1 px-5'>
						<span className='text-lg text-foreground/50'>Views</span>
						<span className='text-xl font-medium text-foreground'>3,892,671</span>
					</div>
					<div className='flex flex-col gap-1 px-5'>
						<span className='text-lg text-foreground/50'>Category</span>
						<span className='text-xl font-medium text-foreground'>Sport</span>
					</div>
				</div>
			</DrawerContent>
		</NestedDrawer>
	);
}
