export function handleResize(years: number[], activeYear: number) {
	const viewboxElement = document.querySelector('.viewbox') as HTMLElement;
	const yearsElement = document.querySelector('.years') as HTMLElement;
	const yearElement = document.querySelector('.year') as HTMLElement;

	// (in rem) calculate the width of the years element according to the width of the year element times the number of years plus the gap between the year elements plus double the border width
	const yearsWidth =
		years.length * pxToRem(yearElement.clientWidth) +
		(years.length - 1) * 3 +
		years.length * 2 * 0.2;

	// (in rem) if the years element is wider than the viewbox element, set the gap to 3rem
	if (pxToRem(viewboxElement.clientWidth) > yearsWidth) {
		viewboxElement.style.setProperty('display', 'flex');
		yearsElement.style.setProperty('--gap', '3rem');
		yearsElement.style.transform = 'translateX(0)';
		return;
	}
	// viewboxElement.style.setProperty('display', 'unset');

	// (in px) calculate the gap between the year elements
	const yearWidth = yearElement.clientWidth;
	// if number of years is 3
	const gapWidth = (viewboxElement.clientWidth - yearWidth * 3) / 2;
	yearsElement.style.setProperty('--gap', `${gapWidth - 9}px`);

	// Position of far left and far right year box
	const cornerOffset = viewboxElement.offsetLeft + Math.abs(yearsElement.offsetLeft);

	// (in px) if first or last box, position to left / right, or center if in between

	switch (activeYear) {
		case years[0]:
			yearsElement.style.transform = `translateX(${cornerOffset}px)`;
			break;
		case years[years.length - 1]:
			yearsElement.style.transform = `translateX(${-cornerOffset}px)`;
			break;
		default:
			const activeYearElement = document.querySelector('.year.active') as HTMLElement;
			const activeYearElementRect = activeYearElement.getBoundingClientRect();
			const yearsElementRect = yearsElement.getBoundingClientRect();
			const offset =
				activeYearElementRect.left -
				yearsElementRect.left -
				yearsElementRect.width / 2 +
				activeYearElementRect.width / 2;
			yearsElement.style.transform = `translateX(${-offset}px)`;
	}
}

function pxToRem(px: number) {
	return px / parseFloat(getComputedStyle(document.documentElement).fontSize);
}
