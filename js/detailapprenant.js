URL = 'http://localhost:3000/schoolapp'
fetch(URL)
    .then(res => res.json())
    .then(list => {
        let listetudiant = '';
        for (let i = 0; i < list.length; i++) {

            listetudiant += `
<section class="team-section text-center my-5">


<!--Grid row-->
<div class="row text-center" style="border:2px dashed black">

<!--Grid column-->
<div class="col-md-4 mb-md-0 mb-5">

<div class="testimonial">
<!--Avatar-->
<div class="avatar mx-auto">
<img src="images/avatar.png" class="rounded-circle z-depth-1 img-fluid" width="80" height='80'>
</div>
<!--Content-->
<h4 class="font-weight-bold dark-grey-text mt-4">${list[i].prenom}  ${list[i].nom}</h4>
<h6 class="font-weight-bold text-danger my-3">${list[i].niveau}</h6>
<p class="font-weight-normal dark-grey-text">
<mdb-icon fas icon="quote-left" class="pr-2"></mdb-icon><i class="fas fa-quote-left"></i>${list[i].bio}.<i class="fas fa-quote-right"></i><br>
</p>
</div>
<iframe src="details.html"></iframe>

</div></div>
    `;
            etudiant.innerHTML = listetudiant;
        }
    });