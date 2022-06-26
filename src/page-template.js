const generateEmployee = employeeText => {
    if (!employeeText) {
        return '';
    }

    return `
    <div class="justify-left bg-teal-900 border-2 border-teal-600 w-1/4 m-5 shadow-2xl">
    <h2 class = "text-4xl font-bold p-2 text-zinc-200">${header.name}</h2>
    <h3 class = "text-3xl font-bold p-2 text-zinc-200">${header.role}</h3>
    <div class="bg-teal-200 pt-5 pr-2 pb-5 pl-2">
        <div class="flex flex-row"></div>
            <h4 class = "bg-white border border-teal-200">${header.ID}</h4>
            <h4 class = "bg-white border border-teal-200">${header.email}</h4>
            <h4 class = "bg-white border border-teal-200">${school}:</h4>
        </div>
    </div>
</div>
    `
}


module.exports = templateData => {
    // destructure page data by section
    const { managerOffice, gitHub, school, ...header } = templateData;
    return `
    <!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Team Profile</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <link rel="stylesheet" href="./style.css"/>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src='main.js'></script>
</head>
<body>
    <header class="flex flex-row justify-center bg-teal-600">
        <h1 class = "text-4xl text-zinc-200 font-bold underline p-10">My Team</h1>
    </header>
    <main>
        <section class="flex flex-row justify-evenly p-10 flex-wrap">
            <div class="bg-teal-900 border-2 border-teal-600 w-1/4 m-5 shadow-2xl">
                <h2 class = "text-4xl font-bold p-2 text-zinc-200">${header.name}</h2>
                <h3 class = "text-3xl font-bold p-2 text-zinc-200">${header.role}</h3>
                <div class="bg-teal-200 pt-5 pr-2 pb-5 pl-2">
                    <div class="flex flex-row"></div>
                        <h4 class = "bg-white border border-teal-200">${header.id}</h4>
                        <h4 class = "bg-white border border-teal-200">${header.email}</h4>
                        <h4 class = "bg-white border border-teal-200">${managerOffice}</h4>
                    </div>
                </div>
            </div>
            ${generateEmployee(employee)}

            <div class="justify-left bg-teal-900 border-2 border-teal-600 w-1/4 m-5 shadow-2xl">
                <h2 class = "text-4xl font-bold p-2 text-zinc-200">Name</h2>
                <h3 class = "text-3xl font-bold p-2 text-zinc-200">Intern</h3>
                <div class="bg-teal-200 pt-5 pr-2 pb-5 pl-2">
                    <div class="flex flex-row"></div>
                        <h4 class = "bg-white border border-teal-200">ID:</h4>
                        <h4 class = "bg-white border border-teal-200">Email:</h4>
                        <h4 class = "bg-white border border-teal-200">Office #:</h4>
                    </div>
                </div>
            </div>
            <div class="justify-left bg-teal-900 border-2 border-teal-600 w-1/4 m-5 shadow-2xl">
                <h2 class = "text-4xl font-bold p-2 text-zinc-200">Name</h2>
                <h3 class = "text-3xl font-bold p-2 text-zinc-200">Employee</h3>
                <div class="bg-teal-200 pt-5 pr-2 pb-5 pl-2">
                    <div class="flex flex-row"></div>
                        <h4 class = "bg-white border border-teal-200">ID:</h4>
                        <h4 class = "bg-white border border-teal-200">Email:</h4>
                        <h4 class = "bg-white border border-teal-200">Office #:</h4>
                    </div>
                </div>
            </div>
            <div class="justify-left bg-teal-900 border-2 border-teal-600 w-1/4 m-5 shadow-2xl">
                <h2 class = "text-4xl font-bold p-2 text-zinc-200">Name</h2>
                <h3 class = "text-3xl font-bold p-2 text-zinc-200">Employee</h3>
                <div class="bg-teal-200 pt-5 pr-2 pb-5 pl-2">
                    <div class="flex flex-row"></div>
                        <h4 class = "bg-white border border-teal-200">ID:</h4>
                        <h4 class = "bg-white border border-teal-200">Email:</h4>
                        <h4 class = "bg-white border border-teal-200">Office #:</h4>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer>

    </footer>
</body>
</html>
    `
}