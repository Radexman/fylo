// Dark Mode Toggler and Dynamic UI

// Dom Elements
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const earlyAccessForm = document.getElementById('early-access-form');
const errorMsg = document.getElementById('error-msg');
const successMsg = document.getElementById('success-msg');

if (
	localStorage.getItem('color-theme') === 'dark' ||
	(!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches)
) {
	// Show Light Icon
	themeToggleLightIcon.classList.remove('hidden');
} else {
	// Show Dark Icon
	themeToggleDarkIcon.classList.remove('hidden');
}

// Listen for toggle button click
themeToggleBtn.addEventListener('click', toggleMode);

function toggleMode() {
	// Toggle icon
	themeToggleDarkIcon.classList.toggle('hidden');
	themeToggleLightIcon.classList.toggle('hidden');

	// If is set in localStorage
	if (localStorage.getItem('color-theme')) {
		// If light, make dark and save in localStorage
		if (localStorage.getItem('color-theme') === 'light') {
			document.documentElement.classList.add('dark');
			localStorage.setItem('color-theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('color-theme', 'light');
		}
	} else {
		//  If not in localStorage
		if (document.documentElement.classList.contains('dark')) {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('color-theme', 'light');
		} else {
			document.documentElement.classList.add('dark');
			localStorage.setItem('color-theme', 'dark');
		}
	}
}

// Early Access Form Validation
earlyAccessForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const input = e.target.firstElementChild.firstElementChild.value;

	if (input === '') {
		errorMsg.classList.remove('hidden');
		return;
	}
	errorMsg.classList.add('hidden');
	successMsg.classList.remove('hidden');
});
