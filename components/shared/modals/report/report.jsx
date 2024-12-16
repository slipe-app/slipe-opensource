import { DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, NestedDrawer } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import Svg from "@/components/ui/icons/svg";
import icons from "@/components/ui/icons/icons";
import { useState } from "react";
import ReportBlock from "./report-block";

export default function ReportModal({ children, open, setOpen, post }) {
	const [choosenReport, setChoosenReport] = useState('');
	const reports = [
		{ icon: icons["copyright"], name: "copyrights", label: "Copyright" },
		{ icon: icons["xxx"], name: "pornography", label: "Pornography" },
		{ icon: icons["drug"], name: "illegal_drugs", label: "Illegal drugs" },
		{ icon: icons["warning"], name: "child_abuse", label: "Child abuse" },
		{ icon: icons["knife"], name: "violence", label: "Violence" },
		{ icon: icons["key"], name: "hacked_account", label: "Hacked account" },
		{ icon: icons["user"], name: "personal_information", label: "Personal information" },
		{ icon: icons["trash"], name: "spam", label: "Spam" },
	];

	return (
		<NestedDrawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>{children}</DrawerTrigger>
			<DrawerContent className='bg-modal border-0 overflow-hidden'>
				<DrawerHeader className='p-5'>
					<DrawerTitle className='font-medium'>Report post</DrawerTitle>
				</DrawerHeader>
				<ul className='w-full h-[32.5rem] overflow-y-scroll px-5 flex pb-24 flex-col gap-1'>
					{reports.map((report, index) => (
						<ReportBlock setReport={setChoosenReport} isActive={choosenReport === report.name} label={report.label} icon={report.icon} key={index} name={report.name}/>
					))}
				</ul>
				<DrawerFooter className="p-5 fixed w-full z-10 bg-modal bottom-0">
					<Button disabled={choosenReport.length <= 1} size='full'>Send report</Button>
				</DrawerFooter>
			</DrawerContent>
		</NestedDrawer>
	);
}
