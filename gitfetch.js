const inputValue = document.querySelector("#search");
const searchButton = document.querySelector(".searchButton");
const nameContainer = document.querySelector(".main__profile-name");
const unContainer = document.querySelector(".main__profile-username");
const reposContainer = document.querySelector(".main__profile-repos");
const urlContainer = document.querySelector(".main__profile-url"); 

const client_id = ' Iv1.16d83e1748356dba';
const client_secret = '18dd8e847b52b345e7871b3a70c6c32cee4e7bc5';

const fetchUsers = async (user) => {
    const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}&client_secret=${client_secret}`);

    const data = await api_call.json();
    return{ data };
};

const showData = () => {
    fetchUsers(inputValue.value).then((res) => {
        console.log(res);

        nameContainer.innerHTML = ` Name : <span class = "main__profile-value">${res.data.name}</span>`;
        unContainer.innerHTML = ` Username : <span class = "main__profile-value">${res.data.login}</span>`;
        reposContainer.innerHTML = ` Repos: <span class = "main__profile-value">${res.data.public_repos}</span>`;
        urlContainer.innerHTML = ` URL : <span class = "main__profile-value">${res.data.html_url}</span>`;
    })
};
 searchButton.addEventListener("click", () =>{
     showData();
 });