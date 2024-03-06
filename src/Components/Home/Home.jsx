import React from "react";
import BlockCreator from "./BlockCreator/BlockCreator";
import './home.css'

export default function Home() {
    function blocksCreate() {
        const blocks = [];
        const blocksItems = ['journal', 'professors', 'schedules', 'week']
        for(let i = 0; i <= blocksItems.length; i++) {
            blocks.push(
                <BlockCreator par = {blocksItems[i]} name={blocksItems[i]}/>
            );
        }
        return blocks;
    }

    return(
        <main className={'main'}>
            {blocksCreate()}
        </main>
    )
}