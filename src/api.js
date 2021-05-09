export const loadProjects = async (name = '') => {
    const response = await fetch('http://localhost:3005/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            {
                projects(name: "${name}") {
                id
                name
                budget
                currency {
                    id
                    name
                    sign
                }
                }
            }`
        }),
    });
    return await response.json();
};

export const deleteProjects = async (id) => {
    const response = await fetch('http://localhost:3005/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            mutation {
                deleteProject(id: "${id}") {
                id
                }
            }`
        }),
    });
    return await response.json();
};

export const addProject = async (data) => {
    const { id, name, budget, currencyId } = data;

    const response = await fetch('http://localhost:3005/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
        mutation {
          addProject(id: "${id}", name: "${name}", budget: ${budget}, currencyId: "${currencyId}") {
            id
            name
            budget
          }
        }`
        }),
    });
    return await response.json();
};

export const updateProject = async (data) => {
    const { id, name, budget, currencyId } = data;

    const response = await fetch('http://localhost:3005/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
                mutation {
                addProject(id: "${id}", name: "${name}", budget: ${budget}, currencyId: "${currencyId}") {
                    id
                    name
                    budget
                }
            }`
        }),
    });
    return await response.json();
};

export const loadCurrencies = async () => {
    const response = await fetch('http://localhost:3005/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            {
                currencies {
                  id
                  name
                  sign
                }
              }`
        }),
    });
    return await response.json();
};