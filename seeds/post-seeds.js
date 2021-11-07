const { Post } = require('../models');

const postData = [
    {
        title: "Title 1",
        post_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec feugiat nisl pretium fusce id. Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Mauris a diam maecenas sed enim ut sem viverra aliquet. Volutpat est velit egestas dui id ornare. Felis imperdiet proin fermentum leo vel orci. Accumsan lacus vel facilisis volutpat est velit. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Vitae elementum curabitur vitae nunc. Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Et molestie ac feugiat sed. Lectus mauris ultrices eros in cursus turpis.",
        user_id: 1
    },
    {
        title: "Title 2",
        post_content: "Maecenas sed enim ut sem viverra aliquet eget. In hac habitasse platea dictumst quisque sagittis. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Tortor at auctor urna nunc id cursus. Porttitor leo a diam sollicitudin tempor id eu. Nibh mauris cursus mattis molestie a iaculis at erat. Lectus urna duis convallis convallis. Sed velit dignissim sodales ut eu sem integer vitae. Pulvinar mattis nunc sed blandit libero. Sodales ut eu sem integer.",
        user_id: 2
    },
    {
        title: "Title 3",
        post_content: "Mi bibendum neque egestas congue quisque egestas. Lobortis elementum nibh tellus molestie nunc non blandit massa enim. Mattis pellentesque id nibh tortor id aliquet lectus proin. Auctor eu augue ut lectus arcu bibendum.",
        user_id: 3

    },
    {
        title: "Title 4",
        post_content: "Vitae ultricies leo integer malesuada nunc vel. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Libero justo laoreet sit amet cursus sit amet. Tellus molestie nunc non blandit massa enim nec. Malesuada fames ac turpis egestas sed tempus urna et pharetra. Varius sit amet mattis vulputate. At elementum eu facilisis sed odio morbi. Nulla pellentesque dignissim enim sit amet venenatis urna. In tellus integer feugiat scelerisque varius. Id leo in vitae turpis massa sed elementum tempus.",
        user_id: 1
    },
    {
        title: "Title 5",
        post_content: "Nunc sed velit dignissim sodales ut eu. Arcu vitae elementum curabitur vitae nunc sed. Elementum curabitur vitae nunc sed velit dignissim sodales. Arcu dictum varius duis at consectetur lorem donec massa. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum.",
        user_id: 2
    },
    {
        title: "Title 5",
        post_content: "Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Nullam eget felis eget nunc lobortis mattis. Interdum velit laoreet id donec ultrices tincidunt. Nulla aliquet porttitor lacus luctus accumsan tortor. Nunc pulvinar sapien et ligula ullamcorper malesuada.",
        user_id: 3
    }    
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;