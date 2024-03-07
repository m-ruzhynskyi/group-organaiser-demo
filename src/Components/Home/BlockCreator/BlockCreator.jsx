import './blockCreator.css'
import uniqid from "uniqid";
import {Link} from "react-router-dom";
import determineWeek from "../../functions/determineWeek";

export default function BlockCreator({name, par}) {
    function getTextToBlocks() {
        switch (name) {
            case 'journal':
                return ''
            case 'week':
                return (
                    <>
                        {window.outerWidth >= 1115 ? (
                            <>
                                Now we are <br/> studying <br/> for the <span
                                className={'block__inner__inner__text-week-span'}>{determineWeek()} </span> week
                            </>
                        ) : (
                            <>
                                <span className={'block__inner__inner__text-week-span'}>{determineWeek()}</span> week
                            </>
                        )}
                    </>
                );

            default:
                return name
        }
    }

    return (
        <Link to={`${name}`} className={`block__wrapper-${par}`} key={uniqid()}>
            <div className={`block-${par}`}>
                <div className={`block__inner-${par}`}>
                    <div className={`block__inner__inner-${par}`}><h1 className={`block__inner__inner__text-${par}`}>
                        {getTextToBlocks()}
                    </h1></div>
                </div>
            </div>
        </Link>
    )
}
