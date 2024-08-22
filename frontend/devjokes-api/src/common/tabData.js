const tabData = [
    {
        id: "get-all-jokes",
        title: "Get all Jokes",
        description: "Get all jokes from the database",
        endpoint: "/joke/",
        content:
            `
            [{<br>
            &emsp;&emsp;"id": 1,<br>
            &emsp;&emsp;"question": "Why did the noSQL developer leave the bar early?",<br>
            &emsp;&emsp;"punchline": "Because he did not find a table."<br>
            &emsp;},{<br>
            &emsp;&emsp;"id": 2,<br>
            &emsp;&emsp;"question": "",<br>
            &emsp;&emsp;"punchline": "My regex joke was so complex, even I didn’t know why it was funny."<br>
            }]
            `


    },
    {
        id: "get-specific-joke",
        title: "Get a single Joke",
        description: "Get a specific joke by ID",
        endpoint: "/joke/{ID}",
        example: "/joke/1/",
        content:
            `
            [{<br>
            &emsp;&emsp;"id": 1,<br>
            &emsp;&emsp;"question": "Why did the noSQL developer leave the bar early?",<br>
            &emsp;&emsp;"punchline": "Because he did not find a table."<br>
            }]
            `


    },
    {
        id: "delete-a-joke",
        title: "Delete a Joke",
        description: "Delete a specific joke by ID",
        endpoint: "/joke/{ID}",
        example: "/joke/1/",
        content:
            `
            [{<br>
            {"message": "Joke deleted successfully. One thing less to laugh about."}<br>
            }]
            `


    },

    {
        id: "post-a-joke",
        title: "Post a Joke",
        description: "Add a Joke to the database",
        endpoint: "/joke/",
        content:
            `
            [{<br>
            &emsp;&emsp;"question": "Why did the noSQL developer leave the bar early?",<br>
            &emsp;&emsp;"punchline": "Because he did not find a table."<br>
            &emsp;}]
            `


    },
    {
        id: "patch-a-joke",
        title: "Patch a Joke",
        description: "Partial update of a Joke in the database",
        endpoint: "/joke/",
        content:
            `
            [{<br>
            &emsp;&emsp;"question": "Why did the noSQL DEV leave the bar early?",<br>
            &emsp;}]
            `


    },
    {
        id: "search-for-jokes",
        title: "Search for Jokes",
        description: "Get all jokes from the database, containing a string in question or punchline",
        endpoint: "/joke/search/{search_term}",
        example: "/joke/search/dev/",
        content:
            `
            [{<br>
            &emsp;&emsp;"id": 1,<br>
            &emsp;&emsp;"question": "Why did the noSQL developer leave the bar early?",<br>
            &emsp;&emsp;"punchline": "Because he did not find a table."<br>
            &emsp;}]
            `


    },


]

export default tabData;