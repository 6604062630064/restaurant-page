const createHome = () => {
	const inner = document.createElement("div");
	inner.classList.add("inner");
	inner.innerHTML = `
    <div>
        <h1 class="title">Pizza Now!</h1>
    </div>
    <div class="description">
        <p>
            pizza, dish of Italian origin consisting of a flattened disk of
            bread dough topped with some combination of olive oil, oregano,
            tomato, olives, mozzarella or other cheese, and many other
            ingredients, baked quickly—usually, in a commercial setting, using
            a wood-fired oven heated to a very high temperature—and served
            hot.
        </p>
    </div>
    <div class="hours">
        <h3>Hours</h3>
        <ul>
        <li>Sunday: 8am - 8pm</li>
        <li>Monday: 6am - 6pm</li>
        <li>Tuesday: 6am - 6pm</li>
        <li>Wednesday: 6am - 6pm</li>
        <li>Thursday: 6am - 10pm</li>
        <li>Friday: 6am - 10pm</li>
        <li>Saturday: 8am - 10pm</li>
        </ul>
    </div>
    <div class="locations">
        <h3>Locations</h3>
        <p>905 9Th Floor M-Thai Tower 87 Wireless Road, Bangkok</p>
    </div>`;

	const main = document.querySelector(".main");
	main.appendChild(inner);
};

export default createHome;
