
import "../styles/styles.css"

function Layout({children}) {
    const [showComponent, clearComponent, reverseComponent, incrementComponent] = children;
    return (
    <div className="container"> 
        <div className="show">{showComponent}</div>
        <div className="clear">{clearComponent}</div>
        <div className="reverse">{reverseComponent}</div>
        <div className="increment">{incrementComponent}</div>
        
        

    </div>
    )
}

export default Layout;