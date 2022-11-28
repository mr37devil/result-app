const studentInfo = {
    roll: 16,
    reg: 123,
    name: "Ahsan Habib",
    father: "Md. Mominul Islam",
    mother: "Selina Begum",
    dob: "05-05-2004",
    gender: "Male"
}

const StudentInfoLi = () => {
    return (
        <>
            <tr>
              <th>Name: </th>
              <td>Ahsan Habib </td>
            </tr>
        </>
    );
}

const Result = () => {
    return (
        <div className="result-sheet">
            <div className="container">
                <h3>Final Exam Result 2022</h3>
                <div className="student-info">
                    <table>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default Result; 