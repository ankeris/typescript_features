interface Row<T = any> {
    id: string;
    type: string;
    data: T
}

type AdditionalDetails = {
    text: string;
    image: string;
    priority: number;
}

const additionalDetails: Row<AdditionalDetails> = {
    id: "5u4j3n98f0",
    type: 'inline',
    data: {
        text: 'im a aditionaldetail row',
    }
}

const Rows: Row[] = [
    additionalDetails
]