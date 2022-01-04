const prenom = document.querySelector('#prenom');
const nom = document.querySelector('#nom')
const bio = document.querySelector('#bio')
const niveau = document.querySelector('#niveau')
const front = document.querySelector('#front')
const back = document.querySelector('#back')
const etudiant = document.querySelector('.etudiant')
const form = document.querySelector('#form')
const supprimer = document.querySelector('#supprimer')


vld.addEventListener('click', () => {


    const etud = JSON.stringify({
        prenom: document.getElementById('prenom').value,
        nom: document.getElementById('nom').value,
        bio: document.querySelector('#bio').value,
        niveau: document.getElementById('niveau').value,
        front: document.getElementById('front').value,
        back: document.getElementById('back').value
    })


    const envoie = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: etud,
        mode: "cors",
        Credential: "same-origin",

    };

    form.addEventListener("submit", () => {
        fetch('http://localhost:3000/schoolapp', envoie)
            .then((res) => console.log(res))
            

    })



})

URL = 'http://localhost:3000/schoolapp'


fetch(URL)
    .then(res => res.json())
    .then(list => {
        let listetudiant = '';
        for (let i = 0; i < list.length; i++) {

            listetudiant += `
            <div class="card testimonial-card" ><br>
             <div class="card-up indigo lighten-1" style="border:1px solid black">
                <div class="avatar mx-auto white">
                <img src="images/simplon.png"
                    class="rounded-circle" alt="apprenant simplon" width="80" height="80">
            </div>
            <div class="card-body">
                <h4 class="card-title">${list[i].prenom}  ${list[i].nom}</h4>
                <a class="btn btn-danger">${list[i].niveau}</a>
                <p><i class="fas fa-quote-left"></i>${list[i].bio}<i class="fas fa-quote-right"></i></p>
            </div>
            <div>
                <p>Compétence frontend => ${list[i].front} %</p>
                <p>Compétence backend => ${list[i].back} %</p>
            </div>
                <div class="btn" onclick="Editer(${list[i].id})";>
                <i class="fa fa-edit text-success"></i>  Editer</div>

                <div class="btn" onclick="suprim(${list[i].id});"  >
                <i class="fa fa-trash text-danger"></i> Supprimer</div>

               </div>
            `;
          
            
            
            etudiant.innerHTML = listetudiant;
            
        }
    });


   function suprim(id){
 
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    })
    .then(res => res.json())
    .then(() => location.reload());

}

   function Editer(id){
    
   

    if(id == 0){
     
        prenom.value("");
        nom.value("");
        bio.value("");
        niveau.value("");
        front.value("");
        back.value("")
    } else{
        fetch(`${URL}/${id}`).then(res => res.json())    
        .then(data => {           
            prenom.value=data.prenom;
            nom.value=data.nom;
            bio.value=data.bio;
            niveau.value=data.niveau;
            front.value=data.front;
            back.value=data.back;
        }); 
    }
    setInterval(suprim,8000,id) 
   

}
