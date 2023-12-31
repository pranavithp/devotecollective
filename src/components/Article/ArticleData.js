export function getArticleData(){
    return ArticleData;
}



export function getArticleDataById(id){

    return ArticleData.find(item => item.id === id);    
}

export const ArticleData=[
    {
        id: 1,
        title: "Devote: A New Media Genesis ",
        published: "2023-11-12",
        readTime: "6min",
        Author: "Jane Doe",
       
        excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac facilisis justo, ut mattis diam. Ut a porta orci. Ut a blandit tortor. Nam elementum sapien elit, id condimentum ligula consequat nec. Vestibulum purus risus, imperdiet at rhoncus sit amet, feugiat eu velit. Cras venenatis eros sit amet enim tincidunt maximus. Sed non ligula at augue euismod efficitur. Etiam sollicitudin egestas quam eget vehicula. Sed quis vestibulum lectus. Sed orci nibh, aliquet ac rutrum a, maximus non erat. Praesent et mattis dui. Maecenas sed laoreet magna, non dictum nibh. In nec dignissim enim.
        
         Nunc ornare porta condimentum. Mauris ut dui malesuada, tristique massa sed, fringilla urna. Morbi semper mattis auctor. Ut sed neque mollis, porttitor orci et, egestas arcu. Nunc auctor sapien quis nulla ultrices, id ornare libero tempor. Phasellus non laoreet est. In arcu quam, venenatis vel libero non, ultrices aliquam lorem. Etiam porttitor lacus et mattis maximus. Sed eleifend est vel sapien ornare egestas. Sed vel tempus velit. Praesent condimentum lacinia ultricies. Praesent non libero auctor, lacinia ligula ac, ultricies turpis. Praesent vitae sem sed sem convallis ornare id faucibus libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed nunc nisl, iaculis non orci rutrum, commodo tincidunt turpis. Sed lobortis nunc quis nisi lacinia, id ullamcorper lacus laoreet.

        Integer hendrerit suscipit lacus in gravida. Cras dolor lorem, iaculis at neque et, fermentum tempor enim. Vivamus ultricies massa tempor sem porttitor, nec scelerisque urna dapibus. In hac habitasse platea dictumst. Vivamus suscipit at purus fermentum efficitur. Proin nec turpis non velit sagittis scelerisque. Proin eget bibendum tellus. Aenean dapibus neque scelerisque nisi finibus volutpat. Pellentesque mollis auctor nisl a aliquet. Suspendisse vel sem justo. Donec consequat arcu vel turpis feugiat, a efficitur risus mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur at vestibulum ligula, quis volutpat metus. Pellentesque pharetra pulvinar molestie. Suspendisse massa arcu, mattis eget lacus non, mattis fermentum ipsum. Donec ut imperdiet tellus, sit amet ultrices ipsum.
        
        Nunc eu sodales risus, in laoreet quam. Nulla vehicula, orci ut commodo mollis, eros nisi pulvinar leo, non tristique leo diam eget dui. Fusce eget tortor nec urna iaculis vehicula luctus non felis. Donec ac ligula in neque iaculis tristique. Ut eget scelerisque nulla. Pellentesque lobortis tellus a elit malesuada bibendum. Nunc enim odio, elementum quis interdum vitae, convallis eu massa. Nunc vulputate vitae magna id bibendum. In feugiat massa et rutrum fermentum. Vestibulum justo diam, maximus quis finibus nec, luctus ac est. Fusce eu mauris molestie elit tempor interdum et eget quam. Integer pellentesque arcu quis lobortis finibus. Phasellus ut ante sed quam laoreet luctus at vitae urna.
        
        Nunc vulputate fermentum sem, aliquet convallis dolor aliquam id. Vestibulum placerat ut dui a pretium. Duis pharetra efficitur ante, eu posuere quam condimentum et. Curabitur mattis tortor vitae odio accumsan dictum. Vestibulum mollis neque eget ligula aliquam, vel euismod orci facilisis. Ut ultrices porta tortor, et tincidunt elit. Donec a odio ac magna blandit cursus. Etiam et dolor non lacus vehicula lacinia. Mauris fringilla velit at tellus dapibus commodo. Sed porttitor tortor urna, non ultrices erat porta vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc imperdiet massa vel ligula tincidunt, ac ultricies ligula auctor. Vivamus erat velit, sollicitudin vitae vestibulum sed, posuere eget justo. Proin semper dolor eget erat gravida pellentesque `,
        image:require('../../assets/img/computer.jpg')
    },

    {
        id: 2,
        title: " Article Title ",
        published: "2023-11-12",
        readTime: "6min",
        Author: "Jane Doe",
        excerpt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac facilisis justo, ut mattis diam. Ut a porta orci. Ut a blandit tortor. Nam elementum sapien elit, id condimentum ligula consequat nec. Vestibulum purus risus, imperdiet at rhoncus sit amet, feugiat eu velit. Cras venenatis eros sit amet enim tincidunt maximus. Sed non ligula at augue euismod efficitur. Etiam sollicitudin egestas quam eget vehicula. Sed quis vestibulum lectus. Sed orci nibh, aliquet ac rutrum a, maximus non erat. Praesent et mattis dui. Maecenas sed laoreet magna, non dictum nibh. In nec dignissim enim.
        
        Nunc ornare porta condimentum. Mauris ut dui malesuada, tristique massa sed, fringilla urna. Morbi semper mattis auctor. Ut sed neque mollis, porttitor orci et, egestas arcu. Nunc auctor sapien quis nulla ultrices, id ornare libero tempor. Phasellus non laoreet est. In arcu quam, venenatis vel libero non, ultrices aliquam lorem. Etiam porttitor lacus et mattis maximus. Sed eleifend est vel sapien ornare egestas. Sed vel tempus velit. Praesent condimentum lacinia ultricies. Praesent non libero auctor, lacinia ligula ac, ultricies turpis. Praesent vitae sem sed sem convallis ornare id faucibus libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed nunc nisl, iaculis non orci rutrum, commodo tincidunt turpis. Sed lobortis nunc quis nisi lacinia, id ullamcorper lacus laoreet.

       Integer hendrerit suscipit lacus in gravida. Cras dolor lorem, iaculis at neque et, fermentum tempor enim. Vivamus ultricies massa tempor sem porttitor, nec scelerisque urna dapibus. In hac habitasse platea dictumst. Vivamus suscipit at purus fermentum efficitur. Proin nec turpis non velit sagittis scelerisque. Proin eget bibendum tellus. Aenean dapibus neque scelerisque nisi finibus volutpat. Pellentesque mollis auctor nisl a aliquet. Suspendisse vel sem justo. Donec consequat arcu vel turpis feugiat, a efficitur risus mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur at vestibulum ligula, quis volutpat metus. Pellentesque pharetra pulvinar molestie. Suspendisse massa arcu, mattis eget lacus non, mattis fermentum ipsum. Donec ut imperdiet tellus, sit amet ultrices ipsum.
       
       Nunc eu sodales risus, in laoreet quam. Nulla vehicula, orci ut commodo mollis, eros nisi pulvinar leo, non tristique leo diam eget dui. Fusce eget tortor nec urna iaculis vehicula luctus non felis. Donec ac ligula in neque iaculis tristique. Ut eget scelerisque nulla. Pellentesque lobortis tellus a elit malesuada bibendum. Nunc enim odio, elementum quis interdum vitae, convallis eu massa. Nunc vulputate vitae magna id bibendum. In feugiat massa et rutrum fermentum. Vestibulum justo diam, maximus quis finibus nec, luctus ac est. Fusce eu mauris molestie elit tempor interdum et eget quam. Integer pellentesque arcu quis lobortis finibus. Phasellus ut ante sed quam laoreet luctus at vitae urna.
       
       Nunc vulputate fermentum sem, aliquet convallis dolor aliquam id. Vestibulum placerat ut dui a pretium. Duis pharetra efficitur ante, eu posuere quam condimentum et. Curabitur mattis tortor vitae odio accumsan dictum. Vestibulum mollis neque eget ligula aliquam, vel euismod orci facilisis. Ut ultrices porta tortor, et tincidunt elit. Donec a odio ac magna blandit cursus. Etiam et dolor non lacus vehicula lacinia. Mauris fringilla velit at tellus dapibus commodo. Sed porttitor tortor urna, non ultrices erat porta vel. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc imperdiet massa vel ligula tincidunt, ac ultricies ligula auctor. Vivamus erat velit, sollicitudin vitae vestibulum sed, posuere eget justo. Proin semper dolor eget erat gravida pellentesque `,
        image:require('../../assets/img/computer.jpg')
    },
];