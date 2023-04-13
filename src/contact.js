const createContact = () => {
	const inner = document.createElement("div");
	inner.classList.add("inner");
	inner.innerHTML = `
    <h3>055-555555</h3>`;

	const main = document.querySelector(".main");
	main.appendChild(inner);
};

export default createContact;
