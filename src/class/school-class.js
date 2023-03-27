
import { v4 as uuidv4 } from "uuid"
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import Students from "./students-class.js";

class School{
    constructor(name,location,students,teachers){
        this.name=name;
        this.location=location;
        this.students=students;
        this.teachers=teachers;
    }

    readDB() {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const pathDb = path.join(__dirname, '../../db/school.db.json')
        if (fs.existsSync(pathDb)) {
            const listDb = JSON.parse(fs.readFileSync(pathDb, { encoding: 'utf-8' }))
            return listDb.length > 0 ? listDb : []
        }
    }

    writeDb(newArray) {
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        const pathDb = path.join(__dirname, '../../db/school.db.json')
        if (fs.existsSync(pathDb)) {
            fs.writeFileSync(pathDb,JSON.stringify(newArray))
        }
   }

    addStudents(){
        const idStudent=uuidv4();
        const newStudent=new Students(name,id,grade,courses)
        const studentsList=this.readDB();
        studentsList.push(newStudent)
        this.writeDb(studentsList)
    }

}

export default School