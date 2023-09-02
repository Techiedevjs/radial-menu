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
        id: 1,
        imageUrl: "images/T_emotes1.svg",
        type: "dance"
    },
    {
        id: 2,
        imageUrl: "images/T_emotes2.svg",
        type: "action"
    },
    {
        id: 3,
        imageUrl: "images/T_emotes3.svg",
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
        type: "dance"
    },
    {
        id: 17,
        imageUrl: "images/T_emotes17.svg",
        type: "action"
    },
    {
        id: 18,
        imageUrl: "images/T_emotes18.svg",
        type: "dance"
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
        <div class='emote emote-image' ondragend="dragEmoteEnd(${id})" ondragstart="dragEmote(event,${id})" id="emote${id}" draggable="true" onmousedown="pressState(${id})">
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
    // dropbox.addEventListener('dragover', (e) => {
    //     e.preventDefault();
    // })
    // dropbox.addEventListener('dragleave', (e) => {
    //     e.preventDefault();
    //     dropbox.firstElementChild.classList.remove('dropenter')
    //     dropbox.lastElementChild.classList.remove('dropstate')
    //     dropbox.firstElementChild.src = `images/variant${index+1}.svg`
    // })
    dropbox.addEventListener('drop', (e) => {
        e.preventDefault();
        const copyData = e.dataTransfer.getData("text/plain");
        if (copyData === "copy") {
            const copy = document.querySelector('.dragged').cloneNode(true);
            if(dropbox.childElementCount < 3 ){
                dropbox.lastElementChild.classList.remove('dropstate')
                dropbox.appendChild(copy)
                selectedEmotes[dropbox.id] = document.querySelector('.dragged').id
                dropbox.firstElementChild.classList.remove('dropenter')
                dropbox.firstElementChild.src = `images/variant${index+1}.svg`
                console.log(selectedEmotes)
            } else if(dropbox.childElementCount > 2){
                dropbox.lastElementChild.classList.remove('dropstate')
                dropbox.removeChild(dropbox.lastElementChild);
                dropbox.appendChild(copy)
                dropbox.firstElementChild.src = `images/variant${index+1}.svg`
                selectedEmotes[dropbox.id] = document.querySelector('.dragged').id
                dropbox.firstElementChild.classList.remove('dropenter')
                console.log(selectedEmotes)
            }
        }
    })
    // dropbox.addEventListener('dragenter', (e) => {
    //     e.preventDefault();
    //     if(dropbox.childElementCount < 3 ){  
    //         dropbox.firstElementChild.classList.add('dropenter')
    //         dropbox.lastElementChild.classList.add('dropstate')
    //         dropbox.firstElementChild.src = `images/variant${index+1}state.svg`
    //     }
    // })
})
const dragEmote = (event,id) => {
    event.dataTransfer.setData("text", "copy")
    document.querySelector(`#emote${id}`).classList.add('dragged')
}
const dragEmoteEnd = (id) => {
    document.querySelector(`#emote${id}`).classList.remove('dragged')
}
