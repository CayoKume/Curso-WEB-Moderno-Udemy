for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log('i = ', i);

const funcs = [];
for (var u = 0; u < 10; u++) {
    funcs.push(function() {
        console.log(i);
    })
};

funcs[2]();
funcs[8]();