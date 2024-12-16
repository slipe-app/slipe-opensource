import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Svg from "@/components/ui/icons/svg";
import icons from "@/components/ui/icons/icons";
import ReportModal from "../report/report";

export default function PostInfoModal({ children, open, setOpen, post }) {
	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>{children}</DrawerTrigger>
			<DrawerContent className='bg-modal border-0 overflow-hidden'>
				<DrawerHeader className='p-3 z-20 fixed w-full justify-center'>
					<span className='w-[3.25rem] h-1 rounded-full bg-white/75 block' />
				</DrawerHeader>
				<div className='w-full h-[32.5rem] overflow-y-scroll flex flex-col gap-4'>
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
				<DrawerFooter className='p-5 flex-row overflow-x-auto flex gap-5'>
					<ReportModal>
						<Button variant='secondary' className='rounded-full' size='icon'>
							<Svg icon={icons["flag"]} className='!w-8 !h-8' />
						</Button>
					</ReportModal>
					<Button variant='secondary' className='rounded-full bg-red-foreground/35 text-red-foreground hover:bg-red-foreground/30' size='icon'>
						<Svg icon={icons["trash"]} className='!w-8 !h-8' />
					</Button>
					<Button variant='secondary' className='rounded-full' size='icon'>
						<Svg icon={icons["link"]} className='!w-8 !h-8' />
					</Button>
					<Button variant='secondary' className='rounded-full' size='icon'>
						<Svg icon={icons["download"]} className='!w-8 !h-8' />
					</Button>
					<Button variant='secondary' className='rounded-full' size='icon'>
						<Svg icon={icons["slashedEye"]} className='!w-8 !h-8' />
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
