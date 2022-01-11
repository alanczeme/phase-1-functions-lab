// Code your solution in this file!

function distanceFromHqInBlocks(streetNumber) {
    return Math.abs(streetNumber - 42);
}

function distanceFromHqInFeet(streetNumber) {
    return Math.abs(streetNumber - 42) * 264;
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
}

function calculatesFarePrice(start, destination) {
    const distance = Math.abs(start - destination) * 264;
    switch (true) {
        case distance > 2500:
            return "cannot travel that far";
        case distance > 2000:
            return 25;
        case distance > 400:
            return (distance - 400) * 0.02
        case distance <= 400:
            return 0;
    }
}


