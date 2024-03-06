import './blockCreator.css'
import uniqid from "uniqid";
import {Link} from "react-router-dom";
export default function BlockCreator({name, par,}) {
    return(
        <Link to={`${name}`} className={`block__wrapper-${par}`} key={uniqid()}>
            <div className={`block-${par}`}>
                <div className={`block__inner-${par}`}>
                    <div className={`block__inner__inner-${par}`}><h1 className={`block__inner__inner__text-${par}`}>{name !== 'journal' && name}</h1></div>
                </div>
            </div>
        </Link>
    )
}
