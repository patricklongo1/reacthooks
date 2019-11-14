import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
    const [techs, setTechs] = useState([]);
    const [newTech, setNewTech] = useState('');

    const handlerAddTech = useCallback(() => {
        setTechs([...techs, newTech]);
        setNewTech('');
    }, [newTech, techs]);

    useEffect(() => {
        const storagedTechs = localStorage.getItem('techs');

        if (storagedTechs) {
            setTechs(JSON.parse(storagedTechs));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('techs', JSON.stringify(techs));
    }, [techs]);

    const techsSize = useMemo(() => techs.length, [techs]);

    return (
        <>
            <ul>
                {techs.map(t => (
                    <li key={t}>{t}</li>
                ))}
            </ul>
            <strong>Você tem {techsSize} tecnologias.</strong> <br />
            <input value={newTech} onChange={e => setNewTech(e.target.value)} />
            <button type="submit" onClick={handlerAddTech}>
                Add tech
            </button>
        </>
    );
}

export default App;
