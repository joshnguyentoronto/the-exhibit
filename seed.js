
// require('dotenv').config();
// require('./config/database');
import dbconnect from './config/database.js'
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

// import UserModel from './models/User'
import ProjectModel from './models/Project.js'


async function populateDB() {

    // await UserModel.deleteMany({})
    // const hashedPassword = await bcrypt.hash('password', parseInt(process.env.SALT_ROUNDS))
    // const newUser = await UserModel.create([
    //     {
    //         name: 'Fake Nguyen',
    //         username: 'Josh',
    //         password: hashedPassword,
    //         email: 'josh@gmail.com',
    //         avatar: 'lala',
    //         bio: 'Hello, this is test account, feel free to do whatever you want',
    //         location: 'Toronto, Ontario',
    //         skill: ["HTML", "CSS", "JavaScript"],
    //         education: "Humber College",
    //         experiences: [
    //             { company: "Scotia Bank", title: "banker" },
    //             { company: "La La", title: "Ba Ba Ba" }
    //         ],
    //         userLink: [
    //             { name: "Github", url: "www.google.com" },
    //             { name: "linkedIn", url: "www.google.com" },
    //             { name: "Portfolio", url: "www.google.com" }
    //         ],
    //         savedPosts: ["postID", "postID"],
    //         likedPosts: ["postID", "postID"],
    //     },
    //     {
    //         name: 'Lu Ye',
    //         username: 'luye',
    //         email: 'Luye@gmail.com',
    //         password: hashedPassword,
    //         avatar: 'lala',
    //         bio: 'Hello, this is test account, feel free to do whatever you want',
    //         location: 'Toronto, Ontario',
    //         skill: ["HTML", "CSS", "JavaScript"],
    //         education: "UWO",
    //         experiences: [
    //             { company: "Scotia Bank", title: "banker" },
    //             { company: "La La", title: "Ba Ba Ba" }
    //         ],
    //         userLink: [
    //             { name: "Github", url: "www.google.com" },
    //             { name: "linkedIn", url: "www.google.com" },
    //             { name: "Portfolio", url: "www.google.com" }
    //         ],
    //         savedPosts: ["postID", "postID"],
    //         likedPosts: ["postID", "postID"],
    //     },
    //     {
    //         name: 'Janusshan Paramasivam',
    //         username: 'Janusshan',
    //         email: 'janusshan@gmail.com',
    //         password: hashedPassword,
    //         avatar: 'lala',
    //         bio: 'Hello, this is test account, feel free to do whatever you want',
    //         location: 'Toronto, Ontario',
    //         skill: ["HTML", "CSS", "JavaScript"],
    //         education: "UoT",
    //         experiences: [
    //             { company: "Scotia Bank", title: "banker" },
    //             { company: "La La", title: "Ba Ba Ba" }
    //         ],
    //         userLink: [
    //             { name: "Github", url: "www.google.com" },
    //             { name: "linkedIn", url: "www.google.com" },
    //             { name: "Portfolio", url: "www.google.com" }
    //         ],
    //         savedPosts: ["postID", "postID"],
    //         likedPosts: ["postID", "postID"],
    //     }
    // ])


    await dbconnect();
    await ProjectModel.deleteMany({})
    const newProjects = await ProjectModel.create([
        {
            author: ["6525a71e5aa9672f1c2990b2"],
            title: "Josh's Design",
            date: 2022/3/3,
            viewCount: 103,
            likeCount: 231,
            text: [
                { heading: "this is heading 1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
                { heading: "this is heading 2", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
                { heading: "this is heading 3", text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." },
                { heading: "this is heading 4", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
            ],
            projectLink: [
                { name: "Github", url: "www.google.com" },
                { name: "linkedIn", url: "www.google.com" },
                { name: "Portfolio", url: "www.google.com" }
            ],
            comment: [
                { user: "6525a71e5aa9672f1c2990b2", text: "this is text inside the comment", date: 2022/3/3, likeCount: 12 }
            ],
            flag: "UX/UI design",
            tag: [ "html", "css", "sass", "react", "angular", "figma" ]
        },
        {
            author: ["6525a71e5aa9672f1c2990b2"],
            title: "Josh's Data crash course",
            date: 2022/3/3,
            viewCount: 103,
            likeCount: 231,
            text: [
                { heading: "this is heading 1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
                { heading: "this is heading 2", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
                { heading: "this is heading 3", text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." },
                { heading: "this is heading 4", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
            ],
            projectLink: [
                { name: "Github", url: "www.google.com" },
                { name: "linkedIn", url: "www.google.com" },
                { name: "Portfolio", url: "www.google.com" }
            ],
            comment: [
                { user: "6525a71e5aa9672f1c2990b2", text: "this is text inside the comment", date: 2022/3/3, likeCount: 12 }
            ],
            flag: "Data Science",
            tag: [ "mongodb", "mysql", "sql", "postgresql" ]
        },
        {
            author: ["6525a71e5aa9672f1c2990b2"],
            title: "Josh Software engineer",
            date: 2022/4/4,
            viewCount: 133,
            likeCount: 231,
            text: [
                { heading: "this is heading 1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
                { heading: "this is heading 2", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
                { heading: "this is heading 3", text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." },
                { heading: "this is heading 4", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
            ],
            projectLink: [
                { name: "Github", url: "www.google.com" },
                { name: "linkedIn", url: "www.google.com" },
                { name: "Portfolio", url: "www.google.com" }
            ],
            comment: [
                { user: "6525a71e5aa9672f1c2990b2", text: "this is text inside the comment", date: 2022/3/3, likeCount: 12 }
            ],
            flag: "Software Engineer",
            tag: [ "nodejs", "python", "django", "express", "javascript" ]
        },
        {
            author: ["6525a71e5aa9672f1c2990b2"],
            title: "Josh's Marketing ideas",
            date: 2022/4/4,
            viewCount: 133,
            likeCount: 231,
            text: [
                { heading: "this is heading 1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
                { heading: "this is heading 2", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
                { heading: "this is heading 3", text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." },
                { heading: "this is heading 4", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
            ],
            projectLink: [
                { name: "Github", url: "www.google.com" },
                { name: "linkedIn", url: "www.google.com" },
                { name: "Portfolio", url: "www.google.com" }
            ],
            comment: [
                { user: "6525a71e5aa9672f1c2990b2", text: "this is text inside the comment", date: 2022/3/3, likeCount: 12 }
            ],
            flag: "Digital Marketing",
            tag: [ "hubspot", "wix", "clickup", "loomly", "sprout" ]
        },
        {
            author: ["622570fa345aa4b7c5420650"],
            title: "Lu's Design stuffs",
            date: 2022/3/3,
            viewCount: 103,
            likeCount: 231,
            text: [
                { heading: "this is heading 1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
                { heading: "this is heading 2", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
                { heading: "this is heading 3", text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." },
                { heading: "this is heading 4", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
            ],
            projectLink: [
                { name: "Github", url: "www.google.com" },
                { name: "linkedIn", url: "www.google.com" },
                { name: "Portfolio", url: "www.google.com" }
            ],
            comment: [
                { user: "6525a71e5aa9672f1c2990b2", text: "this is text inside the comment", date: 2022/3/3, likeCount: 12 }
            ],
            flag: "UX/UI design",
            tag: [ "html", "css", "sass", "react", "angular", "figma" ]
        },
        {
            author: ["622570fa345aa4b7c5420650"],
            title: "Lu's Data crash course",
            date: 2022/3/3,
            viewCount: 103,
            likeCount: 231,
            text: [
                { heading: "this is heading 1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
                { heading: "this is heading 2", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
                { heading: "this is heading 3", text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." },
                { heading: "this is heading 4", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
            ],
            projectLink: [
                { name: "Github", url: "www.google.com" },
                { name: "linkedIn", url: "www.google.com" },
                { name: "Portfolio", url: "www.google.com" }
            ],
            comment: [
                { user: "6525a71e5aa9672f1c2990b2", text: "this is text inside the comment", date: 2022/3/3, likeCount: 12 }
            ],
            flag: "Data Science",
            tag: [ "mongodb", "mysql", "sql", "postgresql" ]
        },
        {
            author: ["622570fa345aa4b7c5420650"],
            title: "Lu Software engineer",
            date: 2022/4/4,
            viewCount: 133,
            likeCount: 231,
            text: [
                { heading: "this is heading 1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
                { heading: "this is heading 2", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
                { heading: "this is heading 3", text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." },
                { heading: "this is heading 4", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
            ],
            projectLink: [
                { name: "Github", url: "www.google.com" },
                { name: "linkedIn", url: "www.google.com" },
                { name: "Portfolio", url: "www.google.com" }
            ],
            comment: [
                { user: "6525a71e5aa9672f1c2990b2", text: "this is text inside the comment", date: 2022/3/3, likeCount: 12 }
            ],
            flag: "Software Engineer",
            tag: [ "nodejs", "python", "django", "express", "javascript" ]
        },
        {
            author: ["622570fa345aa4b7c5420650"],
            title: "Lu's Digital",
            date: 2022/4/4,
            viewCount: 133,
            likeCount: 231,
            text: [
                { heading: "this is heading 1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
                { heading: "this is heading 2", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
                { heading: "this is heading 3", text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." },
                { heading: "this is heading 4", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
            ],
            projectLink: [
                { name: "Github", url: "www.google.com" },
                { name: "linkedIn", url: "www.google.com" },
                { name: "Portfolio", url: "www.google.com" }
            ],
            comment: [
                { user: "6525a71e5aa9672f1c2990b2", text: "this is text inside the comment", date: 2022/3/3, likeCount: 12 }
            ],
            flag: "Digital Marketing",
            tag: [ "hubspot", "wix", "clickup", "loomly", "sprout" ]
        },
        {
            author: ["622570fa345aa4b7c5420650"],
            title: "Janusshan's Design things",
            date: 2022/3/3,
            viewCount: 103,
            likeCount: 231,
            text: [
                { heading: "this is heading 1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
                { heading: "this is heading 2", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
                { heading: "this is heading 3", text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." },
                { heading: "this is heading 4", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
            ],
            projectLink: [
                { name: "Github", url: "www.google.com" },
                { name: "linkedIn", url: "www.google.com" },
                { name: "Portfolio", url: "www.google.com" }
            ],
            comment: [
                { user: "6525a71e5aa9672f1c2990b2", text: "this is text inside the comment", date: 2022/3/3, likeCount: 12 }
            ],
            flag: "UX/UI design",
            tag: [ "html", "css", "sass", "react", "angular", "figma" ]
        },
        {
            author: ["622570fa345aa4b7c5420650"],
            title: "Janusshan's Data crash course",
            date: 2022/3/3,
            viewCount: 103,
            likeCount: 231,
            text: [
                { heading: "this is heading 1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
                { heading: "this is heading 2", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
                { heading: "this is heading 3", text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." },
                { heading: "this is heading 4", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
            ],
            projectLink: [
                { name: "Github", url: "www.google.com" },
                { name: "linkedIn", url: "www.google.com" },
                { name: "Portfolio", url: "www.google.com" }
            ],
            comment: [
                { user: "6525a71e5aa9672f1c2990b2", text: "this is text inside the comment", date: 2022/3/3, likeCount: 12 }
            ],
            flag: "Data Science",
            tag: [ "mongodb", "mysql", "sql", "postgresql" ]
        },
        {
            author: ["622570fa345aa4b7c5420650"],
            title: "Janusshan Software engineer",
            date: 2022/4/4,
            viewCount: 133,
            likeCount: 231,
            text: [
                { heading: "this is heading 1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
                { heading: "this is heading 2", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
                { heading: "this is heading 3", text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." },
                { heading: "this is heading 4", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
            ],
            projectLink: [
                { name: "Github", url: "www.google.com" },
                { name: "linkedIn", url: "www.google.com" },
                { name: "Portfolio", url: "www.google.com" }
            ],
            comment: [
                { user: "6525a71e5aa9672f1c2990b2", text: "this is text inside the comment", date: 2022/3/3, likeCount: 12 }
            ],
            flag: "Software Engineer",
            tag: [ "nodejs", "python", "django", "express", "javascript" ]
        },
        {
            author: ["622570fa345aa4b7c5420650"],
            title: "Janusshan's Digital",
            date: 2022/4/4,
            viewCount: 133,
            likeCount: 231,
            text: [
                { heading: "this is heading 1", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
                { heading: "this is heading 2", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
                { heading: "this is heading 3", text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham." },
                { heading: "this is heading 4", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
            ],
            projectLink: [
                { name: "Github", url: "www.google.com" },
                { name: "linkedIn", url: "www.google.com" },
                { name: "Portfolio", url: "www.google.com" }
            ],
            comment: [
                { user: "6525a71e5aa9672f1c2990b2", text: "this is text inside the comment", date: 2022/3/3, likeCount: 12 }
            ],
            flag: "Digital Marketing",
            tag: [ "hubspot", "wix", "clickup", "loomly", "sprout" ]
        }
    ])

    
    process.exit();

};

populateDB()