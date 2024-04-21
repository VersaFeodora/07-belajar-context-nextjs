import Heading from "./heading";
import Section2 from "./sections2";
Heading

export default function Post({ title, body }: { title:string, body:string }){
    return (
        <Section2 isFancy={true}>
            <h4>Name: Versacitta Feodora Ramadhani</h4>
            <h4>NIM: 2141720156</h4>
            <br></br>
            <Heading>
                {title}
            </Heading>
            <p><i>{body}</i></p>
        </Section2>
    );
}