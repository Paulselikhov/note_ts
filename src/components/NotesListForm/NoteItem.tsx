import { FC, useMemo } from 'react';
import { INote } from '../types/types';

interface NoteItemProps {
    note: INote;
    setActiveNote: (note: INote) => void;
    activeNote: INote | null;
}
const NoteItem: FC<NoteItemProps> = ({ note, setActiveNote, activeNote }) => {
    const className = useMemo(() => {
        const activeClass =
            activeNote && activeNote.id === note.id ? 'active' : '';
        return `${note.status} ${activeClass}`;
    }, [activeNote, note]);

    return (
        <div className={className} onClick={() => setActiveNote(note)}>
            <div className='NoteItem_name'>{note.name}</div>
            <div className='NoteItem_description'>{note.description}</div>
        </div>
    );
};

export default NoteItem;
