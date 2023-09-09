// SWITCH CATEGORY
let categories = [ 
    {
        name: "all",
        tab: document.querySelector('.all')
    },
    {
        name: "dance",
        tab: document.querySelector('.dances')
    },
    {
        name: "action",
        tab: document.querySelector('.actions')
    }
]
// PUSH EMOTES
let emotesData = [
    {
        id: 1,
        imageUrl: "images/T_emotes1.svg",
        type: "dance",
        name: "breakdance"
    },
    {
        id: 2,
        imageUrl: "images/T_emotes2.svg",
        type: "action",
        name: "turn left back"
    },
    {
        id: 3,
        imageUrl: "images/T_emotes3.svg",
        type: "dance",
        name: "legwork"
    },
    {
        id: 4,
        imageUrl: "images/T_emotes4.svg",
        type: "dance",
        name: "hoosie slide"
    },
    {
        id: 5,
        imageUrl: "images/T_emotes5.svg",
        type: "action",
        name: "jump up"
    },
    {
        id: 6,
        imageUrl: "images/T_emotes6.svg",
        type: "action",
        name: "super long name"
    },
    {
        id: 7,
        imageUrl: "images/T_emotes7.svg",
        type: "action",
        name: "a bad action"
    },
    {
        id: 8,
        imageUrl: "images/T_emotes8.svg",
        type: "action",
        name: "boss moves"
    },
    {
        id: 9,
        imageUrl: "images/T_emotes9.svg",
        type: "action",
        name: "very very long name emote"
    },
    {
        id: 10,
        imageUrl: "images/T_emotes10.svg",
        type: "action",
        name: "very very long name emote"
    },
    {
        id: 11,
        imageUrl: "images/T_emotes11.svg",
        type: "dance",
        name: "moonwalk"
    },
    {
        id: 12,
        imageUrl: "images/T_emotes12.svg",
        type: "dance",
        name: "very very long name emote"
    },
    {
        id: 13,
        imageUrl: "images/T_emotes13.svg",
        type: "action",
        name: "very very long name emote"
    },
    {
        id: 14,
        imageUrl: "images/T_emotes14.svg",
        type: "dance",
        name: "very very long name emote"
    },
    {
        id: 15,
        imageUrl: "images/T_emotes15.svg",
        type: "action",
        name: "very very long name emote"
    },
    {
        id: 16,
        imageUrl: "images/T_emotes16.svg",
        type: "dance",
        name: "very very long name emote"
    },
    {
        id: 17,
        imageUrl: "images/T_emotes17.svg",
        type: "action",
        name: "very very long name emote"
    },
    {
        id: 18,
        imageUrl: "images/T_emotes18.svg",
        type: "dance",
        name: "very very long name emote"
    },
]
let selectedEmotes = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: ''
}

const pressState = (Id) => {
    document.querySelector(`.emote${Id}`).classList.add('display');
    document.querySelector('.playemote').classList.remove('hidden');
    let data = emotesData.filter(emote => emote.id === Id);
    const {imageUrl, name, type} = data[0];
    document.querySelector('#emotename').innerHTML = name;
    document.querySelector('#emotetype').innerHTML = type;
    document.querySelector('#emoteimg').src = imageUrl;
    if(currentfilter !== 'all'){
        let data = emotesData.filter((emote) => emote.type === currentfilter);
        data.map((emote) => {
            if(emote.id !== Id){
                document.querySelector(`.emote${emote.id}`).classList.remove('display');
            }
        })
    } else {
        emotesData.map((emote) => {
            if(emote.id !== Id){
                document.querySelector(`.emote${emote.id}`).classList.remove('display');
            }
        })
    }
}
const playEmote = () => {
    document.querySelector('.pause').classList.remove('hide');
    document.querySelector('.play').classList.add('hide');
}
const pauseEmote = () => {
    document.querySelector('.play').classList.remove('hide');
    document.querySelector('.pause').classList.add('hide');
}
const pushEmotes = (data) => {
    document.querySelector('.emotes').innerHTML = "";
    data.map((item) => {
        const {id, imageUrl, type} = item;
        document.querySelector('.emotes').innerHTML += `
        <div class='emote emote-image emote${id} ${type === 'dance' ? 'dance' : 'action'}' onmouseover="displayNameOnHover(${id})" ondragend="dragEmoteEnd(${id})" ondragstart="dragEmote(event,${id})" draggable="true" onmousedown="pressState(${id})">
            <img src=${imageUrl} alt="emote" draggable="false"/>
            <span class="pressState"></span>
        </div>
        `
    })
}
pushEmotes(emotesData)
let currentfilter = 'all';
categories.map((category) => {
    const {name, tab} = category
    tab.addEventListener('click', () => {
        if(name ==="dance"){
            document.querySelectorAll('.action').forEach((elem) => {
                elem.classList.add('hide')
            })
            document.querySelectorAll('.dance').forEach((elem) => {
                elem.classList.remove('hide')
            })
        } else if (name ==="action"){
            document.querySelectorAll('.dance').forEach((elem) => {
                elem.classList.add('hide')
            })
            document.querySelectorAll('.action').forEach((elem) => {
                elem.classList.remove('hide')
            })
        } 
        else {
            document.querySelectorAll('.dance').forEach((elem) => {
                elem.classList.remove('hide')
            })
            document.querySelectorAll('.action').forEach((elem) => {
                elem.classList.remove('hide')
            })
        }
        tab.classList.add('active');
        categories.map((cat) => {
            if(cat.tab !== tab){
                cat.tab.classList.remove('active');
            }
        })
    })
})
const displayNameOnHover = (emoteId) => {
    let emoteHovered = emotesData.filter(emote => emote.id === emoteId);
    document.querySelector('.emotename').innerHTML = emoteHovered[0].name
}
// RADIAL MENU
const dropboxes = document.querySelectorAll('.line');
const dropimages = document.querySelectorAll('.abs');
const variants = document.querySelectorAll('.variant');
variants.forEach((variant, index) => {
    variant.addEventListener('drop', (e) => {
        e.preventDefault()
    })
    variant.addEventListener('dragover', (e) => {
        e.preventDefault();
        variant.previousElementSibling.classList.add('dropenter')
        variant.classList.add('dropstate')
        variant.previousElementSibling.src = `images/variant${index+1}state.svg`
    })
    variant.addEventListener('dragenter', (e) => {
        e.preventDefault();
        variant.previousElementSibling.classList.add('dropenter')
        variant.classList.add('dropstate')
        variant.previousElementSibling.src = `images/variant${index+1}state.svg`
    })
    variant.addEventListener('dragleave', (e) => {
        e.preventDefault();
    })
})
dropimages.forEach((dropimage, index) => {
    dropimage.addEventListener('dragover', (e) => {
        e.preventDefault();
        let id  = document.querySelector('.dragged').classList[2]
        let emoteDragged = emotesData.filter(emote => emote.id == id.slice(5));
        document.querySelector('.radialemotename').innerHTML = emoteDragged[0].name
        dropimage.classList.add('dropenter')
        dropimage.nextElementSibling.classList.add('dropstate')
        dropimage.src = `images/variant${index+1}state.svg`;
    })
    dropimage.addEventListener('dragenter', (e) => {
        e.preventDefault();
        dropimage.classList.add('dropenter')
        dropimage.nextElementSibling.classList.add('dropstate')
        dropimage.src = `images/variant${index+1}state.svg`
    })
    dropimage.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropimage.classList.remove('dropenter')
        dropimage.nextElementSibling.classList.remove('dropstate')
        dropimage.src = `images/variant${index+1}.svg`
        document.querySelector('.radialemotename').innerHTML = ""
    })
    dropimage.addEventListener('drop', (e) => {
        e.preventDefault()
    })
})
const removeElement = (elem) => {
    document.querySelectorAll(`.${elem.classList[2]}`).forEach((elem) => {
        elem.setAttribute('draggable', true)
        elem.classList.toggle('selected')
    })
    elem.remove()
}
dropboxes.forEach((dropbox, index) => {
    dropbox.addEventListener('drop', (e) => {
        e.preventDefault();
        const copyData = e.dataTransfer.getData("text/plain");
        if (copyData === "copy") {
            const emoteId = document.querySelector('.dragged').classList[2]
            document.querySelectorAll(`.${emoteId}`).forEach((elem) => {
                elem.setAttribute('draggable', false)
                elem.classList.toggle('selected')
            })
            const copy = document.querySelector('.dragged').cloneNode(true);
            if(dropbox.childElementCount < 3 ){
                dropbox.lastElementChild.classList.remove('dropstate')
                dropbox.appendChild(copy)
                selectedEmotes[dropbox.id] = document.querySelector('.radialemotename').innerHTML
                dropbox.firstElementChild.classList.remove('dropenter')
                dropbox.firstElementChild.src = `images/variant${index+1}.svg`
                dropbox.lastElementChild.classList.add(`remove${emoteId}`);
                dropbox.lastElementChild.classList.add(`remove`);
                dropbox.lastElementChild.onmousedown = function(event){
                    if(event.button == 2){ 
                        removeElement(dropbox.lastElementChild);
                    }
                }
                console.log(selectedEmotes) 
            } else if(dropbox.childElementCount > 2){
                document.querySelectorAll(`.${dropbox.lastElementChild.classList[2]}`).forEach((elem) => {
                    elem.setAttribute('draggable', true)
                    elem.classList.toggle('selected')
                })
                dropbox.removeChild(dropbox.lastElementChild);
                dropbox.lastElementChild.classList.remove('dropstate')
                dropbox.appendChild(copy)
                dropbox.firstElementChild.src = `images/variant${index+1}.svg`
                selectedEmotes[dropbox.id] = document.querySelector('.radialemotename').innerHTML
                dropbox.firstElementChild.classList.remove('dropenter')
                dropbox.lastElementChild.classList.add(`remove${emoteId}`);
                dropbox.lastElementChild.classList.add(`remove`);
                console.log(dropbox.lastElementChild)
                dropbox.lastElementChild.onmousedown = function(event){
                    if(event.button == 2){ 
                        removeElement(dropbox.lastElementChild);
                    }
                }
                console.log(selectedEmotes)
            }
        }
    })
})
const dragEmote = (event,id) => {
    event.dataTransfer.setData("text", "copy")
    document.querySelector(`.emote${id}`).classList.add('dragged')
    document.querySelectorAll('.line .emote').forEach(elem => {
        elem.classList.add('minusindex')
    })
}
const dragEmoteEnd = (id) => {
    document.querySelector(`.emote${id}`).classList.remove('dragged')
    document.querySelectorAll('.line .emote').forEach(elem => {
        elem.classList.remove('minusindex')
    })
}
// DISPLAY UI
const toggleDisplay = () =>{
    document.querySelector('.wrapper').classList.toggle('hidden')
    setTimeout(() => {
        document.querySelector('.container').classList.toggle('hideelem')
    }, 200);
}
document.addEventListener('keydown', evt => {
    if (evt.key === 'Home') {
        toggleDisplay();
    }
});
