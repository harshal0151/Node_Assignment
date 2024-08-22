const fs = require("fs").promises;
const { log } = require("console");
const path = require("path");
const readline = require('readline');

const filePath = path.join(__dirname, "task.txt");

const getInput = (que) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })


    return new Promise((resolve) => {
        rl.question(que, (ans) => {
            resolve(ans);
            rl.close();
        }
        );
    });


}

const addTask = async () => {
    try {
        const task = await getInput("Enter your task: ");

        try {
            await fs.access(filePath);
            const fileContent = await fs.readFile(filePath, "utf-8")

            if (fileContent.trim() === "") {
                await fs.writeFile(filePath, task);
            }
            else {
                await fs.appendFile(filePath, "\n" + task)
            }
        }
        catch (err) {
            await fs.writeFile(filePath, task)
        }
    }
    catch (err) {
        console.log("Error adding task: ", err);

    }
}

const viewFile = async () => {
    try {
        const data = await fs.readFile(filePath, "utf-8");
        return data.split("\n");

    }
    catch (err) {
        console.log(err);

    }
}

const markComplete = async () => {
    try {
        const data = await viewFile();

        if (data.length === 1 && data[0].trim() === "") {
            console.log('\nNo tasks added yet\n');
        }
        console.log('\nYour tasks are: ');

        data.map((item, idx) => {
            console.log(`${idx + 1}. ${item}`);
        });

        const idxNum = Number(
            await getInput("Enter the task number that you want to mark as read ")
        )
        console.log(idxNum);

        if(isNaN(idxNum) || idxNum < 1 || idxNum > data.length){
            console.log("Invalid task index. Please enter a valid number.");
            return;
        }
        
        data[idxNum - 1 ] = `[${data[idxNum - 1]}]`;
        await fs.writeFile(filePath , data.join('\n'));

        console.log("Task marked as complete");
        


    }
    catch (err) {
        console.log(err);
    }
}


const removeTask = async()=>{
    try{
        const data = await viewFile();

        if (data.length === 1 && data[0].trim() === "") {
            console.log('\nNo tasks added yet\n');
        }
        console.log('\nYour tasks are: ');

        data.map((item, idx) => {
            console.log(`${idx + 1}. ${item}`);
        });
        
        const idxNum = Number(
            await getInput("Enter the task number that you want to remove: ")
        )
        
        if(isNaN(idxNum) || idxNum < 1 || idxNum > data.length){
            console.log("Invalid task index. Please enter a valid number.");
            return;
        }

        const newTasks =  data.filter((_ , index)=>index !== idxNum - 1)
        await fs.writeFile(filePath , newTasks.join('\n'));
        console.log("Task removed succesfully");
        

        
        
    }
    catch(err){
        console.log(err);
        console.log(dono  );
        
        
    }
}


async function main() {
    while (true) {
        console.log("\n1. Add new task");
        console.log("2. View a list of task");
        console.log("3. Mark task as complete");
        console.log("4. Remove a task");
        console.log("5. Exit");


        const choice = await getInput("Chose an option: ");
        console.log(choice);

        switch (choice) {
            case "1":
                await addTask();
                break;
            case "2":
                const data = await viewFile();
                if (data.length === 1 && data[0].trim() === "") {
                    console.log('\nNo tasks added yet\n');
                }
                if (data.length > 0) {
                    console.log('\nYour tasks are: ');
                    data.map((item, idx) => {
                        console.log(`${idx + 1}. ${item}`);
                    });
                }
                else {
                    console.log("No tasks are available.");

                }
                break;

            case "3":
                await markComplete();
                break;

            case "4":
                await removeTask();
                break;

            case "5":
                process.exit();

            default:
                break;
        }




    }
}
main();