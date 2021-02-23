import '../css/SearchBox.scss'
import BriefcaseIcon from "../assets/briefcase-icon.png";


const SearchBox = (props) => {

    return(
        <div className="box">
            <form className="search-input-rectangle" onChange={e => props.setInput(e.target.value)} onSubmit={e => props.submit(e)}>
                <img className="icon" src={BriefcaseIcon} alt="icon"/>
                <input placeholder="Title, companies, expertise or benefits" className="text-input" value={props.search}/>
                <button className="search-button"> Search </button>
            </form>
        </div>    
    );
}

export default SearchBox;