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
    // {
    //     id: 1,
    //     imageUrl: `<svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <g id="T_Emotes-1">
    //     <path id="Vector" d="M22.3136 22.0347C21.9046 21.1259 21.2685 20.5352 20.5869 19.8082C19.2238 18.3088 19.1783 15.7643 20.496 14.2194C21.0413 13.5832 21.8138 13.0834 22.5408 12.629C23.495 12.0383 24.4037 11.4931 25.3579 10.9024C25.6305 10.3117 25.7669 9.53925 25.8577 8.85768C25.9032 8.44874 25.9486 8.0398 25.9486 7.63086C25.9032 6.17684 24.9035 4.26845 25.7214 3.04162C26.9028 1.31498 29.2656 0.542533 31.2194 1.26954C32.9915 1.90567 34.2638 3.63231 34.5364 5.49527C34.7636 7.35823 34.082 9.26662 32.7643 10.6752C33.9003 10.5389 35.1725 10.448 36.1721 11.0387C36.5357 11.2659 36.8992 11.584 37.1718 11.902C38.444 13.2197 39.5346 14.7192 40.0344 16.4913C41.1703 16.2186 41.761 15.3099 42.6243 14.492C44.2601 12.9017 46.5774 11.8111 48.8039 12.3564C48.9402 12.4018 49.122 12.4473 49.2128 12.5836C49.44 12.8562 49.2128 13.2652 48.9402 13.5378C47.4862 15.1281 45.4869 16.0823 43.7603 17.4C42.7152 18.2179 41.7156 19.263 41.1249 20.4444C38.2623 23.307 35.0362 25.8969 31.5829 28.0325C30.9922 28.396 30.447 28.7141 29.8108 28.9413C29.2656 28.8958 28.6294 28.805 28.3114 28.396C28.1751 28.2143 28.0842 27.9871 27.9479 27.8053C27.7207 27.5327 27.4026 27.3509 27.0846 27.1692C24.9944 26.0332 23.3132 24.2157 22.3136 22.0347Z" fill="white"/>
    //     <path id="Vector_2" d="M52.3936 52.2051C52.2572 52.9321 51.9392 53.6137 51.5757 54.2498C50.3943 56.4309 49.2583 58.6119 48.077 60.7929C47.3499 62.1106 46.6229 63.5646 46.6684 65.0641C46.7138 66.3363 47.2591 67.5177 48.0315 68.4719C48.804 69.4716 49.7582 70.2894 50.7124 71.1073C51.0759 71.4254 50.8941 71.8798 50.5306 72.1978C50.1671 72.5159 49.7127 72.6522 49.2583 72.7431C48.9403 72.834 48.6222 72.8794 48.3041 72.8794C48.0315 72.8794 47.7589 72.7885 47.4863 72.6522C45.6233 71.9706 43.8967 70.8801 42.3972 69.5624C42.3972 67.654 42.6244 65.9728 43.1242 64.1099C43.5332 62.5195 43.8967 60.9747 44.3056 59.3843C44.76 57.6122 44.1693 55.9765 44.6691 54.2498C44.8963 53.3411 45.3961 52.5686 45.8959 51.7962C46.6684 50.5239 44.8963 49.2971 44.0784 48.0703C42.5335 45.8438 41.1249 43.481 39.8981 41.0728C39.3529 40.9819 38.7622 41.0728 38.1715 41.1183C38.7167 42.3905 38.3532 43.8445 37.9897 45.1622C37.1264 48.252 36.2176 51.3872 34.7636 54.2498C35.1271 54.5679 35.0817 55.204 35.0817 55.7038C35.0363 57.2942 33.8549 58.7028 32.4009 59.3843C32.4917 60.2022 31.5375 60.702 30.9468 61.3382C29.5837 62.8831 29.3111 65.0641 29.3565 67.1088C29.3565 68.0175 29.402 68.9263 29.1293 69.7896C28.7658 70.8801 27.9025 71.7435 26.812 72.0615C25.9032 72.3341 24.8582 72.3342 23.904 72.2433C23.7676 72.2433 23.6313 72.1978 23.5405 72.107C23.4496 72.0161 23.4041 71.8798 23.4041 71.7889C23.3587 71.2891 23.4041 70.7893 23.6313 70.3349C23.8131 69.9259 24.1311 69.6079 24.3583 69.2444C24.7218 68.7445 25.0399 68.1539 25.2217 67.5632C25.4034 66.9725 25.7215 66.6544 25.8124 66.0183C25.9032 65.2913 25.5397 64.746 25.6306 64.019C25.7215 63.292 25.9941 62.565 26.6302 62.2015C26.7211 60.5657 26.812 58.9754 27.2209 57.3851C27.5844 56.1128 28.0843 55.4767 28.9021 54.5225C29.2656 54.1135 29.402 53.5683 29.5837 53.023C29.7655 52.3869 29.9472 51.7507 29.9472 51.0692C29.9472 49.6152 29.1293 48.1611 29.402 46.7526C30.0835 43.163 29.72 39.3007 30.9923 35.8474C31.8102 33.6664 30.4016 31.6217 29.9926 29.3498C30.6742 29.1226 31.3103 28.7591 31.8556 28.3956C35.0817 26.3509 38.126 23.9881 40.8978 21.3073C40.8069 21.7617 40.7614 22.1706 40.8069 22.6704C40.8523 23.1248 40.9886 23.6246 41.0795 24.079C41.5793 25.942 42.0791 27.7595 42.579 29.6224C42.8062 30.4858 43.2605 31.3037 43.8967 31.9398C44.5328 32.5759 45.2598 33.0303 45.9414 33.621C48.3041 35.7566 49.3038 38.9827 50.1671 42.027C50.8487 44.3898 51.0759 46.8434 51.9392 49.1608C52.2118 50.1604 52.5753 51.2055 52.3936 52.2051Z" fill="white"/>
    //     </g>
    //     </svg>`
    // },
    // {
    //     id: 2,
    //     imageUrl:  `<svg width="72" height="73" viewBox="0 0 72 73" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <g id="T_emotes2" opacity="0.5">
    //     <path id="Vector" d="M54.9158 24.6656C54.3727 23.8508 53.7208 23.3076 53.1776 22.4928C52.3085 21.2435 51.3308 20.1028 50.1358 19.1794C49.9728 19.0164 49.5926 19.0707 49.4296 18.9078C49.484 17.8757 49.484 16.8437 49.2667 15.8116C49.0494 14.7796 48.5062 13.8019 47.6371 13.2587C46.8767 12.7698 45.899 12.6069 45.0299 12.3353C43.5089 11.7921 42.2596 10.6514 41.1189 9.56501C40.8473 9.29342 40.5214 9.02186 40.4671 8.64163C40.3585 8.31571 40.4671 7.98978 40.5214 7.66387C40.793 6.30591 40.956 4.94794 40.7387 3.58998C40.4671 2.23202 39.7066 0.928398 38.4573 0.385214C37.3709 -0.103652 36.2303 0.113608 35.0353 0.167927C33.1341 0.222245 31.3959 1.74316 31.07 3.58998C30.7984 5.05658 31.2873 6.74047 30.7441 8.15275C29.6577 7.82684 28.5171 7.71821 27.3764 7.82685C26.8875 7.88117 26.453 7.93547 26.0184 8.15275C25.3123 8.53298 24.8234 9.29343 24.2259 9.7823C23.2482 10.5428 21.9445 10.76 20.6952 10.76C19.4459 10.76 18.1965 10.7057 17.0015 10.9773C16.0781 12.0637 15.6436 13.5303 15.9152 14.8882C16.0781 15.703 16.404 16.4092 16.567 17.2239C16.7843 18.4733 16.5127 19.7769 16.7299 21.0805C16.7843 21.5694 16.9472 22.0583 17.3275 22.3842C17.8163 22.8187 18.5768 22.8187 19.2286 22.7644C20.5866 22.6015 21.9445 22.2755 23.1938 21.7867C23.3568 21.7323 23.5198 21.678 23.5741 21.5151C23.6827 21.4064 23.6827 21.2435 23.6827 21.0805C23.6827 20.2658 23.4111 19.3967 22.9222 18.7448C22.2704 17.8757 21.2384 17.2239 21.0754 16.1919C21.0754 16.0832 21.0754 15.9746 21.1297 15.866C21.2384 15.7573 21.4013 15.703 21.5643 15.703C23.1395 15.6487 24.7147 15.5944 26.2357 15.54C25.8011 17.5498 26.8332 19.5596 26.6702 21.5694C26.5616 22.9817 26.6702 24.4483 26.9961 25.8062C27.1591 26.621 27.4307 27.3815 27.4307 28.1963C27.4307 28.9567 27.2677 29.7172 27.0504 30.4776C26.8875 31.1838 27.3764 31.8899 26.8875 32.4331C25.9641 33.5738 24.4432 34.0627 23.3025 35.0404C21.8359 36.2897 21.4556 38.0279 21.184 39.929C20.0434 41.1784 18.957 42.482 18.7397 44.1659C16.8929 46.5559 15.7522 50.7927 18.957 52.6396C20.315 53.4 21.9988 53.5087 23.5741 53.6173C25.1493 53.7259 26.7246 53.8889 28.2998 54.1605C28.8973 54.2691 29.6034 54.4321 29.875 54.9753C30.1466 55.6271 29.712 56.3332 29.2232 56.8221C27.8652 58.1257 26.0184 58.7776 24.4432 59.8639C24.2259 60.0269 24.0086 60.2441 23.9543 60.4614C23.9543 61.0046 24.6604 61.1132 25.1493 61.1132C28.68 60.8417 32.2107 60.3528 35.7414 59.6466C35.7414 59.4294 35.85 59.1035 35.7957 58.9405C35.6328 58.0171 35.4698 57.0937 35.1982 56.2246C35.0352 55.5728 34.818 54.9753 34.3834 54.4321C33.46 53.2914 31.7218 53.1284 30.6898 52.0964C29.9293 51.3903 29.6034 50.3582 29.0059 49.4891C28.0825 48.2398 26.5073 47.5336 24.9863 47.6423C27.2677 46.2843 29.3861 44.2202 30.5811 41.8845C31.5045 41.7759 32.3737 41.287 32.9169 40.5809C34.0032 42.8079 33.9489 45.0893 34.5464 47.425C34.7094 48.1854 35.1982 48.9459 35.9044 49.3261C36.013 49.3805 36.1759 49.4348 36.2846 49.5434C36.4475 49.815 36.5019 50.1952 36.4476 50.5211C36.2303 52.2593 36.9364 54.1061 38.3487 55.1925C38.7833 55.5184 39.2721 55.79 39.6523 56.2246C40.0326 56.6591 40.1955 57.2023 40.3585 57.7455C40.7387 58.7775 41.0646 59.8096 41.2819 60.896C41.6078 62.6885 41.4992 64.5353 41.4992 66.3278C41.4448 67.9574 41.4992 69.5869 41.7708 71.1622C41.7708 71.3251 41.8251 71.5424 41.9337 71.7053C42.0967 71.9769 42.4226 72.0312 42.7485 72.0312C43.8349 72.1399 44.9212 72.0312 45.9533 71.7597C46.1162 71.7053 46.2792 71.651 46.3878 71.5424C46.4965 71.4338 46.4965 71.2708 46.4965 71.1078C46.4422 70.1301 45.7903 69.3696 45.3015 68.5005C44.704 67.3599 44.7039 66.1106 45.0842 64.8612C45.3558 63.9921 45.1928 63.0144 44.7039 62.1996C44.5953 62.0367 44.4867 61.928 44.378 61.7651C44.1064 61.2219 44.378 60.3528 44.1064 59.8096C43.8349 59.2664 43.8349 58.6146 43.8349 58.0171C43.8349 55.6814 43.6176 53.2371 43.4546 50.9014C43.4003 50.0323 43.0744 49.2175 42.5855 48.5114C42.151 47.9139 41.2819 47.4793 41.3362 46.7732C41.4992 45.5782 41.1189 44.2745 40.5214 43.2425C41.4992 40.7981 41.6078 38.1365 41.1189 35.5293C41.0103 35.0404 41.3362 34.5515 41.7164 34.2799C42.0423 34.0083 42.6399 33.791 42.8571 33.4651C43.183 32.9763 43.7805 32.759 44.3237 32.6504C47.2026 31.8899 50.4074 31.4554 53.1233 30.2604C53.6665 29.9888 54.2097 29.7172 54.6985 29.3369C55.0788 29.0654 55.4047 28.7394 55.622 28.3049C55.7306 28.0333 55.7849 27.7617 55.7849 27.4358C55.8392 26.4037 55.459 25.4803 54.9158 24.6656ZM48.6692 25.9692C46.8224 27.4901 44.9212 28.9567 42.9658 30.2604C42.3683 30.6406 41.4449 31.2381 40.793 30.5863C40.0326 29.8258 40.9017 28.9024 41.3362 28.2506C42.6399 26.2408 43.8892 24.231 45.1385 22.2212C45.6817 22.6558 45.8989 23.4162 46.3335 24.0137C46.931 24.8828 47.9087 25.4803 48.8865 25.5347C48.9951 25.6433 48.8322 25.8606 48.6692 25.9692Z" fill="white"/>
    //     </g>
    //     </svg>`
    // },
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
    emotesData.map((emote) => {
        if(emote.id !== id){
            document.querySelector(`#emote${emote.id}`).classList.remove('display');
        }
    })
}
const removeState = (id) => {
    document.querySelector(`#emote${id}`).classList.remove('display');
}
const pushEmotes = (data) => {
    document.querySelector('.emotes').innerHTML = "";
    data.map((item) => {
        const {id, imageUrl} = item;
        document.querySelector('.emotes').innerHTML += `
        <div class='emote' id="emote${id}" onmousedown="pressState(${id})">
            <img src=${imageUrl} />
            <span class="pressState"></span>
        </div>
        `
    })
}
pushEmotes(emotesData)
categories.map((category) => {
    const {name, tab} = category
    tab.addEventListener('click', () => {
        if(name ==="all"){
            pushEmotes(emotesData)
        } else {
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
