const jsonplaceholder_url = "https://dummyjson.com";
const userwrapperEl = document.getElementById("users-wrapper");

async function getUsers() {
    try {
        const res = await fetch(jsonplaceholder_url + "/users");
        const data = await res.json();

        const users = data.users;
        

        for (const user of users) {
            userwrapperEl.innerHTML += `<div class="col-md-6 col-lg-4">
        <div class="py-5" id="cards-wrapper">
            <div class="card d-flex mx-auto" id="card-bg" style="width:19rem; height:30em;">
                <div class="card-body"> 
                    <div class="img-wrapper">
                        <img src="${user.image}" alt=""
                            class="img-character" />
                    </div>
                    <div class="d-block py-2">
                    <div class="border-bottom" id="user-id">
                    <h4 class="fs-5p">${user.firstName}</h4>
                    <h5 class="fs-6p mb-3">@${user.username}</h5>
                </div>
                <div id="card-info">
                <div class="d-flex mt-4 gap-2"><i class="fa-solid fa-location-dot px-4 mt-2 gap-2 icon-width"></i>
                    <p class="mt-1">${user.company.name}</p>
                </div>
                <div class="d-flex gap-2"><i class="fa-regular fa-building px-4 mt-2 gap-2 icon-width"></i></i>
                    <p" class="mt-1">${user.address.city}</p>
                </div>

                <div class="d-flex gap-2"><i class="fa-solid fa-venus-mars px-4 mt-2 text-white icon-width"></i>
                    <p class="mb-3">${user.gender}</p>
                </div>
                </div>
                
                </div>
                    <div class="">
                    <button href="#" class="btn-card1">Show Posts</button>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>`;
        }
    } catch (error) {
        console.log("bir hata oluştu:", error);
    }
}
getUsers();
