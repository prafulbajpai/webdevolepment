console.log(" i am loop tutorial code")
let a=1;
for (let i = 0; i < 100; i++) {
    console.log(a+i)
}
let obj = {
    name: "praful",
    branch: " cse",
}
for (const key in obj) {
        const element = obj[key];
        console.log( key,element)
    }
    for (const c of "praful") {
        console.log (c)
    }
    // let b = 0 ;
    // while (b<9) {
    //     console.log(b)
    //     b++;
    // }
    let b = 10 ;
    do {
        console.log(b)
        b++;
    } while (b<6);