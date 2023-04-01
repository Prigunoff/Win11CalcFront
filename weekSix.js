//Retry 
class MultiplicatorUnitFailure extends Error { }

function primitiveMultiply(a, b) {
    if (Math.random() < 0.2) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Fail");
    }
}

function reliableMultiply(a, b) {
    for (; ;) { // infinite loop
        try {
            return primitiveMultiply(a, b);
        } catch (error) {
            if (!(error instanceof MultiplicatorUnitFailure)) {
                throw error;
            }
        }
    }
}
// The Locked Box

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    let wasLocked = box.locked;
    if (wasLocked) box.unlock();
    try {
        body();
    } catch (e) {
        console.log("Error raised: " + e);
    } finally {
        if (wasLocked) box.lock();
    }
}

withBoxUnlocked(function () {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function () {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: " + e);
}
// Phone Number

function createPhoneNumber(numbers) {
    const areaCode = numbers.slice(0, 3).join('');
    const prefix = numbers.slice(3, 6).join('');
    const lineNumber = numbers.slice(6, 10).join('');
    return `(${areaCode}) ${prefix}-${lineNumber}`;  
}


function main() {
    console.log(reliableMultiply(8, 8));
    console.log(box.lock);
    const phoneNumber = createPhoneNumber([1, 2, 3,4, 5, 6, 7, 8, 9, 0]);
    console.log(phoneNumber);
}
main();