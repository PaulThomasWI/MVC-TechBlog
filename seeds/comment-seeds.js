const { Comment } = require('../models');

const commentData = [
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Metus vulputate eu scelerisque felis imperdiet. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Diam ut venenatis tellus in metus vulputate."
    },
    {
        user_id: 3,
        post_id: 1,
        comment_text: "Viverra tellus in hac habitasse platea dictumst vestibulum."
    },
    {
        user_id: 1,
        post_id: 2,
        comment_text: "Dignissim enim sit amet venenatis."
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "Adipiscing elit ut aliquam purus sit."
    },
    {
        user_id: 1,
        post_id: 3,
        comment_text: "Tellus mauris a diam maecenas sed enim ut. Arcu risus quis varius quam."
    },
    {
        user_id: 2,
        post_id: 3,
        comment_text: "Interdum posuere lorem ipsum dolor sit amet consectetur. Sit amet venenatis urna cursus eget nunc scelerisque."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;