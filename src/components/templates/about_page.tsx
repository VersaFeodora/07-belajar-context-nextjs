import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/sections2";
import AllPosts from "../organisms/allpost";

export default function AboutPage(){
    return (
        <Section2 isFancy={true}>
            <Heading>About</Heading>
            <Post 
                title="About"
                body="Test Next.js"
            />
        </Section2>
    )
}