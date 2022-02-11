for (let i = 0; i < 10; i++) {
    console.log(i);
}
//console.log('i = ', i); isso é um erro porque  olet só é visivel dentro do for

const funcs = [];
for (let u = 0; u < 10; u++) {
    funcs.push(function() {
        console.log(u);
    })
};

funcs[2]();
funcs[8]();