// API'nin URL'i
const postsjson_url = "https://dummyjson.com/posts";
// İçerikleri tutan wrapper
const postsrwrapperEl = document.getElementById("posts-wrapper");
const headerEl = document.getElementById("header");
// Search parametresindeki veriyi eşitliyoruz.
const urlParams = new URLSearchParams(window.location.search);
// Parametrenin içerisindeki ID'yi user id değişkenine atıyoruz.
let userId = urlParams.get("id");


if (!userId || userId === "" || userId > 31 || userId < 1) {
  alert("Yanlış userId!");
  sendError();
  throw Error("Yanlis userId");
  const userId = prompt("Lütfen geçerli bir sayı giriniz. 1 ila 30 arasında!");
  const parsedUserId = parseInt(userId);
  if (parsedUserId < 31 && parsedUserId > 0) {
    window.location.href =
      window.location.origin + "/posts.html?id=" + parsedUserId;
  } else {
    window.location.reload();
  }
} else {
  getPosts(userId);
}


async function sendError() {
  try {
    postsrwrapperEl.innerHTML += `
     <div class="col">
      <div class="align-items-center mx-auto justify-content-center text-white text-center" id="content-error">  
        <div class="d-block align-items-center mx-auto justify-content-center text-white text-center mt-5 mb-2">  
        <i class="fa-solid fa-bomb mx-auto" id="icon-bomb"></i>
        </div>
        <div class="d-flex align-items-center mx-auto justify-content-center text-white text-center">
         <h5 class="mt-3">Bir hata olustu! <br> Böyle bir post bulunamadı. &nbsp; <br>
        </h5>
        </div>
      </div>
     </div>
     <section>
      <a href="/index.html" class="d-block mx-auto text-decoration-none" style="width: 192px; height: 192px;">
        <div id="warning-info">
          <h5 class=" text-white mt-2 text-center">Anasayfaya Dön</h5>
        </div></a
      >
    </section>
  `;
  headerEl.style.display = "none";
  } catch (error) {
    console.log(" bir hata oluştu:", error);
  }
}


async function getPosts(uId) {
  try {
    const post_res = await fetch(postsjson_url + "/user/" + uId);
    const data = await post_res.json();

    const posts = data.posts;
    for (const post of posts) {
      postsrwrapperEl.innerHTML += `
    <div class="col-md-6 col-lg-6 col-md-12 mb-5">
      <div class="card d-flex mx-auto" id="card-bg">
      <div class="card-body"> 
       <div class="card-content"> 
        <h5 class="card-title fw-bold mb-4">
        ${post.title}
        </h5>
        <p class="card-text">
        ${post.body}
        </p>
       </div> 
       <div class="row content-info mt-4">
       <span class="col-5 d-flex align-items-center">
         <a href="" class="fa-regular fa-heart" id="reaction-icon">&nbsp;&nbsp;${post.reactions}</a>
        </span>
        <div class="col-7 d-flex align-items-end justify-content-end">
        <button href="" class="d-flex align-items-center btn btn-sm btn-warning mb-">
        <i class="fa-solid fa-tag mt-1 icon-margin"></i>
        ${post.tags}
        </button>
       </div>
       </div>
      </div>    
    </div>
  </div>
  `;

    }
  } catch (error) {
    console.log("bir hata oluştu:", error);
  }
}
