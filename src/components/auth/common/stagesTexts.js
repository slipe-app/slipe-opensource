import icons from "../../../constants/icons";
import readLocaleFile from "../../../utils/locales/read";

const locales = readLocaleFile("en");

const stagesTexts = {
	0: {
		icon: icons["slipe"],
		main: locales.auth.main_screen.stages.slipe.main,
		primary: locales.auth.main_screen.stages.slipe.primary
	},
	1: {
		icon: icons["blogs"],
		main: locales.auth.main_screen.stages.blogs.main,
		primary: locales.auth.main_screen.stages.blogs.primary
	},
	2: {
		icon: icons["smile"],
		main: locales.auth.main_screen.stages.smile.main,
		primary: locales.auth.main_screen.stages.smile.primary
	},
	3: {
		icon: icons["paint"],
		main: locales.auth.main_screen.stages.paint.main,
		primary: locales.auth.main_screen.stages.paint.primary
	},
	4: {
		icon: icons["terminal"],
		main: locales.auth.main_screen.stages.terminal.main,
		primary: locales.auth.main_screen.stages.terminal.primary
	},
};

export default stagesTexts;
