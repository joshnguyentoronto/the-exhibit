import React from 'react'
import { notFound } from 'next/navigation'


import { authConfig, loginIsRequiredServer } from "../config/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Link from 'next/link'

import headStyle from './(style)/Header.module.css'
import projectStyle from './(style)/Project.module.css'
import PCLStyles from './(style)/ProjectCardList.module.css'
import PCStyles from './(style)/ProjectCard.module.css'
import searchStyle from './(style)/Search.module.css'

interface Author { _id: string; }
interface Author extends Array<Author>{}
interface Text { 
    heading: string;
    text: string;
    _id: string;
}
interface Text extends Array<Text>{}
interface ProjectLink {
    _id: string;
    name: string;
    url: string;
}
interface ProjectLink extends Array<ProjectLink>{}
interface LclearikeUser {
    [index: number]: string;
}
interface LikeUser extends Array<LikeUser>{}
interface Comment {
    _id: string;
    user: string;
    text: string;
    likeCount: number;
    likedUser: LikeUser;
}
interface Comment extends Array<Comment>{}
interface Tag {
    index : string;
}
interface Tag extends Array<Tag>{}
interface Images {
    index: string;
}
interface Images extends Array<Images>{}
interface Project {
    _id: string;
    author: Author;
    title: string;
    likeCount: number;
    viewCount: number;
    text: Text;
    projectLink: ProjectLink;
    comment: Comment;
    flag: string;
    tag: Tag;
    images: Images;
}

import dbconnect from '../config/database';
import Project from '../models/Project';


export default async function HomePage() {
    const session = await getServerSession(authConfig);
    if (!session) {
        return redirect('/login')
    }



    await dbconnect();
    const projectslist: Project[] = await Project.find().lean();


    return (
        <div>
            <div className={searchStyle.main}>
                <div className={searchStyle.h1}><h1>THE EXHIBIT</h1></div>
                <div className={searchStyle.h1}><h1>Hello {session?.user?.name}</h1></div>
                <div className={searchStyle.searchbox}>
                    <form autoComplete='off'>
                        <input name="currentTag" className={searchStyle.filtersearchbar} type="text" />
                        <button type='submit'>
                            <svg width="30" height="30" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1564 0.751591C13.9855 0.754228 8.18888 3.71077 4.56396 8.70403C0.938634 13.6978 -0.0775976 20.1247 1.83052 25.9922C3.73918 31.8605 8.34064 36.4609 14.2099 38.3674C20.0787 40.2734 26.5053 39.255 31.4981 35.6281L41.1002 45.2303C41.8644 45.9945 42.9788 46.293 44.0229 46.0135C45.0672 45.7334 45.8825 44.9181 46.1626 43.8738C46.4421 42.8296 46.1436 41.7152 45.3794 40.9511L35.7773 31.3489C38.5819 27.4942 39.8572 22.7367 39.3578 17.996C38.8578 13.2554 36.6185 8.86859 33.0718 5.68313C29.5256 2.49767 24.9236 0.740493 20.1571 0.751024L20.1564 0.751591ZM20.1564 33.2623C16.6472 33.2623 13.2819 31.8685 10.8005 29.3871C8.31917 26.9057 6.92531 23.5404 6.92531 20.0312C6.92531 16.522 8.31917 13.1567 10.8005 10.6753C13.2819 8.19396 16.6472 6.8001 20.1564 6.8001C23.6656 6.8001 27.0309 8.19396 29.5123 10.6753C31.9937 13.1567 33.3875 16.522 33.3875 20.0312C33.3833 23.5388 31.9884 26.9021 29.5076 29.3824C27.0273 31.8632 23.6642 33.2582 20.1564 33.2623Z" fill="#565656"/></svg>
                        </button>
                    </form>
                </div>
                <div className={searchStyle.filterflags}>
                    <div className={searchStyle.filterflagscontainer}>
                        <span><button className={searchStyle.flagbtn}>UX/UI Design</button></span>
                        <span><button className={searchStyle.flagbtn}>Software Developer</button></span>
                        <span><button className={searchStyle.flagbtn}>Data Science</button></span>
                        <span><button className={searchStyle.flagbtn}>Digital Marketing</button></span>
                        <select className={searchStyle.filterflagsfilter} name='sort'>
                            <option value="all">Filter</option>
                            <option value="alphabetical">Alphabetical A - Z</option>
                            <option value="alpha">Alphabetical Z - A</option>
                            <option value="recent">Most Recent</option>
                            <option value="view">Most Viewed</option>
                            <option value="like">Most Liked</option>
                            <option value="comment">Most Comments</option>
                        </select>
                    </div>
                </div>
            </div>
            <div  className={PCLStyles.list}>
                {projectslist?.map((project) => {
                    return <ProjectCard key={project._id} project={project}></ProjectCard>
                })}
            </div>
            <div className={projectStyle.main}>
                <div className={projectStyle.header}>
                    <div className={projectStyle.headermain}>
                        <div className={projectStyle.headermainimg}>{ session && <Link href="/profile" className={headStyle.headerProfile} ><img src={session?.user?.image}></img></Link>}</div>
                        <div className={projectStyle.headermaintitle}>
                            <h3>author name</h3>
                        </div>
                    </div>
                </div>
                <div className={projectStyle.body}>
                    <div className={projectStyle.right}></div>
                    <div className={projectStyle.middle}>
                        <h1>Project name</h1>
                        <img className={projectStyle.middleimg} src="/images/project_test.png" alt="project image" />
                    </div>
                    <div className={projectStyle.left}>
                        <div>{ session && <Link href="/profile" className={headStyle.headerProfile} ><img src={session?.user?.image}></img></Link>}</div>
                        <div>{ session && <Link href="/profile" className={headStyle.headerProfile} ><img src={session?.user?.image}></img></Link>}</div>
                        <div>{ session && <Link href="/profile" className={headStyle.headerProfile} ><img src={session?.user?.image}></img></Link>}</div>
                        <div>{ session && <Link href="/profile" className={headStyle.headerProfile} ><img src={session?.user?.image}></img></Link>}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// Components on the page:

// Card to display each project
function ProjectCard( { project } ) {
    const title = project.title;
    return (
        <div className={PCStyles.card}>
            <div className={PCStyles.head}>
                <p>{project.title}</p>
            </div>
            <div className={PCStyles.image}>
                picture
            </div>
            <div className={PCStyles.foot}>
                <div><p>view</p></div>
                <div><p>like</p></div>
                <div><p>save</p></div>
            </div>
        </div>
    )
}