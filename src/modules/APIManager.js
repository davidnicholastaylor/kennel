const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (id, link) {
            return fetch(`${remoteURL}/${link}/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function (link) {
            return fetch(`${remoteURL}/${link}`).then(e => e.json())
        }
    },
    removeAndList: {
        value: function (id, link) {
            return fetch(`${remoteURL}/${link}/${id}`, {
                method: "DELETE"
            })
                .then(e => e.json())
                .then(() => fetch(`http://localhost:5002/${link}`))
                .then(e => e.json())
        }
    },
    post: {
        value: function (newAnimal, link) {
            return fetch(`${remoteURL}/${link}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newAnimal)
            }).then(e => e.json())
        }
    },
    put: {
        value: function (editAnimal, id, link) {
            return fetch(`${remoteURL}/${link}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editAnimal)
            }).then(e => e.json())
        }
    }
})