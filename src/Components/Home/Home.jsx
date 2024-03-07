import React from "react";
import BlockCreator from "./BlockCreator/BlockCreator";
import './home.css'

export default function Home() {
    function blocksCreate(blocksItem = []) {
        const blocks = [];
        for(let i = 0; i < blocksItem.length; i++) {
            blocks.push(
                <BlockCreator par = {blocksItem[i]} name={blocksItem[i]}/>
            );
        }
        return blocks;
    }

    return(
        <main className={'main'}>
            {blocksCreate(['week'])}
            <div className='block__withButtons'>
                {blocksCreate(['journal'])}
                <div className='block__professorsAndSchedule'>
                    {blocksCreate(['professors', 'schedule'])}
                </div>
            </div>
        </main>
    )
}