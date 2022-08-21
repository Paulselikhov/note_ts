import { FC } from 'react';
import NoteItem from './NoteItem';
import { INote } from '../types/types';

interface NotesListProps {
    notes: INote[];
    setActiveNote: (note: INote) => void;
    activeNote: INote | null;
}

const NotesList: FC<NotesListProps> = ({
    notes,
    setActiveNote,
    activeNote,
}) => {
    return (
        <div className='NotesList'>
            {notes.length ? (
                notes.map((item) => (
                    <NoteItem
                        note={item}
                        key={item.id}
                        setActiveNote={setActiveNote}
                        activeNote={activeNote}
                    />
                ))
            ) : (
                <div className='NotFound'>Заметок не найдено :c</div>
            )}
        </div>
    );
};

export default NotesList;
