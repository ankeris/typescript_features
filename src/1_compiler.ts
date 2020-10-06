const data = [
    {
        id: 15,
        name: "Welch and Sons LLC",
        address: "4290 Raynor Viaduct",
        phone: "(865) 134-0699 x15482",
        email: "Orion13@gmail.com",
    },
    {
        id: 16,
        name: "Jast LLC and Sons",
        address: "28523 Cyril Islands",
        phone: "(585) 676-0646",
        email: "Janiya34@hotmail.com",
    },
    {
        id: 17,
        name: "Collier LLC Inc",
        address: "11800 Yasmine Terrace",
        phone: "(069) 465-5747 x789",
        email: "Grayson72@yahoo.com",
    },
    {
        id: 18,
        name: "Mitchell Group and Sons",
        address: "636 Cruickshank Fork",
        phone: "464-628-4065",
        email: "Easton_Stamm@yahoo.com",
    },
];

export const getAllLocationNamesString = (arrOfObjs: any): string =>
    arrOfObjs.reduce((acc: string, currentObj: any) => `${acc} ${currentObj.name}`, "");

export const removeIds = (arrOfObjs: any): any =>
    arrOfObjs.reduce((acc: [], currentObj: any) => {
        const { id, ...rest } = currentObj;
        return [...acc, rest];
    }, []);

console.log(getAllLocationNamesString(data));
console.log(removeIds(data));
