function start() {
    var ebay = connectToEbay("Ferrari");

    for (;;) {

        if (ebay.isBiddingOver) {
            break;
        }

        if (ebay.currentBid > ebay.myBid) {
            ebay.myBid = ebay.currentBid + 1;
        }
    }
}

function connectToEbay(product) {
    return { isBiddingOver: true };
}