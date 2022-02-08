import { Link } from "react-router-dom";


export default function BotaoHome(){
    return(
        <div className="botaoCenter">
        <Link to="/" style={{textDecoration: 'none'}} className="botaoHome" href="index.html">Home</Link>
    </div>

    );
}