import React from 'react';
import TaskCard from '../components/TaskCard';


export default function Dashboard() {
    return (
        <div>
            <h1>Project: A</h1>
            <h2>Hosted Tasks:</h2>
            <section>
                <TaskCard host="Weak af guy who can't finish this task alone" description="I don't know what I am doing but if anyone can help me right now, imma pay him $10000000000."/>
            </section>
            <h2>Invited Tasks</h2>
            <section>

            </section>
        </div>
    )
}
