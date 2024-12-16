import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(
			"peer h-7 w-7 shrink-0 rounded-full duration-200 ease-out border-2 border-foreground/35 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 p-1 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary",
			className
		)}
		{...props}
	>
		<CheckboxPrimitive.Indicator forceMount className={cn("w-full h-full rounded-full block duration-200 ease-out bg-primary opacity-0 scale-[0.85] origin-center data-[state=checked]:scale-100 data-[state=checked]:opacity-100")} />
	</CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
