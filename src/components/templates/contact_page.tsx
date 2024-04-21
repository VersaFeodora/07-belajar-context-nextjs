import Heading from "../atoms/heading";
import Post from "../atoms/post";
import Section2 from "../atoms/sections2";
import AllPosts from "../organisms/allpost";

export default function AboutPage(){
    return (
        <Section2 isFancy={true}>
            <Heading>My Contacts</Heading>
            <Post 
                title="My Contacts:"
                body="2141720156@student.polinema.ac.id"
            />
        </Section2>
    )
}