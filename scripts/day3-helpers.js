export function getMostCommon(inputArr) {
    let posArr = [
        [], //1st
        [], //2nd
        [], //3rd
        [], //4th
        [], //5th
        [], //6th
        [], //7th
        [], //8th
        [], //9th
        [], //10th
        [], //11th
        []  //12th
    ]

    inputArr.forEach(function(binCluster){
        for ( let i = 0; i < binCluster.length; i++) {
            posArr[i].push(binCluster[i])
        }
    })
    let gammaBinArr = []
    let epsilonBinArr = []

    posArr.forEach(function(pos) {
        //console.log(pos.filter(bin => bin == 0).length/100)
        if (pos.filter(bin => bin == 0).length/1000 > .5 ) {
            gammaBinArr.push(0)
            epsilonBinArr.push(1)
        } else {
            gammaBinArr.push(1)
            epsilonBinArr.push(0)
        }
    })
    
    const gammaBin = gammaBinArr.join("")
    const epsilonBin = epsilonBinArr.join("")

    function binToDec(binary) {
        return parseInt(binary, 2)
    }
    
    return binToDec(gammaBin) * binToDec(epsilonBin);
}