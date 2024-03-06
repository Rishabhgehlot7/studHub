import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import FooterComponent from '../components/Footer';

function NoteApp() {
    const [notes, setNotes] = useState([]);
    const [inputTitle, setInputTitle] = useState('');
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        console.log("Loading notes from localStorage");
        const storedNotes = JSON.parse(localStorage.getItem('notes'));
        console.log("Stored Notes:", storedNotes);
        if (storedNotes) {
            setNotes(storedNotes);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const handleTitleChange = (e) => {
        setInputTitle(e.target.value);
    };

    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputTitle.trim() !== '' && inputText.trim() !== '') {
            setNotes([...notes, { title: inputTitle, content: inputText }]);
            setInputTitle('');
            setInputText('');
        }
    };

    return (
        <div>
            <Header />
            <main className='m-5 p-4 text-3xl'>
                <h1 className=' px-4'>Notepad</h1>
                <form onSubmit={handleSubmit} className=' w-full p-4 border-2 border-gray-500 rounded-lg my-4'>
                    <input
                        type="text"
                        value={inputTitle}
                        onChange={handleTitleChange}
                        placeholder="Title"
                        className=' w-full rounded-lg bg-black shadow-xl'
                    />
                    <br />
                    <textarea
                        rows="4"
                        cols="50"
                        value={inputText}
                        onChange={handleChange}
                        placeholder="Write your note here..."
                    />
                    <br />
                    <button type="submit" className=' bg-[#936DB1] p-3 text-xl rounded-lg'>Add Note</button>
                </form>
                {/* <hr /> */}
                <h2 className=' my-4'>Notes:</h2>
                {notes.map((note, index) => (
                    <div key={index} className=' bg-[#936DB1] inline-block p-4 rounded-lg text-black m-2'>
                        <h3 className=' font-medium text-2xl'>{note.title}</h3>
                        <p className=' text-xl'>{note.content}</p>
                    </div>
                ))}
            </main>
            <FooterComponent/>
        </div>

    );
}

export default NoteApp;
