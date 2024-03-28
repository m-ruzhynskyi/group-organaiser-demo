import './createList.css'
export default function CreateList({student, changeData, id, check}){
    return(
        <>
            <div className={'student'} id={id}>
                <p>{id+1}. {student}</p>
                <input checked={!check} onChange={() => changeData(id)} type="checkbox"/>
            </div>
        </>
    )
}