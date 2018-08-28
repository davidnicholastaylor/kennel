const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (id) {
            return fetch(`${remoteURL}/owners/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function () {
            return fetch(`${remoteURL}/owners`).then(e => e.json())
        }
    },
    removeAndList: {
        value: function (id) {
            return fetch(`${remoteURL}/owners/${id}`, {
                method: "DELETE"
            })
                .then(e => e.json())
                .then(() => fetch(`http://localhost:5002/owners`))
                .then(e => e.json())
        }
    },
    post: {
        value: function (newOwner) {
            return fetch(`${remoteURL}/owners`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newOwner)
            }).then(e => e.json())
        }
    },
    put: {
        value: function (newOwner, id) {
            return fetch(`${remoteURL}/owners/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newOwner)
            }).then(e => e.json())
            .then(() => fetch(`http://localhost:5002/owners`))
            .then(e => e.json())
        }
    }
})