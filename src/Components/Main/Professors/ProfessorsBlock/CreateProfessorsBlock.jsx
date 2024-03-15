import photo from '../../../../assets/img/professors.svg'
import {Divider} from "@mui/material";
import './professorsBlock.css'

export default function CreateProfessorsBlock({professor, subj}) {
    function subjectAndStatus() {
        if (typeof subj === 'string') {
            return (<p className={'professor__info__subject'}>{subj}</p>)
        } else {
            return (
                <>
                    <p className={'professor__info__subj'}>{Object.values(subj)[0]}</p>
                    <p className={'professor__info__role'}>{Object.keys(subj)[0]}</p>
                </>
            )
        }

    }

    return (
        <div className={'professor'}>
            <img src={photo} alt="Profeesor" className={'professor__photo'}/>
            <div className={'professor__info'}>
                <h3 className={'professor__info__name'}>{professor}</h3>
                <Divider/>
                {subjectAndStatus()}
            </div>
        </div>
    )
}