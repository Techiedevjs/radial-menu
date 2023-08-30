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
const dropboxes = document.querySelectorAll('.line');
dropboxes.forEach((dropbox, index) => {
    dropbox.addEventListener('dragover', (e) => {
        e.preventDefault();
    })
    dropbox.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropbox.firstElementChild.classList.remove('dropenter')
        dropbox.firstElementChild.src = `images/${index+1}.svg`
    })
    dropbox.addEventListener('drop', (e) => {
        e.preventDefault();
        const copyData = e.dataTransfer.getData("text/plain");
        if (copyData === "copy") {
            const copy = document.querySelector('.dragged').cloneNode(true); // Clone the source element
            if(dropbox.childElementCount < 2 ){
                dropbox.appendChild(copy)
                dropbox.firstElementChild.classList.remove('dropenter')
                dropbox.firstElementChild.src = `images/${index+1}.svg`
            }
        }
    })
    dropbox.addEventListener('dragenter', (e) => {
        e.preventDefault();
        if(dropbox.childElementCount < 2 ){  
            dropbox.firstElementChild.classList.add('dropenter')
            dropbox.firstElementChild.src = `images/${index+1}state.svg`
        }
    })
})
const dragEmote = (event,id) => {
    event.dataTransfer.setData("text", "copy")
    document.querySelector(`#emote${id}`).classList.add('dragged')
}
const dragEmoteEnd = (id) => {
    document.querySelector(`#emote${id}`).classList.remove('dragged')
}


const toggleMenu = (state, options) => {
    var body = document.body;
    var origen = body.querySelector('.origen');
    var ladoDiv = origen.querySelector('.lado>div');
    // var newOptions = JSON.parse(options);
    if (state == true) {
    //   setItems(options);
    //   wheel.classList.add('active');
  
      origen.style.transform = 'translate(-50%, -50%) scale(var(--scale))';
      origen.style.opacity = '1';
      // ladoDiv.style.transform = 'scale(1)';
  
      console.log("?")
    } else {
      // Events.Call("ExecuteFunctionality", optionSelected)
    //   wheel.classList.remove('active');
  
      origen.style.transform = '';
      origen.style.opacity = '';
      ladoDiv.style.transform = '';
    }
  }
  toggleMenu(true)
