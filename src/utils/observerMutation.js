const MutationPlugin = slider => {
	const observer = new MutationObserver(function (mutations) {
		mutations.forEach(function (mutation) {
			slider.update();
		});
	});
	const config = { childList: true };

	slider.on("created", () => {
		observer.observe(slider.container, config);
	});
	slider.on("destroyed", () => {
		observer.disconnect();
	});
};

export default MutationPlugin;
