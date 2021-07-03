import React from 'react';
import TaskCard from '../components/MemberCardGrid';
import TaskCardGrid from '../components/MemberCardGrid';
import MemberCardGrid from '../components/MemberCardGrid';

export default function HostView() {
    return (
        <div>
            <h1>Task: Implementing UI</h1>
            {/* <h2>Hosted Tasks:</h2> */}
            <section>
                <MemberCardGrid> this</MemberCardGrid>
            </section>
            {/* <h2>Invited Tasks</h2> */}
            <section>

            </section>
        </div>
    )
}
