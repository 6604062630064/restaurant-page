const createMenu = () => {
	const inner = document.createElement("div");
	inner.classList.add("inner");
	inner.innerHTML = `
    <div>
        <h3>Pizza Margherita</h3>
        <img src="./images/margherita.jpg" alt="" />
    </div>
    <div>
        <h3>Pizza al taglio</h3>
        <img src="./images/al taglio.jpg" alt="" />
    </div>`;

	const main = document.querySelector(".main");
	main.appendChild(inner);
};

export default createMenu;
