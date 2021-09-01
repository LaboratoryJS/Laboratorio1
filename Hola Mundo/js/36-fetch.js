'use strict'

//fetch y peticiones a servicios
var divusuarios = document.querySelector("#usuarios");
var divJanet = document.querySelector("#janet");

GetAllUser()
    .then(data =>data.json())
    .then(users=>{
        ListadoUsuarios(users.data);
        document.querySelector(".loading").style.display = "none";

        return GetUserById(6);
    })
    .then(data=>data.json())
    .then(janet=>{
        DetailUser(janet.data);
        document.querySelector("#janet .loading").style.display = "none";

        return GetInfo();
    })
    .then(data=>{
        console.log(data);
        throw "ERROR";
    })
    .catch(error=>{
        console.log(error);
    });

    function GetAllUser(){
        return fetch('https://reqres.in/api/users');
    }
    function GetUserById(id){
        return fetch(`https://reqres.in/api/users/${id}`);
    }
    function ListadoUsuarios(usuarios){
        usuarios.map((user,i)=>{
            let nombre = document.createElement("h3");
            nombre.innerHTML = `${i} - ${user.first_name} ${user.last_name}`;
            divusuarios.appendChild(nombre);
        });
    }

    function GetInfo(){
        var profesor = {
            nombre: "Ariel",
            apellido: "Villalona"
        };
        return new Promise((resolve,reject)=>{
            var profesor_string = JSON.stringify(profesor);

            if(typeof profesor_string != 'string') return reject('error');
            setTimeout(() => {
                return resolve(profesor_string);
            }, 3000);
        });
    }

    function DetailUser(usuario){
            let nombre = document.createElement("h3");
            let avatar = document.createElement("img");
            avatar.src=usuario.avatar;
            avatar.width=100;

            nombre.innerHTML = `${usuario.id} - ${usuario.first_name} ${usuario.last_name}`;
            divJanet.appendChild(nombre);
            divJanet.appendChild(avatar);
    }