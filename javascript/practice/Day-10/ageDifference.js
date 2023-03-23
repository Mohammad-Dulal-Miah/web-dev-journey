function ageDifference(ages) {
	
    const sortAge = ages.sort((a,b) => b-a);
    const diff = sortAge[0] - sortAge[1];

    return (diff === 0)? "No age difference between spouses.": (diff === 1)? `${diff} year` : `${diff} years`;
}

const res = ageDifference([43, 84, 49, 86]);
console.log(res);