// Define an interface named MajorCredits with unique brand property.
interface MajorCredits {
    credits: number;
    brand: "MajorBrand"; // Nominal typing
}

// Define an interface named MinorCredits with unique brand property.
interface MinorCredits {
    credits: number;
    brand: "MinorBrand"; // Nominal typing
}

// Sums the credits of the two subjects.
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const brand: "MajorBrand" = "MajorBrand"; // Assign the unique brand value
    const totalMajorCredits: MajorCredits = {
        credits: subject1.credits + subject2.credits,
        brand: brand,
    };
    return totalMajorCredits;
}

function sumMinorCredits(subject1: MinorCredits,subject2: MinorCredits) : MinorCredits {
    const brand: "MinorBrand" = "MinorBrand";
    const totalMinorCredits: MinorCredits ={
        credits: subject1.credits + subject2.credits,
        brand: brand,
    };
    return totalMinorCredits;
}

// Usage example: If you want to test the functions uncomment.
// let testMajorSub1: MajorCredits = { credits: 3, brand: "MajorBrand" };
// let testMajorSub2: MajorCredits = { credits: 4, brand: "MajorBrand" };
// console.log(sumMajorCredits(testMajorSub1, testMajorSub2));

// let testMinorSub1: MinorCredits = { credits: 8, brand: "MinorBrand" };
// let testMinorSub2: MinorCredits = { credits: 10, brand: "MinorBrand" };
// console.log(sumMinorCredits(testMinorSub1, testMinorSub2));
