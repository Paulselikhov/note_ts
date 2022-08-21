import { FC, useState, useEffect, useCallback } from 'react';
import { INote } from './../types/types';

interface NoteEditFormProps {
    note: INote;
    updateNote: (noteFields: INote) => void;
}

const NoteEditForm: FC<NoteEditFormProps> = ({ note, updateNote }) => {
    const [noteFields, setNoteFields] = useState(note);

    useEffect(() => {
        setNoteFields(note);
    }, [note]);

    const updateNoteFields = useCallback((field: string, value: string) => {
        setNoteFields((prev) => {
            return {
                ...prev, // предыдущее значение
                [field]: value,
            };
        });
    }, []);

    const handleBlurField = useCallback(
        () => updateNote(noteFields),
        [noteFields, updateNote]
    );

    return (
        <div className='NoteEditForm'>
            <div className='NoteEditForm_found'>
                <div className='NoteEditForm_head'>
                    <input
                        value={noteFields.name}
                        onChange={(e) =>
                            updateNoteFields('name', e.target.value)
                        }
                        onBlur={handleBlurField}
                        className='NoteEditForm_inputName'
                        placeholder='Введите название заметки'
                    ></input>
                    <select
                        value={noteFields.status}
                        onChange={(e) =>
                            updateNoteFields('status', e.target.value)
                        }
                        onBlur={handleBlurField}
                        className='NoteEditForm_select'
                    >
                        <option value='pending'>Ожидает</option>
                        <option value='inProcess'>В процессе</option>
                        <option value='resolved'>Выполнена</option>
                    </select>
                </div>
                <textarea
                    value={noteFields.description}
                    onChange={(e) =>
                        updateNoteFields('description', e.target.value)
                    }
                    onBlur={handleBlurField}
                    className='NoteEditForm_inputDescription'
                    placeholder='Введите описание заметки'
                ></textarea>
            </div>
        </div>
    );
};

export default NoteEditForm;
