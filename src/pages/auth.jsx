import { useEffect, useState } from "preact/hooks";
import AuthMainScreenWrapper from "../components/auth/common/mainScreenWrapper";
import GameOfLife from "../components/auth/common/gameOfLife";
import { useTheme } from "../components/common/contexts/themeContext";

export default function Auth() {
	const { theme } = useTheme();
	return (
		<main style={{ background: theme.background }} className='w-screen fixed h-screen top-0'>
			<GameOfLife/>
			<AuthMainScreenWrapper />
		</main>
	);
}
