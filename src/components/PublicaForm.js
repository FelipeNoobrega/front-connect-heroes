import {useState} from 'react'
import './Style.css'
export default function PublicaForm(){
    
    const [publicacao, setPublicacao] = useState({
        text:"",
        geo:"",
        image:""
    });
    const handleSignupForm = (event) => {
        event.preventDefault()
    };
    const handleOnChangePublicacao = (event, key) => {
        setPublicacao({...publicacao, [key]: event.target.value})
        console.log(publicacao)
    };
    const handleOnClickEnviar = () => {
        setPublicacao({ text: '' });
      };
    

    return(<div className="content"> 
            <form className="form" onSubmit={handleSignupForm} method='POST'>
                <textarea
                    name='publicacao'
                    className='textBox'  
                    required
                    value={publicacao.text}
                    onChange={(event)=> handleOnChangePublicacao(event, "text")}  
                />
                <button
                className='btnGeo'
                    type='button'
                    onChange={(event)=> handleOnChangePublicacao(event, "gro")}>
                        geo
                </button>
                <button
                className='btnImg'
                    type='button'
                    
                    onChange={(event)=> handleOnChangePublicacao(event, "image")}>
                        img
                </button>
                 <button className="btnPublicar" type='submit' onClick={handleOnClickEnviar}>Publicar</button>  

            </form>
    </div>
    )
}