const addbutton = document.querySelector('#add');

const updateLSdata = () => {

    const textdata = document.querySelectorAll('textarea');
    const notes = [];
    textdata.forEach((note) => {
        return notes.push(note.value);
    })
    console.log(notes);
    localStorage.setItem('notes', JSON.stringify(notes));
}


const addnote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note');
    const htmldata = `    <div class="operation">
    <button class="edit"> <i class="fas fa-edit"></i> </button>
    <button class="delete"> <i class="fas fa-trash"></i> </button>
</div>
<div class="main ${text ?"" :"hidden"} "></div>
<textarea class="${text ?"hidden" :""}"></textarea>`;
    note.insertAdjacentHTML("afterbegin", htmldata);
    console.log(note);

    const editbutton = note.querySelector('.edit');
    const deletebutton = note.querySelector('.delete');
    const maindiv = note.querySelector('.main');
    const textarea = note.querySelector('textarea');

    deletebutton.addEventListener('click', () => {
        note.remove();
        updateLSdata();
    });

    textarea.value = text;
    maindiv.innerHTML = text;
    editbutton.addEventListener('click', () => {
        maindiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');

    });
    textarea.addEventListener('change', (event) => {
        const value = event.target.value;
        console.log(value);
        maindiv.innerHTML = value;
        updateLSdata();
    })
    document.body.appendChild(note);
}

const notes = JSON.parse(localStorage.getItem('notes'));
if (notes) { notes.forEach((note) => addnote(note)) }


addbutton.addEventListener('click', () => addnote());