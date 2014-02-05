var cats = 0;

function start() {
    adoptCat();
    adoptCat();
    findNewHomeForCat();
}

function adoptCat() {
	cats = cats + 1;
}

function findNewHomeForCat() {
	cats = cats - 1;
}
