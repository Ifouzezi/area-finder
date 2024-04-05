document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchError = document.querySelector('.hero__searchError');
    const cancelInput = document.querySelector('.hero__cancelInput');

    // Initially hide cancel button
    cancelInput.style.display = 'none';

    searchInput.addEventListener('input', function() {
        if (searchInput.value.trim() === '') {
            searchInput.parentElement.classList.add('error-visible');
            searchInput.classList.add('error');
            searchError.style.display = 'block';
            cancelInput.style.display = 'none';
        } else {
            searchInput.parentElement.classList.remove('error-visible');
            searchInput.classList.remove('error');
            searchError.style.display = 'none';
            cancelInput.style.display = 'block';
        }
    });

    cancelInput.addEventListener('click', function() {
        searchInput.value = '';
        cancelInput.style.display = 'none';
        searchInput.parentElement.classList.remove('error-visible');
        searchInput.classList.remove('error');
        searchError.style.display = 'none';
    });
});

// JavaScript function to generate the card HTML structure
function createCard(user, time, city, text, likes, dislikes, comments, networkImage) {
    return `
    <div class="hero__overlayCard">
        <div class="hero__overlayHeading">
            <div class="hero__overlayUser">
                <img 
                    src="images/Ellipse 1.png" 
                    alt="User" 
                    class="hero__overlayPic"
                    width="25px"
                    height="25px"
                >
                <div class="hero__overlayUserDetails">
                    <p class="hero__overlayUserName">
                        ${user}
                    </p>
                    <p class="hero__overlayTime">
                        ${time}
                    </p>
                </div>
            </div>

            <div class="hero__overlayBox3">
                <div class="hero__overlayCity">
                    ${city}
                </div>
                <div class="hero__overlayRating">
                    <img 
                        src="images/Rating.svg" 
                        alt="star" 
                        class="hero__overlayStar"
                    >
                </div>
            </div>
        </div>

        <div class="hero__overlayText">
            ${text}
        </div>

        <div class="hero__overlayBox4 overlayFlex flex-jc-sb flex-ai-c">
            <div class="hero__overlayEngagement overlayFlex">
                <div class="hero__overlayLike overlayFlex ">
                    <img 
                        src="images/Thumbs up.svg" 
                        alt="like" 
                        class="hero__overlayLikeIcon"
                        width="14px"
                        height="14px"
                    >
                    <span class="engageCount">
                        ${likes}
                    </span>
                </div>
                <div class="hero__overlayDislike overlayFlex">
                    <img 
                        src="images/thumbs-down.svg" 
                        alt="dislike" 
                        class="hero__overlayDislikeIcon"
                        width="14px"
                        height="14px"
                    >
                    <span class="engageCount">
                        ${dislikes}
                    </span>
                </div>
                <div class="overlayIcons overlayFlex">
                    <img 
                        src="images/message.svg" 
                        alt="comment" 
                        class="hero__overlayCommentIcon"
                        width="14px"
                        height="14px"
                    >
                    <span class="engageCount">
                        ${comments}
                    </span>
                </div>
            </div>
            <img 
                src="${networkImage}" 
                alt="" 
                class="hero__overlayNetwork"
                width="36px"
                height="10px"
            >
        </div>
    </div>`;
}

// Dummy data for multiple cards
const cardData = [
    {
        user: "James T.",
        time: "5 months ago",
        city: "Ikate, Lekki",
        text: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
        likes: 24,
        dislikes: 2,
        comments: 125,
        networkImage: "images/traffic.svg"
    },
   
    {
        user: "James T.",
        time: "5 months ago",
        city: "Ikate, Lekki",
        text: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
        likes: 24,
        dislikes: 2,
        comments: 125,
        networkImage: "images/traffic.svg"
    },
    
    {
        user: "James T.",
        time: "5 months ago",
        city: "Ikate, Lekki",
        text: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
        likes: 24,
        dislikes: 2,
        comments: 125,
        networkImage: "images/network.svg"
    },
    
    {
        user: "James T.",
        time: "5 months ago",
        city: "Ikate, Lekki",
        text: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
        likes: 24,
        dislikes: 2,
        comments: 125,
        networkImage: "images/traffic.svg"
    },
    
    {
        user: "James T.",
        time: "5 months ago",
        city: "Ikate, Lekki",
        text: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
        likes: 24,
        dislikes: 2,
        comments: 125,
        networkImage: "images/power.svg"
    },

    {
        user: "James T.",
        time: "5 months ago",
        city: "Ikate, Lekki",
        text: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
        likes: 24,
        dislikes: 2,
        comments: 125,
        networkImage: "images/water.svg"
    },

    {
        user: "James T.",
        time: "5 months ago",
        city: "Ikate, Lekki",
        text: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
        likes: 24,
        dislikes: 2,
        comments: 125,
        networkImage: "images/security.svg"
    },

    {
        user: "James T.",
        time: "5 months ago",
        city: "Ikate, Lekki",
        text: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
        likes: 24,
        dislikes: 2,
        comments: 125,
        networkImage: "images/road.svg"
    },

    {
        user: "James T.",
        time: "5 months ago",
        city: "Ikate, Lekki",
        text: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
        likes: 24,
        dislikes: 2,
        comments: 125,
        networkImage: "images/water.svg"
    },

    {
        user: "James T.",
        time: "5 months ago",
        city: "Ikate, Lekki",
        text: "There is no stable electricity. The roads are fairly good and there is a sense of community. The drainage system is poor and most residents litter their surroundings. There are lots stores and Supermarkets.",
        likes: 24,
        dislikes: 2,
        comments: 125,
        networkImage: "images/water.svg"
    }

    
];

function renderCards() {
    const leftColumn = document.getElementById('leftColumn');
    const rightColumn = document.getElementById('rightColumn');
    
    cardData.forEach((data, index) => {
        const cardHtml = createCard(
            data.user, 
            data.time, 
            data.city, 
            data.text, 
            data.likes, 
            data.dislikes, 
            data.comments, 
            data.networkImage
        );
        if (index % 2 === 0) {
            leftColumn.innerHTML += cardHtml;
        } else {
            rightColumn.innerHTML += cardHtml;
        }
    });
}

renderCards();
