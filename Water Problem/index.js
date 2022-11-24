function solveProblem() {
    const input = document.getElementById('input').value;
    const inputarray = input.split(',').map(item => Number(item))
    const [tableWidth, tableHeight] = [inputarray.length, Math.max(...inputarray)];

    const checkForUpFrontLengths = (index, currentMax) => {
        let nextMax = -1;
        for (let i = index; i < inputarray.length; i++) {
            if(inputarray[i] > nextMax) nextMax = inputarray[i];
        }
        return nextMax > currentMax ? currentMax : nextMax;
    }

    let twoDArray = [];
    let temp = [];
    let currentMax = -1;
    for (let i = 0; i < tableWidth; i++) {
        const indexLength = inputarray[i];
        currentMax = indexLength > currentMax ? indexLength : checkForUpFrontLengths(i, currentMax);
        for (let j = 0; j < tableHeight; j++) {
            temp.push(j < indexLength ? 'y' : j < currentMax ? 'b' : 'w');
        }
        twoDArray.push(temp);
        temp = [];
    }


    console.log(twoDArray);

    const colorCode = {
        'y': 'yellow',
        'w': 'white',
        'b': 'blue'
    }

    let waterUnitCounts = 0;
    let tableMap = '<table>'
    for (let j = tableHeight - 1; j >= 0 ; j--) {
        tableMap += '<tr>'
        for (let i = 0; i < tableWidth ; i++) {
            if(twoDArray[i][j] == 'b') waterUnitCounts++;
            tableMap += `<td bgcolor='${colorCode[twoDArray[i][j]]}'>`;
            tableMap += '</td>'
        }
        tableMap += `</tr>`;
    }   
    document.getElementById('table').innerHTML = tableMap;
    document.getElementById('waterCount').innerHTML = `<h1>Water Available: ${waterUnitCounts} units</h1>`;

    
}

solveProblem();