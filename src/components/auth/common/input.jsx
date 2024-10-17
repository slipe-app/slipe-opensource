import { useTheme } from "../../common/contexts/themeContext";

export default function AuthInput({ children, placeholder = "", value = "", isFocused, onChange, borderColor = "transparent", textColor = theme.text, maxLength = 24, type = "username" }) {
	const { theme } = useTheme();
	return (
		<div style={{ background: theme.nonTransparentButtonBg, borderColor: borderColor }} className='w-full overflow-hidden flex rounded-3xl duration-200 border-2'>
			{type == "username" ? (
				<span style={{ color: textColor }} className='p-[1rem] opacity-25 pr-0 text-lg'>
					slipe.fun/
				</span>
			) : null}

			<input
				type={type}
				value={value}
				onFocus={() => (isFocused ? isFocused(true) : {})}
				onBlur={() => (isFocused ? isFocused(false) : {})}
				style={{ color: textColor }}
				className={`p-[1rem] ${type == "username" ? "pl-0" : ""} text-lg placeholder:opacity-50 duration-200 bg-transparent w-full outline-none`}
				placeholder={placeholder}
				onChange={element => (onChange ? onChange(element) : {})}
				maxLength={maxLength}
			/>
			{children}
		</div>
	);
}
