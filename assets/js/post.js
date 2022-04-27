// To let admin to manage announcement and display it to residents

var posts=[
    {
        announcementId:1,
        resident:"Mr Thunder", //wll change to id later
        title:"My First Ever Post!",
        content:`My first Content
        with Line Break
        and 3rd line`,
        image:"",
        time: '24 Apr 2022, 6:23 am'
    },
    {
        announcementId:2,
        resident:"Donic", 
        title:"Giveaway SPM Reference Books",
        content:`PM Me!`,
        image:"assets/images/profile-image.png",
        time:'25 Apr 2022, 5:23 am'
    },
    {
        announcementId:3,
        resident:"Mr Suddenly", 
        title:"Who wants to play chess together?",
        content:"Feeling bored during lock down? Join our chess club and play chess together",
        image:"https://media.npr.org/assets/img/2016/10/24/gettyimages-492378344-2a5d8b2206e74c67d7b1b94c3576ace7cd32bb65-s1100-c50.jpg",
        time:'25 Apr 2022, 5:23 am'
    },
    {
        announcementId:4,
        resident:"Lei Zhi Guang", 
        title:"Finding Teammates For Basketball 3 on 3",
        content:"Anybody wants to join the basketball 3on3 held on kk8? Come kk12 tomorrow evening and let us form a team",
        image:"https://d1fdloi71mui9q.cloudfront.net/4HcZ1jCpQoyYRAwLxBDl_E74101X0vXSnBaCd",
        time:'25 Apr 2022, 9:23 am'
    },
        
    ]
    
        $(document).ready(function(){
            displayPosts()
        })
    
        function displayPosts(){
            $('#post_container').empty()
    

            
 
            for (post of posts.reverse()){
                    var card = `<div class="card mt-4 mycontainer">
                            <div class="card-body">
                                <h5><a href="${post.resident}" class="text-decoration-none">${post.resident}</a></h5>
                                <span class="text-muted">${post.time}</span>
                                <img src="${post.image}" alt="" class="w-100 mt-2">
                                <h5 class="mt-4">${post.title}</h5>
                                <p class="card-text" style="white-space: pre-line">${post.content}</p>
                            </div>
                            </div>`
                    $('#post_container').append(card)
                }
            posts.reverse()
        }
    
    
        function getImageElement(source){
            if(source!=""){
                return `<img src="${source}" alt="" class="w-100">`
            }else{
                return ""
            }
        }
    
    
        function submitPost(){
    
            let title = document.getElementById("post-title").value;
            let content = document.getElementById("post-content").value;
            
            if(title!=""){
    
                var post = {
                    title: title,
                    resident:"Lei Guang",
                    content: content,
                    image:"",
                    target:[],
                    time: new Date().toLocaleDateString('en-uk', { year:"numeric", month:"short", day:"numeric",hour:"numeric", minute:"numeric", hour12: true})
                }
                posts.push(post)
                showSweetToast('success','Submitted Post Successfully')
            }
            $('#post-title').val('')
            $('#post-content').val('')
            displayPosts()
        }
    
    
