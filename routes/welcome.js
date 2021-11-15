const express = require("express");
const router = express.Router();

router.get("/welcome", (req, res)=>{
    const welcome = [
        "Despertar cada día para vivir la vida es un regalo que debes apreciar. Da la bienvenida a cada uno de tus días.", 
        "En la vida hay momentos que por sí mismos son especiales, pero siempre es mejor si puedes compartirlo con las personas a las que quieres. Por eso te agradezco que hoy estés aquí. ¡Bienvenido!",
        "No esperes a que cese la tormenta, la vida es aprender a bailar bajo la lluvia. Da la bienvenida a la vida y despídete del miedo.",
        "Las novedades han de ser siempre bienvenidas.",
        "La vida es el mayor de los regalos. ¡Dale la bienvenida!",
        "La única forma universal de dar la bienvenida es una sonrisa.",
        "Da la bienvenida a cada día con la misma alegría que lo hace el gallo cuando canta.",
        "Puedes expresar tus buenos deseos con muchas palabras, pero una de las más importantes es ¡bienvenido!",
        "Da una calurosa bienvenida a cada uno de tus días y mantén abierta el alma.",
        "Da la bienvenida a los hechos y personas no deseadas, cuida de aquellas que te necesitan, aprende a apreciar a tus enemigos y obra siempre con la mejor intención."
    ];
    let num_Random = Math.floor(Math.random() * 10);
    res.send(welcome[num_Random]);
})

module.exports = router