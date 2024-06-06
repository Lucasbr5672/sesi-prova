import{ Input, Button,Div1,Img,Img1} from './form'

const Form = () =>{
    return(
        <form>
            
            <Div1>
                <br />
                 <Img src="../icon.jpg"  height="60px"/>
                <br />
                <br />
            <p>Digite seu email...</p>
            <Input type="text"
            placeholder='Email'
            />
            
            <br />
            <br />
            <p>Digite sua senha...</p>
            <Input type="text"
            placeholder='Senha'
            />
             <br />
             <br />
            <Button>
                <h1>ENTRAR</h1>
            </Button>
           
            <br />
            </Div1>
        </form>
)
}
export default Form;