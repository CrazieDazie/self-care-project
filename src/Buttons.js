function Buttons({filteredTips}) {
    return(<div className="container">
        <button className="btnStyle" onClick={() => filteredTips("home")}>Selfcare at Home</button>
        <button className="btnStyle" onClick={() => filteredTips("physical")}>Physical Selfcare</button>
        <button className="btnStyle" onClick={() => filteredTips("mental")}>Mental Selfcare</button>
        <button className="btnStyle" onClick={() => filteredTips("social")}>Social Selfcare</button>
    </div>)
}

export default Buttons;