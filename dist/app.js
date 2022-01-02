/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (() => {

eval("const prenom = document.querySelector('#prenom');\nconst nom = document.querySelector('#nom')\nconst bio = document.querySelector('#bio')\nconst niveau = document.querySelector('#niveau')\nconst front = document.querySelector('#front')\nconst back = document.querySelector('#back')\nconst etudiant = document.querySelector('.etudiant')\nconst form = document.querySelector('#form')\nconst supprimer = document.querySelector('#supprimer')\n\n\nvld.addEventListener('click', () => {\n\n\n    const etud = JSON.stringify({\n        prenom: document.getElementById('prenom').value,\n        nom: document.getElementById('nom').value,\n        bio: document.querySelector('#bio').value,\n        niveau: document.getElementById('niveau').value,\n        front: document.getElementById('front').value,\n        back: document.getElementById('back').value\n    })\n\n\n    const envoie = {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: etud,\n        mode: \"cors\",\n        Credential: \"same-origin\",\n\n    };\n\n\n    form.addEventListener(\"submit\", () => {\n        fetch('http://localhost:3000/schoolapp', envoie)\n            .then((res) => console.log(res))\n            \n\n    })\n\n\n\n})\n\n\nURL = 'http://localhost:3000/schoolapp'\n\n\nfetch(URL)\n    .then(res => res.json())\n    .then(list => {\n        let listetudiant = '';\n        for (let i = 0; i < list.length; i++) {\n\n            listetudiant += `\n            <div class=\"card testimonial-card\" ><br>\n             <div class=\"card-up indigo lighten-1\" style=\"border:1px solid black\">\n                <div class=\"avatar mx-auto white\">\n                <img src=\"images/simplon.png\"\n                    class=\"rounded-circle\" alt=\"apprenant simplon\" width=\"80\" height=\"80\">\n            </div>\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">${list[i].prenom}  ${list[i].nom}</h4>\n                <a class=\"btn btn-danger\">${list[i].niveau}</a>\n                <p><i class=\"fas fa-quote-left\"></i>${list[i].bio}<i class=\"fas fa-quote-right\"></i></p>\n            </div>\n            <div>\n                <p>Compétence frontend => ${list[i].front} %</p>\n                <p>Compétence backend => ${list[i].back} %</p>\n            </div>\n                <div class=\"btn\" onclick=\"Editer(${list[i].id})\";>\n                <i class=\"fa fa-edit text-success\"></i>  Editer</div>\n\n                <div class=\"btn\" onclick=\"suprim(${list[i].id});\"  >\n                <i class=\"fa fa-trash text-danger\"></i>  Editer</div>\n\n               </div>\n            `;\n          \n            \n            \n            etudiant.innerHTML = listetudiant;\n            \n        }\n    });\n\n\n   function suprim(id){\n \n    fetch(`${URL}/${id}`, {\n        method: 'DELETE',\n    })\n    .then(res => res.json())\n    .then(() => location.reload());\n\n}\n\n   function Editer(id){\n\n    if(id == 0){\n     \n        prenom.value(\"\");\n        nom.value(\"\");\n        bio.value(\"\");\n        niveau.value(\"\");\n        front.value(\"\");\n        back.value(\"\")\n    } else{\n        fetch(`${URL}/${id}`).then(res => res.json())    \n        .then(data => {           \n            prenom.value=data.prenom;\n            nom.value=data.nom;\n            bio.value=data.bio;\n            niveau.value=data.niveau;\n            front.value=data.front;\n            back.value=data.back;\n        }); \n    } \n    \n\n}\n\n\n//# sourceURL=webpack://Text/./js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/app.js"]();
/******/ 	
/******/ })()
;