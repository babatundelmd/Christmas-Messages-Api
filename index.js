const express = require('express');
const app = express();

app.get('/api/ChristmasMessages', (req, res) => {
    res.send([
        {
            id: "1",
            message: "Christmas is about spending time with family and friends. It’s about creating happy memories that will last a lifetime. Merry Christmas to you and your family!"
        },
        {
            id: "2",
            message: "May the closeness of friends, the comfort of home, and the unity of our nation, renew your spirits this festive season. Merry Christmas to your family."
        },
        {
            id: "3",
            message: "‘Tis the season to wish one another joy and love and peace. These are my wishes for you, Merry Christmas our dear friends, may you feel the love this special day. May the closeness of friends, the comfort of home, and the unity of our nation, renew your spirits this festive season. Merry Christmas to your family."
        },
        {
            id: "4",
            message: "May this festive season sparkle and shine, may all of your wishes and dreams come true, and may you feel this happiness all year round. Merry Christmas!"
        },
        {
            id: "5",
            message: "You make the stars shine brighter and the winter days warmer just by being in my life. Merry Christmas to my favorite person in the world."
        },
        {
            id: "6",
            message: "A lovely thing about Christmas is that it’s compulsory, like a thunderstorm and we all go through it together. Let’s buckle up and enjoy the ride."
        },
        {
            id: "7",
            message: "Celebrate the Wonder and the Joy of the Festive Season. Merry Christmas"
        },
        {
            id: "8",
            message: "To a joyful present and a well-remembered past. Best wishes for Happy Holidays and a magnificent New Year."
        },
        {
            id: "9",
            message: "May this Christmas end the present year on a cheerful note and make way for a fresh and bright New Year. Here’s wishing you a Merry Christmas and a Happy New Year!"
        },
        {
            id: "10",
            message: "This festive season is so much more than Christmas parties and gift giving. May your Christmas be filled with the true miracles and meaning of this beautiful time."

        },
        {
            id: "11",
            message: "May you feel all the love and joy I have for you throughout this festive season and all year round. Having you as my friend brings me great joy."
        },
        {
            id: "12",
            message: "Best friends are to a friendship like Christmas is to the other celebrations: always on top. Have a merry one."
        },
        {
            id: "13",
            message: "Christmas is a special time to enjoy with all your loved ones, spreading divinity and cheer around, Merry Christmas and a happy new year!"
        },
        {
            id: "14",
            message: "Christmas is really a time for families to unite. It is a time to share all the laughter and cheers. Without you, this family will not be called a family. You complete our lives. Merry Christmas . . . !!!"
        },
        {
            id: "15",
            message: "For your Christmas time, I wish you many blessings, much happiness, and even more love I am grateful for you and your thoughtfulness."
        },
        {
            id: "16",
            message: "May your heart and home be filled with all of the joys the festive season brings. Merry Christmas and a wonderful New Year!"
        },
        {
            id: "17",
            message: "During this festive season of giving, let us take time to slow down and enjoy the simple things. May this wonderful time of the year touch your heart in a special way. Wishing you much happiness not just today, but throughout the New Year."
        },
        {
            id: "18",
            message: "May the joy and peace of Christmas be with you all through the Year. Wishing you a season of blessings from heaven above. Happy Christmas!!"
        },
        {
            id: "19",
            message: "May your world be filled with warmth and good cheer this Holy season, and throughout the year."
        },
        {
            id: "20",
            message: "Wish you a Merry Christmas and may this festival bring abundant joy and happiness in your life!"
        },
        {
            id: "21",
            message: "Warmest greetings of this festive season and best wishes for Happiness in the New Year"
        },
        {
            id: "22",
            message: "Warmest thoughts and best wishes for a wonderful Christmas and a Happy New Year. May peace, love and prosperity follow you always"
        },
        {
            id: "23",
            message: "The true heart of Christmas is one of wonder and warmth. May any festive stress you feel fade away and be replaced with this. Merry Christmas!"
        },
        {
            id: "24",
            message: "Jesus is the reason for season. Merry Christmas from our family to yours."
        },
        {
            id: "25",
            message: "Christmas is the time to touch every heart with love and care. Christmas is the time to receive and send blessings. It is the time to breathe the magic in the air. Wishing you a very Merry Christmas."
        },
        {
            id: "26",
            message: "I’m wishing you all the blessings of a wonderful Christmas time and I hope you feel all the job this holiday season has to offer."
        },
        {
            id: "27",
            message: "Beneath the hustle and bustle of the festive season, there is the true beauty of connecting with loved ones. May this beauty and joy lift you up during Christmas and the New Year!"
        },
        {
            id: "28",
            message: "May all the sweet magic of Christmas conspire to gladden your heart and fill every desire. Merry Christmas!"
        },
        {
            id: "29",
            message: "Fill your heart with the warmth that is the closeness of your family, friends and loved ones this holiday season and forever."
        },
        {
            id: "30",
            message: "Let the spirit of love gently fill our hearts and homes. In this loveliest of celebrations may you find many reasons for happiness."
        }


    ]);
});


app.listen(3000, () => console.log("listening on port 3000"))