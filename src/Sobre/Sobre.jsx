import HeaderS from "./Header/Hsobre";
import {H2, Img, Div} from "./Sobre"


const Sobre = ()=> {
    return(
<>
        <HeaderS/>
        <br/>
        <br />
        <Div>
        <H2><img src="../image-removebg-preview 8" alt="" />
            O nosso projeto seria uma plataforma de cronograma que tanto ficaria a disposição do sesi quanto 
no senai, fazendo com que tenha mais organização  no gerenciamento de informações destinadas 
aos alunos, afim de sempre deixá-los atentos aos comunicados e avisos no mês/ ou na semana atual,
como por exemplo: semana de prova, semana de recuperação, sexta-feira cultural, editais dos pólos 
de matemática, natureza, linguagens, astronimia/astronaltica, eventos de iniciação ciêntifica, 
amostra sesi, feriados e recessos entre outros. Onde quem poderar editar e publicar essas
informações será a própria direção de escola/instituição.</H2>
<Img src="../image-removebg-preview (1).png"  height="60px"/>
</Div>
       </>
       
    )
}
export default Sobre;