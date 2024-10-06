import { useEffect, useState } from "preact/hooks";
import AuthMainScreenWrapper from "../components/auth/common/mainScreenWrapper";
import GameOfLife from "../components/auth/common/gameOfLife";

export default function Auth() {
	return (
		<>
			<GameOfLife/>
			<AuthMainScreenWrapper />
		</>
	);
}
