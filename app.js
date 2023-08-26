// SWITCH CATEGORY
let categories = [ 
    {
        name: "all",
        tab: document.querySelector('.all')
    },
    {
        name: "dance",
        tab: document.querySelector('.dance')
    },
    {
        name: "action",
        tab: document.querySelector('.actions')
    }
]
// PUSH EMOTES
let emotesData = [
    {
        id: 3,
        imageUrl: "images/Vector.svg",
        type: "dance"
    },
    {
        id: 4,
        imageUrl: "images/T_emotes4.svg",
        type: "dance"
    },
    {
        id: 5,
        imageUrl: "images/T_emotes5.svg",
        type: "action"
    },
    {
        id: 6,
        imageUrl: "images/T_emotes6.svg",
        type: "action"
    },
    {
        id: 7,
        imageUrl: "images/T_emotes7.svg",
        type: "action"
    },
    {
        id: 8,
        imageUrl: "images/T_emotes8.svg",
        type: "action"
    },
    {
        id: 9,
        imageUrl: "images/T_emotes9.svg",
        type: "action"
    },
    {
        id: 10,
        imageUrl: "images/T_emotes10.svg",
        type: "action"
    },
    {
        id: 11,
        imageUrl: "images/T_emotes11.svg",
        type: "dance"
    },
    {
        id: 12,
        imageUrl: "images/T_emotes12.svg",
        type: "dance"
    },
    {
        id: 13,
        imageUrl: "images/T_emotes13.svg",
        type: "action"
    },
    {
        id: 14,
        imageUrl: "images/T_emotes14.svg",
        type: "dance"
    },
    {
        id: 15,
        imageUrl: "images/T_emotes15.svg",
        type: "action"
    },
    {
        id: 16,
        imageUrl: "images/T_emotes16.svg",
        type: "action"
    },{
        id: 17,
        imageUrl: "images/T_emotes17.svg",
        type: "action"
    },
]
const pressState = (id) => {
    document.querySelector(`#emote${id}`).classList.add('display');
    if(currentfilter !== 'all'){
        let data = emotesData.filter((emote) => emote.type === currentfilter);
        data.map((emote) => {
            if(emote.id !== id){
                document.querySelector(`#emote${emote.id}`).classList.remove('display');
            }
        })
    } else {
        emotesData.map((emote) => {
            if(emote.id !== id){
                document.querySelector(`#emote${emote.id}`).classList.remove('display');
            }
        })
    }
}
const pushEmotes = (data) => {
    document.querySelector('.emotes').innerHTML = "";
    data.map((item) => {
        const {id, imageUrl} = item;
        document.querySelector('.emotes').innerHTML += `
        <div class='emote emote-image' ondragend="dragEmoteEnd(${id})" ondragstart="dragEmote(${id})" id="emote${id}" draggable="true" onmousedown="pressState(${id})">
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
        if(name ==="all"){
            currentfilter = "all"
            pushEmotes(emotesData)
        } else {
            currentfilter = name
            let data = emotesData.filter((emote) => emote.type === name);
            pushEmotes(data)   
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
let emotes = document.querySelectorAll('.emote-image');
const dropboxes = document.querySelectorAll('.line');
dropboxes.forEach(dropbox => {
    dropbox.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropbox.appendChild(document.querySelector('.dragged'))
    })
})
// emotes.forEach(emote => {
//     emote.addEventListener('dragstart', () => {
//         emote.classList.add('dragged')
//         console.log(document.querySelector('.dragged'))
//     })
// })
const dragEmote = (id) => {
    document.querySelector(`#emote${id}`).classList.add('dragged')
}
const dragEmoteEnd = (id) => {
    document.querySelector(`#emote${id}`).classList.remove('dragged')
}
// emotes.forEach(emote => {
//     emote.addEventListener('dragend', () => {
//         emote.classList.remove('dragged')
//     })
// })
