export function getCardData(){
    return CardData;
}



export function getCardDataById(id){

    return CardData.find(item => item.id === id);    
}

export const CardData=[
    {
        id: 1,
        title: "Devote: A New Media Genesis ",
        published: "2023-11-12",
        Author: "Jane Doe",
       
        excerpt: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam possimus illo quas doloribus. Beatae vel eligendi nesciunt illo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam possimus illo quas doloribus. Beatae vel eligendi nesciunt illo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        image:require('../../assets/img/computer.jpg')
    },

    {
        id: 2,
        title: " Article Title ",
        published: "2023-11-12",
        Author: "Jane Doe",
        excerpt: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam possimus illo quas doloribus. Beatae vel eligendi nesciunt illo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam possimus illo quas doloribus. Beatae vel eligendi nesciunt illo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. ",
        image:require('../../assets/img/computer.jpg')
    },
];