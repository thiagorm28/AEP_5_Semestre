const express = require('express')

routes = express.Router()

const views = __dirname + "/views/"

const aluno = {
    login: "1943934-2",
    senha: "a1b2c3d4",
    dados_pessoais: {
        nome: "Thiago Rodrigues Moraes",
        instituicao: "Col Gastão Vidigal",
        cgm: "1943934-2",
        curso: "Ensino Fundamental",
        serie: "9º Série",
        turno: "Manhã",
        turma: "9ºC"
    },
   boletim: [
       {
           nome: "Português",
           b1: {
               nota: 6.5,
               frequencia: "110/160h"
           },
           b2: {
            nota: 6.5,
            frequencia: "110/160h"
            },
            b3: {
                nota: 6.5,
                frequencia: "110/160h"
            },
            b4: {
                nota: 6.5,
                frequencia: "110/160h"
            }
       },
       {
           nome: "Matemática",
           b1: {
            nota: 7.8,
            frequencia: "140/160h"
            },
            b2: {
            nota: 7.8,
            frequencia: "140/160h"
            },
            b3: {
                nota: 7.8,
                frequencia: "140/160h"
            },
            b4: {
                nota: 7.8,
                frequencia: "140/160h"
            }
       },
       {
           nome: "Inglês",
           b1: {
            nota: 8.0,
            frequencia: "130/160h"
            },
            b2: {
            nota: 8.0,
            frequencia: "130/160h"
            },
            b3: {
                nota: 8.0,
                frequencia: "130/160h"
            },
            b4: {
                nota: 8.0,
                frequencia: "130/160h"
            }
       },
       {
           nome: "Geografia",
           b1: {
            nota: 9.2,
            frequencia: "160/160h"
            },
            b2: {
            nota: 8.0,
            frequencia: "160/160h"
            },
            b3: {
                nota: 8.0,
                frequencia: "160/160h"
            },
            b4: {
                nota: 8.0,
                frequencia: "160/160h"
            }
       },
       {
           nome: "História",
           b1: {
                nota: 5.2,
                frequencia: "110/160h"
            },
            b2: {
                nota: 5.2,
                frequencia: "110/160h"
            },
            b3: {
                nota: 5.2,
                frequencia: "110/160h"
            },
            b4: {
                nota: 5.2,
                frequencia: "110/160h"
            }
       },
       {
            nome: "Ciências",
            b1: {
                nota: 10.0,
                frequencia: "160/160h"
                },
                b2: {
                nota: 10.0,
                frequencia: "160/160h"
                },
                b3: {
                    nota: 10.0,
                    frequencia: "160/160h"
                },
                b4: {
                    nota: 10.0,
                    frequencia: "160/160h"
                }
       },
       {
           nome: "Educação Física",
           b1: {
            nota: 9.8,
            frequencia: "160/160h"
            },
            b2: {
            nota: 9.8,
            frequencia: "160/160h"
            },
            b3: {
                nota: 9.8,
                frequencia: "160/160h"
            },
            b4: {
                nota: 9.8,
                frequencia: "160/160h"
            }
       }
    ]
}

routes.get("/", (req, res) => res.render(views + "index"))
routes.get("/index.html", (req, res) => res.render(views + "index"))
routes.post("/index", (req, res) => {
    const tentativaLogin = req.body
    if (tentativaLogin.login == aluno.login && tentativaLogin.senha == aluno.senha) {
        res.redirect("/homepage.html")
    } else {
        res.redirect("/")
    }

})
routes.get("/homepage.html", (req, res) => res.render(views + "homepage", { aluno }))
routes.get("/recoverPassword.html", (req, res) => res.render(views + "recoverPassword"))
routes.post("/recoverPassword", (req, res) => {
    const celular = req.body
    console.log(celular)
    res.redirect("/")
})


module.exports = routes
