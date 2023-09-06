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
// Object.keys(selectedEmotes).forEach(function(key){
//     if(selectedEmotes[key]){
//         // console.log(selectedEmotes[key])
//         document.querySelector(`.${selectedEmotes[key]}`).setAttribute('draggable', false);
//     }
// })
const pressState = (id) => {
    document.querySelector(`.emote${id}`).classList.add('display');
    if(currentfilter !== 'all'){
        let data = emotesData.filter((emote) => emote.type === currentfilter);
        data.map((emote) => {
            if(emote.id !== id){
                document.querySelector(`.emote${emote.id}`).classList.remove('display');
            }
        })
    } else {
        emotesData.map((emote) => {
            if(emote.id !== id){
                document.querySelector(`.emote${emote.id}`).classList.remove('display');
            }
        })
    }
}
const pushEmotes = (data) => {
    document.querySelector('.emotes').innerHTML = "";
    data.map((item) => {
        const {id, imageUrl, type} = item;
        document.querySelector('.emotes').innerHTML += `
        <div class='emote emote-image emote${id} ${type === 'dance' ? 'dance' : 'action'}' ondragend="dragEmoteEnd(${id})" ondragstart="dragEmote(event,${id})" draggable="true" onmousedown="pressState(${id})">
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
        dropimage.classList.add('dropenter')
        dropimage.nextElementSibling.classList.add('dropstate')
        dropimage.src = `images/variant${index+1}state.svg`
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
    })
    dropimage.addEventListener('drop', (e) => {
        e.preventDefault()
    })
})
dropboxes.forEach((dropbox, index) => {
    dropbox.addEventListener('drop', (e) => {
        console.log(dropbox.childElementCount)
        e.preventDefault();
        const copyData = e.dataTransfer.getData("text/plain");
        if (copyData === "copy") {
            const emoteId = document.querySelector('.dragged').classList[2]
            document.querySelectorAll(`.${emoteId}`).forEach((elem) => {
                elem.setAttribute('draggable', false)
                elem.classList.add('selected')
            })
            const copy = document.querySelector('.dragged').cloneNode(true);
            console.log(copy)
            if(dropbox.childElementCount < 3 ){
                dropbox.lastElementChild.classList.remove('dropstate')
                dropbox.appendChild(copy)
                selectedEmotes[dropbox.id] = document.querySelector('.dragged').classList[2]
                dropbox.firstElementChild.classList.remove('dropenter')
                dropbox.firstElementChild.src = `images/variant${index+1}.svg`
                console.log(selectedEmotes)
            } else if(dropbox.childElementCount > 2){
                dropbox.removeChild(dropbox.lastElementChild);
                dropbox.lastElementChild.classList.remove('dropstate')
                dropbox.appendChild(copy)
                dropbox.firstElementChild.src = `images/variant${index+1}.svg`
                selectedEmotes[dropbox.id] = document.querySelector('.dragged').classList[2]
                dropbox.firstElementChild.classList.remove('dropenter')
                console.log(selectedEmotes)
            }
        }
    })
})
const dragEmote = (event,id) => {
    event.dataTransfer.setData("text", "copy")
    document.querySelector(`.emote${id}`).classList.add('dragged')
}
const dragEmoteEnd = (id) => {
    document.querySelector(`.emote${id}`).classList.remove('dragged')
}
// DISPLAY UI
const toggleDisplay = () =>{
    document.querySelector('.wrapper').classList.toggle('hidden')
}
document.addEventListener('keydown', evt => {
    if (evt.key === 'Home') {
        toggleDisplay();
    }
});
