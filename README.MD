             +-------------------------+
             |        School           |
             +-------------------------+
             | - name: string          |
             | - location: string      |
             | - students: List[Student]|
             | - teachers: List[Teacher]|
             +-------------------------+
             | + add_student(student: Student): void |
             | + remove_student(student: Student): void |
             | + add_teacher(teacher: Teacher): void |
             | + remove_teacher(teacher: Teacher): void |
             | + get_student_list(): List[Student] |
             +-------------------------+

             +-------------------------+
             |        Student          |
             +-------------------------+
             | - name: string          |
             | - id: string            |
             | - grade_level: int      |
             | - courses: List[Course] |
             +-------------------------+
             | + enroll(course: Course): void |
             | + withdraw(course: Course): void |
             | + get_courses(): List[Course] |
             +-------------------------+

             +-------------------------+
             |        Teacher          |
             +-------------------------+
             | - name: string          |
             | - id: string            |
             | - subject: string       |
             | - courses: List[Course] |
             +-------------------------+
             | + assign_course(course: Course): void |
             | + unassign_course(course: Course): void |
             | + get_courses(): List[Course] |
             +-------------------------+

             +-------------------------+
             |        Course           |
             +-------------------------+
             | - name: string          |
             | - course_id: string     |
             | - teacher: Teacher      |
             | - students: List[Student]|
             +-------------------------+
             | + add_student(student: Student): void |
             | + remove_student(student: Student): void |
             | + get_student_list(): List[Student] |
             +-------------------------+
