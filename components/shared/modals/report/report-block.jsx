import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Svg from "@/components/ui/icons/svg";

export default function ReportBlock({ isActive, setReport, icon, name, label }) {
	return (
		<li className='w-full'>
			<Button data-active={isActive} onClick={() => isActive ? setReport("") : setReport(name)} size='full' className='p-3 py-3 data-[active=true]:bg-foreground/[0.08] bg-transparent h-auto' variant='secondary'>
				<Svg icon={icon} className='!w-9 !h-9 text-foreground' />
                <span className="w-full text-start">{label}</span>
                <Checkbox checked={isActive} onClick={() => setReport(name)}/>
			</Button>
		</li>
	);
}
