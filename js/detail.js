new Chart(document.getElementById("horizontalBar"), {
    "type": "horizontalBar",
    "data": {
    "labels": ["Travail d'equipe", "Capacité d'integration", "Compétence FRONTEND", "COMPETENCE BACKEND", "Niveau Anglais", "Rédactionde rapport"],
    "datasets": [{
    "label": "Voici les details de l'apprenant",
    "data": [22, 33, 55, 12, 86, 23, 14],
    "fill": false,
    "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)",
    "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)",
    "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"
    ],
    "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)",
   ,  "rgb(153, 102, 255)", "rgb(201, 203, 207)"
    ],
    "borderWidth": 1
    }]
    },
    "options": {
    "scales": {
    "xAxes": [{
    "ticks": {
    "beginAtZero": true
    }
    }]
    }
    }
    });