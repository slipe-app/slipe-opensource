export const randomizeText = (element) => {
    const originalText = element.textContent;
        let step = 0;
        const interval = setInterval(() => {
          step++;
          element.textContent += originalText[step]
          element.textContent = originalText[step]
          if (step >= originalText.length) clearInterval(interval);
        }, 50);
  };
  