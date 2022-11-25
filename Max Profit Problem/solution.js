let unitTime = 13;
let earnings = 3000;

const consider = [{ name: 'T', land: 2, time: 5, earnings: 1500 }, { name: 'P', land: 1, time: 4, earnings: 1000 }, { name: 'C', land: 3, time: 10, earnings: 3000 }];
let possibilities = [];
for (let i = 0; i < 3; i++) {
    let getConsideration = consider[i];
    let tempUnitTime = unitTime;
    let [T, P, C] = [0, 0, 0]

    const addCommercialPark = () => { C += 1; tempUnitTime -= 10; }
    const addPub = () => { P += 1; tempUnitTime -= 4; }
    const addThreater = () => { T += 1; tempUnitTime -= 5; }

    const conderationCallback = [addThreater, addPub, addCommercialPark];

    while (tempUnitTime > getConsideration.time) conderationCallback[i]();
    if( T !== 0 || P !== 0 || C !== 0 ) possibilities.push(`T: ${T}, P: ${P}, C: ${C}`);
}

console.log(possibilities); // These are the possibilities which we can get with on considering time. We can still filter out them with earnings and maximum land occupied.