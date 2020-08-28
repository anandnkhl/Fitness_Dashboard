const getRoundedRect = (x, y, width, height, radius, side='top') => {
	if (width <= 0) {
		radius /= 2;
		// x = x - radius;
		width = radius;
	}

	if (height <= 0) {
		radius /= 2;
		// y = y - radius;
		height = radius;
	}

	let d = "";
	let t_w = width;
	let b_w = width;
	let h = height;
	let Y = y;

	if (side === 'top') {
		t_w = width - 2*radius;
		b_w = width;
		h = height - radius;
		Y = y + radius;
	}
	else if (side === 'bottom') {
		t_w = width;
		b_w = width - 2*radius;
		h = height - radius;
	}
	else if (side === 'left') {
		t_w = width - radius;
		b_w = width - radius;
		Y = y + radius;
	}
	else if (side === 'right') {
		t_w = width - radius;
		b_w = width - radius;
		h = height - 2*radius;
	}

	d += "M" + x + "," + Y;
	if (side === 'top' || side === 'left') {
		d += "a" + radius + "," + radius + " 0 0 1 " + radius + "," + -radius;
	}
	d += "h" + t_w;
	if (side === 'top' || side === 'right') {
		d += "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius;
	}
	d += "v" + h;
	if (side ==='bottom' || side === 'right') {
		d += "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + radius;
	}
	d += "h" + -b_w;
	if (side === 'bottom' || side === 'left') {
		d += "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + -radius;
	}
	d += "z";

	return d;
};

export default getRoundedRect