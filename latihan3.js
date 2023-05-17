let house = {
    address: "1 Kinning Park",
    previosOwners : ["Claire M.", "John A."],
    currentOwner : {
        fisrtName: "Margaret",
        lastName: "Conway"
    },
};

console.log(house.currentOwner.fisrtName," ",house.currentOwner.lastName)
house.previosOwners[1]="Jokowi"
console.log("Presiden RI : ",house.previosOwners[1])