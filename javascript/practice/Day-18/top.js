function whichIsLarger(f, g) {
	
    const first = f();
    const last = g();

    return (first === last) ? 'neither':(first > last)? 'f':'g';
}

const res = whichIsLarger(() => 505050, () => 5050);
console.log(res);