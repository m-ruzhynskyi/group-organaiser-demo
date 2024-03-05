import './selectList.css'

function SelectList({name, classForSelect, groups, id}) {
    return(
        <select name={name} className={classForSelect + ' buttSimilar'} key={id}>
            <option value="unselect" selected>Click on me</option>
            {groups.map(group => {
                return(
                    <option value={group}>{group}</option>
                )
            })}
        </select>
    )
}

export default SelectList